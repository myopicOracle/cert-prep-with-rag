from docling.document_converter import DocumentConverter

pdf_path = "docs/sample-pdfs/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf"

pdf_file_name = pdf_path.split("/")[-1]
markdown_file_name = pdf_file_name.replace(".pdf", ".md")

markdown_prefix = "data/markdown/"
markdown_path = markdown_prefix + markdown_file_name
# print(markdown_path)

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
