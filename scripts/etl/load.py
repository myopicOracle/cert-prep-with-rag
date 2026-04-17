import json
import os

from dotenv import load_dotenv
from supabase import create_client

load_dotenv(".env.local")
input_path = "data/chunks/with-embeddings.json"

supabase = create_client(
    os.getenv("NEXT_PUBLIC_SUPABASE_URL"),
    os.getenv("SUPABASE_SERVICE_ROLE_KEY"),
)


def ingest_documents():
    print("Ingesting documents...\n")

    with open(input_path, "r", encoding="utf-8") as my_file:
        documents = json.load(my_file)
        print(f"Ingested {len(documents)} documents.\n")

    return documents


def insert_documents(documents):
    count = 0
    for row in documents:
        data = {
            "content": row["content"],
            "metadata": row["metadata"],
            "source_url": row["source_url"],
            "embedding": row["embedding"],
        }

        supabase.table("documents").insert(data).execute()
        count += 1

        print("Supabase operation success.")
        print(f"Inserted {count} documents.\n")


def main():
    documents = ingest_documents()
    insert_documents(documents)


if __name__ == "__main__":
    main()
