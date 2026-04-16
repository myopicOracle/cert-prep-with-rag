from langchain_text_splitters import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter

# manually select file to ingest
# file_name = "vpc_ug.md"
file_name = "AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.md"
file_path = f"data/markdown/{file_name}"

with open(file_path, "r", encoding="utf-8") as my_file:
    content = my_file.read()

markdown_document = content
test_snippet = markdown_document[:1000]
print(f"Preview raw markdown: {test_snippet}")

# chunk by heading and associate metadata
headers_to_split_on = [
    ("#", "h1"),
    ("##", "h2"),
    ("###", "h3"),
    ("####", "h4"),
]

markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on)
md_header_splits = markdown_splitter.split_text(markdown_document)

# break over-sized chunks
chunk_size = 500
chunk_overlap = 50

text_splitter = RecursiveCharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
splits = text_splitter.split_documents(md_header_splits)

# print(f"splits: {splits}\n")
# print(f"type(splits[0]): {type(splits[0])}\n")


# enrich raw chunks with header path
def enrich_content(page_content, metadata):
    heading_parts = [
        metadata.get("h1"),
        metadata.get("h2"),
        metadata.get("h3"),
        metadata.get("h4"),
    ]

    filtered_headings = []
    for heading in heading_parts:
        if heading is not None:
            filtered_headings.append(heading)

    heading_path = " > ".join(filtered_headings)
    # print(f"Enriched header: {heading_path}")

    return f"{heading_path}: {page_content}"


for split in splits:
    split.page_content = enrich_content(split.page_content, split.metadata)

for index, split in enumerate(splits[:5]):
    print(f"\nEnriched Chunk {index + 1}:")
    print(split.page_content[:250])
