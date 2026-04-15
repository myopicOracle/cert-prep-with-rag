from langchain_text_splitters import MarkdownHeaderTextSplitter
from langchain_text_splitters import RecursiveCharacterTextSplitter

file_name = "vpc_ug.md"
file_path = f"data/markdown/{file_name}"

with open(file_name, 'r', encoding='utf-8') as my_file:
    content = my_file.read()

test_snippet = content[:2000]
print(f"snippet: {test_snippet}")

markdown_document = content

headers_to_split_on = [
    ("#", "h1"),
    ("##", "h2"),
    ("###", "h3"),
    ("####", "h4"),
]

markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on)
md_header_splits = markdown_splitter.split_text(markdown_document)

print(f"md_header_splits: {md_header_splits}\n")
print(f"type(md_header_splits[0]): {type(md_header_splits[0])}\n")

chunk_size = 500
chunk_overlap = 50
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=chunk_size, chunk_overlap=chunk_overlap
)

splits = text_splitter.split_documents(md_header_splits)

print(f"splits: {splits}\n")
print(f"type(splits[0]): {type(splits[0])}\n")
