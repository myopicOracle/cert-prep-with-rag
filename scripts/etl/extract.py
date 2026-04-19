import os

# prevent layout model from crashing on large PDFs
os.environ["SURYA_BATCH_SIZE"] = "5"
os.environ["TORCH_DEVICE"] = "cpu"

import re
import tempfile
from datetime import datetime
from pathlib import Path

# # manually select file to process
# file_to_extract = "AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf" # 23 pages (~10 sec)
# file_to_extract = "wellarchitected-machine-learning-lens.pdf"  # 370 pages (~15 min)
# file_to_extract = "vpc-ug.pdf"  # 699 pages (~30 min)
file_to_extract = "s3-userguide.pdf"  # 3,556 pages (~4 hours)

# chunk to reset state for surya sequence length index
CHUNK_SIZE = 100
TOP_TOC_SCAN_LIMIT = 200
TOP_BOILERPLATE_SCAN_LIMIT = 120

PAGE_ANCHOR_RE = re.compile(r'<span id="[^"]+"></span>')
BOLDED_HEADING_RE = re.compile(r"(#+)\s*\*\*([^*]+)\*\*")
IMAGE_REF_RE = re.compile(r"!\[\]\([^)]+\)")
INTERNAL_PAGE_LINK_RE = re.compile(r"\[([^\]]+)\]\(#page-[^)]+\)")
COPYRIGHT_LINE_RE = re.compile(r"^Copyright © .*All rights reserved\.$")
HEADING_RE = re.compile(r"^#{1,6}\s")
TOP_LEVEL_H1_RE = re.compile(r"^#\s")
ISOLATED_PAGE_TITLE_RE = re.compile(r"^[A-Z][A-Za-z0-9/&,:;()'\".\- ]+\s\d{1,4}$")
SUP_TAG_RE = re.compile(r"</?sup>")
AWS_TRADEMARK_PREFIX = "Amazon's trademarks and trade dress"


def split_pdf(pdf_path, chunk_size):
    import fitz

    doc = fitz.open(str(pdf_path))
    total = len(doc)
    for start in range(0, total, chunk_size):
        chunk = fitz.open()
        chunk.insert_pdf(doc, from_page=start, to_page=min(start + chunk_size, total) - 1)
        tmp = tempfile.NamedTemporaryFile(suffix=".pdf", delete=False)
        chunk.save(tmp.name)
        chunk.close()
        tmp.close()
        yield Path(tmp.name)
    doc.close()


def strip_top_of_document_toc_block(lines):
    toc_index = None
    for index, line in enumerate(lines[:TOP_TOC_SCAN_LIMIT]):
        if line.strip() == "# Table of Contents":
            toc_index = index
            break

    if toc_index is None:
        return lines

    for index in range(toc_index + 1, len(lines)):
        if TOP_LEVEL_H1_RE.match(lines[index].strip()):
            return lines[index:]

    return lines


def strip_top_boilerplate(lines):
    cleaned_lines = []
    index = 0

    while index < len(lines):
        stripped = lines[index].strip()

        if COPYRIGHT_LINE_RE.fullmatch(stripped):
            index += 1
            continue

        if index < TOP_BOILERPLATE_SCAN_LIMIT and stripped.startswith(AWS_TRADEMARK_PREFIX):
            index += 1
            while index < len(lines) and lines[index].strip():
                index += 1
            while index < len(lines) and not lines[index].strip():
                index += 1
            continue

        cleaned_lines.append(lines[index])
        index += 1

    return cleaned_lines


def is_isolated_page_footer_line(lines, index):
    stripped = lines[index].strip()

    if not stripped:
        return False
    if HEADING_RE.match(stripped):
        return False
    if stripped.startswith(("- ", "* ", "+ ", "|", ">", "```")):
        return False
    if re.fullmatch(r"<https?://[^>]+>", stripped):
        return False
    if "http://" in stripped or "https://" in stripped:
        return False
    if not ISOLATED_PAGE_TITLE_RE.fullmatch(stripped):
        return False

    previous_line = lines[index - 1].strip() if index > 0 else ""
    next_line = lines[index + 1].strip() if index < len(lines) - 1 else ""

    previous_blank = not previous_line
    next_blank = not next_line
    previous_heading = bool(HEADING_RE.match(previous_line))
    next_heading = bool(HEADING_RE.match(next_line))

    return (previous_blank and next_blank) or (previous_blank and next_heading) or (previous_heading and next_blank)


def strip_isolated_page_footer_lines(lines):
    cleaned_lines = []

    for index, line in enumerate(lines):
        if is_isolated_page_footer_line(lines, index):
            continue
        cleaned_lines.append(line)

    return cleaned_lines


def clean_markdown(markdown_text):
    markdown_text = PAGE_ANCHOR_RE.sub("", markdown_text)
    markdown_text = BOLDED_HEADING_RE.sub(r"\1 \2", markdown_text)
    markdown_text = markdown_text.replace("<br>", " ")
    markdown_text = IMAGE_REF_RE.sub("", markdown_text)
    markdown_text = INTERNAL_PAGE_LINK_RE.sub(r"\1", markdown_text)

    lines = markdown_text.splitlines()
    lines = strip_top_of_document_toc_block(lines)
    lines = strip_top_boilerplate(lines)
    lines = strip_isolated_page_footer_lines(lines)

    markdown_text = "\n".join(lines)
    markdown_text = SUP_TAG_RE.sub("", markdown_text)
    markdown_text = re.sub(r"[ \t]+\n", "\n", markdown_text)
    markdown_text = re.sub(r"\n{3,}", "\n\n", markdown_text)

    return markdown_text.strip() + "\n"


# prevent child processes re-running script
def main():

    # path manipulation
    pdf_path = Path(f"data/pdfs/{file_to_extract}")
    output_dir = Path("data/markdown")

    date_suffix = datetime.now().strftime("%Y%m%d_%H%M%S")
    markdown_path = output_dir / f"{pdf_path.stem}-{date_suffix}.md"

    # main pdf -> markdown engine
    print("- Spinning Up PDF Extraction Engine -\n")
    from marker.converters.pdf import PdfConverter
    from marker.models import create_model_dict

    converter = PdfConverter(artifact_dict=create_model_dict())

    print(f"Beginning extraction process for: {file_to_extract}")
    parts = []
    for chunk_path in split_pdf(pdf_path, CHUNK_SIZE):
        parts.append(converter(str(chunk_path)).markdown)
        os.unlink(chunk_path)

    print("Exporting to markdown")
    markdown_text = "\n\n".join(parts)
    markdown_text = clean_markdown(markdown_text)

    # save results
    with open(markdown_path, "w", encoding="utf-8") as new_file:
        new_file.write(markdown_text)

    print(f"Success. Markdown saved to: {markdown_path}")
    print("\n- Extraction Engine Stopped -")


# prevent recursive spawning
if __name__ == "__main__":
    main()
