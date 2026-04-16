import json

from langchain_text_splitters import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter

# file_name = "vpc_ug.md"
file_name = "AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.md"


# chunk by heading and associate metadata
def split_and_chunk(content):
    chunk_size = 500
    chunk_overlap = 50

    headers_to_split_on = [
        ("#", "h1"),
        ("##", "h2"),
        ("###", "h3"),
        ("####", "h4"),
    ]

    # chunk by heading
    markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on)
    md_header_splits = markdown_splitter.split_text(content)

    # break over-sized chunks
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
    splits = text_splitter.split_documents(md_header_splits)

    # print(f"splits: {splits}\n")
    # print(f"type(splits[0]): {type(splits[0])}\n")

    return splits


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


# shape data for embedding model (schema: `docs/db-schema/20260415-schema-snapshot.sql`)
def data_to_embed(raw_chunks):
    source_url = file_name
    document_chunks = []

    for split in raw_chunks:
        content = split.page_content

        headings = {
            "h1": split.metadata.get("h1"),
            "h2": split.metadata.get("h2"),
            "h3": split.metadata.get("h3"),
            "h4": split.metadata.get("h4"),
        }

        chunk_obj = {
            "content": content,
            "metadata": headings,
            "source_url": source_url,
        }

        document_chunks.append(chunk_obj)

    print("\nChecks Passed" if len(raw_chunks) == len(document_chunks) else "Documents Length Mismatch")
    print(f"Initial chunks: {len(raw_chunks)} | Processed chunks: {len(document_chunks)}")

    return document_chunks


def main():
    file_path = f"data/markdown/{file_name}"

    with open(file_path, "r", encoding="utf-8") as my_file:
        content = my_file.read()

    markdown_document = content

    test_snippet = "\n# ".join(markdown_document.split("\n# ")[:3])
    print(f"Preview raw markdown: {test_snippet}")

    raw_chunks = split_and_chunk(markdown_document)

    for split in raw_chunks:
        split.page_content = enrich_content(split.page_content, split.metadata)

    # for index, split in enumerate(splits[:5]):
    #     print(f"\nEnriched Chunk {index + 1}:")
    #     print(split.page_content[:250])

    document_chunks = data_to_embed(raw_chunks)

    # save shaped chunk objects to preview
    with open("data/chunks-preview.json", "w", encoding="utf-8") as f:
        json.dump(document_chunks, f, indent=2)

    print("\nSaved data/chunks-preview.json")


if __name__ == "__main__":
    main()
