import json
import os

from dotenv import load_dotenv
from supabase import create_client

load_dotenv(".env.local")

supabase = create_client(
    os.getenv("NEXT_PUBLIC_SUPABASE_URL"),
    os.getenv("SUPABASE_SERVICE_ROLE_KEY"),
)

input_path = "data/with-embeddings.json"

print("Loading documents...\n")
with open(input_path, "r", encoding="utf-8") as my_file:
    documents = json.load(my_file)
    print("Load success.")
    print(f"Number of documents: {len(documents)}")
    print(f"Embedding size: {len(documents[0]['embedding'])}\n")

single_row = {
    "content": documents[0]["content"],
    "metadata": documents[0]["metadata"],
    "source_url": documents[0]["source_url"],
    "embedding": documents[0]["embedding"],
}

result = supabase.table("documents").insert(single_row).execute()
print(f"Result of Supabase inser: {result}\n")
