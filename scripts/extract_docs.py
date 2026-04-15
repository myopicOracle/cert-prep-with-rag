from pathlib import Path
from docling.document_converter import DocumentConverter

pdf_path = Path("docs/sample-pdfs/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf")
output_dir = Path("data/markdown")

markdown_file_name = f"{pdf_path.stem}.md"
markdown_path = output_dir / markdown_file_name

print("Spinning up PDF extraction engine")
converter = DocumentConverter()

print("Beginning extraction process")
raw_text = converter.convert(pdf_path)
markdown_text = raw_text.document.export_to_markdown()

# print("Extraction completed. Previewing first 500 chars:")
# print(markdown_text[:500])

print(f"Saving to {markdown_path}")
with open(markdown_path, "w", encoding="utf-8") as new_file:
    new_file.write(markdown_text)

print("Markdown saved successfully")
print("- Extraction Engine Stopped -")
