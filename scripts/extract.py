import os
import re
from datetime import datetime
from pathlib import Path

from marker.converters.pdf import PdfConverter
from marker.models import create_model_dict

# prevent layout model from crashing on large PDFs
os.environ["SURYA_BATCH_SIZE"] = "5"
os.environ["TORCH_DEVICE"] = "cpu"

# manually select file to process
# file_to_extract = "vpc-ug.pdf"
file_to_extract = "AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf"


# prevent child processes re-running script
def main():

    # path manipulation
    pdf_path = Path(f"docs/sample-pdfs/{file_to_extract}")
    output_dir = Path("data/markdown")

    markdown_file_name = f"{pdf_path.stem}.md"
    markdown_path = output_dir / markdown_file_name

    if markdown_path.exists():
        date_suffix = datetime.now().strftime("%Y%m%d_%H%M%S")
        markdown_path = output_dir / f"{pdf_path.stem}-{date_suffix}.md"

    # main pdf -> markdown engine
    print("Spinning up PDF extraction engine")
    converter = PdfConverter(artifact_dict=create_model_dict())

    print(f"Beginning extraction process for: {file_to_extract}")
    rendered = converter(str(pdf_path))

    print("Exporting to markdown")
    markdown_text = rendered.markdown

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
    print(f"Saving to {markdown_path}")
    with open(markdown_path, "w", encoding="utf-8") as new_file:
        new_file.write(markdown_text)

    print("Markdown saved successfully")
    print("- Extraction Engine Stopped -")


# prevent recursive spawning
if __name__ == "__main__":
    main()
