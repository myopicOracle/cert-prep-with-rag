from pathlib import Path
from datetime import datetime
from docling.document_converter import DocumentConverter
from hierarchical.postprocessor import ResultPostprocessor # added to resolve hierarchy recognition issue

file_to_extract="vpc-ug.pdf" # NTD: make less janky
# file_to_extract="AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf"

pdf_path = Path(f"docs/sample-pdfs/{file_to_extract}")
output_dir = Path("data/markdown")

markdown_file_name = f"{pdf_path.stem}.md"
markdown_path = output_dir / markdown_file_name

if markdown_path.exists():
    date_suffix = datetime.now().strftime("%Y%m%d")
    markdown_path = output_dir / f"{pdf_path.stem}-{date_suffix}.md"

print("Spinning up PDF extraction engine")
converter = DocumentConverter()

print("Beginning extraction process")
raw_text = converter.convert(pdf_path) # docling

print("Postprocessing")
ResultPostprocessor(raw_text).process() # community-package: modifies result.document in place

print("Exporting to markdown")
markdown_text = raw_text.document.export_to_markdown() # docling

# print("Extraction completed. Previewing first 500 chars:")
# print(markdown_text[:500])

print(f"Saving to {markdown_path}")
with open(markdown_path, "w", encoding="utf-8") as new_file:
    new_file.write(markdown_text)

print("Markdown saved successfully")
print("- Extraction Engine Stopped -")
