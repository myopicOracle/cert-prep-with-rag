import os

# prevent layout model from crashing on large PDFs
os.environ["SURYA_BATCH_SIZE"] = "5"
os.environ["TORCH_DEVICE"] = "cpu"

import re
import tempfile
from datetime import datetime
from pathlib import Path

from marker.converters.pdf import PdfConverter
from marker.models import create_model_dict
from pypdf import PdfReader, PdfWriter

# chunk to reset state for surya sequence length index
CHUNK_SIZE = 100


def split_pdf(pdf_path, chunk_size):
    reader = PdfReader(str(pdf_path))
    total = len(reader.pages)
    for start in range(0, total, chunk_size):
        writer = PdfWriter()
        for i in range(start, min(start + chunk_size, total)):
            writer.add_page(reader.pages[i])
        tmp = tempfile.NamedTemporaryFile(suffix=".pdf", delete=False)
        writer.write(tmp)
        tmp.close()
        yield Path(tmp.name)


# manually select file to process
# file_to_extract = "AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf" # 20 pages
# file_to_extract = "vpc-ug.pdf" # 700 pages
file_to_extract = "wellarchitected-machine-learning-lens.pdf"  # 370 pages


# prevent child processes re-running script
def main():

    # path manipulation
    pdf_path = Path(f"data/pdfs/{file_to_extract}")
    output_dir = Path("data/markdown")

    markdown_file_name = f"{pdf_path.stem}.md"
    markdown_path = output_dir / markdown_file_name

    date_suffix = datetime.now().strftime("%Y%m%d_%H%M%S")
    markdown_path = output_dir / f"{pdf_path.stem}-{date_suffix}.md"

    # main pdf -> markdown engine
    print("- Spinning Up PDF Extraction Engine -\n")
    converter = PdfConverter(artifact_dict=create_model_dict())

    print(f"Beginning extraction process for: {file_to_extract}")
    parts = []
    for chunk_path in split_pdf(pdf_path, CHUNK_SIZE):
        parts.append(converter(str(chunk_path)).markdown)
        os.unlink(chunk_path)

    print("Exporting to markdown")
    markdown_text = "\n\n".join(parts)

    # clean extracted markdown
    markdown_text = re.sub(r'<span id="[^"]+"></span>', "", markdown_text)  # page anchors
    markdown_text = re.sub(r"(#+)\s*\*\*([^*]+)\*\*", r"\1 \2", markdown_text)  # bolded header formatting
    markdown_text = markdown_text.replace("<br>", " ")  # table cell breaks
    markdown_text = re.sub(r"!\[\]\([^)]+\)", "", markdown_text)  # image references
    markdown_text = re.sub(r"\[([^\]]+)\]\(#page-[^)]+\)", r"\1", markdown_text)  # internal link pointers
    markdown_text = re.sub(r"\n[A-Za-z\s]+ \d+\n", "\n", markdown_text)  # generic dangling page footers
    markdown_text = re.sub(r"Version \d+\.\d+ [A-Z0-9\-]+ \d+ \| PAGE", "", markdown_text)  # exam guide footers
    markdown_text = re.sub(r"\n{3,}", "\n\n", markdown_text)  # ghost space left by regex

    # save results
    with open(markdown_path, "w", encoding="utf-8") as new_file:
        new_file.write(markdown_text)

    print(f"Success. Markdown saved to: {markdown_path}")
    print("\n- Extraction Engine Stopped -")


# prevent recursive spawning
if __name__ == "__main__":
    main()
