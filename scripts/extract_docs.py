from docling.document_converter import DocumentConverter

file_path = "data/raw_pdfs/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf"

print("Spinning up PDF extraction engine")
converter = DocumentConverter()

print("Beginning extraction process")
raw_text = converter.convert(file_path)

markdown_text = raw_text.document.export_to_markdown()

print("Extraction completed. Previewing first 500 chars:")
print(markdown_text[:500])


# npm run docs:extract

# > docs-app@0.1.0 docs:extract
# > .venv/bin/python scripts/extract_docs.py

# Spinning up PDF extraction engine
# Beginning extraction process
# Loading weights: 100%|██████████████████████████████████████████████████████████████████████████████████████████| 770/770 [00:00<00:00, 2564.25it/s]
# Extraction completed. Previewing first 500 chars:
# <!-- image -->

# ## AWS Certified Machine Learning Engineer -Associate (MLA-C01) Exam Guide

# ## Introduction

# The AWS Certified Machine Learning Engineer - Associate (MLA-C01) exam validates a candidate's ability to build, operationalize, deploy, and maintain machine learning (ML) solutions and pipelines by using the AWS Cloud.

# The exam also validates a candidate's ability to complete the following tasks:

# -  Ingest, transform, validate, and prepare data for ML modeling.
# -  Select general mode