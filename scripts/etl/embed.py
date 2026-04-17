import json
import os

import boto3
from dotenv import load_dotenv

load_dotenv(".env.local")

bedrock = boto3.client(
    "bedrock-runtime",
    region_name=os.getenv("AWS_REGION"),
)

input_path = "data/chunks/without-embeddings.json"
output_path = "data/chunks/with-embeddings.json"


def get_embedding(raw_text):
    response = bedrock.invoke_model(
        modelId="amazon.titan-embed-text-v2:0",
        contentType="application/json",
        accept="application/json",
        body=json.dumps(
            {
                "inputText": raw_text,
                "dimensions": 1024,
                "normalize": True,
            }
        ),
    )

    body = json.loads(response["body"].read())
    # print(f"Embedding length: {len(body['embedding'])}")

    return body["embedding"]


def main():
    with open(input_path, "r", encoding="utf-8") as my_file:
        document_chunks = json.load(my_file)

    counter = 0
    for chunk in document_chunks:
        embedding = get_embedding(chunk["content"])
        chunk["embedding"] = embedding

        counter += 1
        if counter % 5 == 0 or counter == len(document_chunks):
            print(f"Success. Added embeddings to {counter} documents.")
        else:
            progress = counter % 5
            print("." * progress)

    # save documents with embeddings added
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(document_chunks, f, indent=2)

    print("\nSaved data/chunks/with-embeddings.json")


if __name__ == "__main__":
    main()

    # Type - (Raw Chunk No Embedding): <class 'dict'> | has keys: 'content', 'metadata', 'source_url'
    # Type - (Returned Embedding Obj): <class 'dict'> | has keys: 'embedding', 'inputTextTokenCount'
    # Type - (embedding['embedding']): <class 'list'> | has items: type float
    # Type - (embedding['embedding'][0]): <class 'float'>
    # Type - (Chunk WITH Embedding): <class 'dict'> | has keys: 'content', 'metadata', 'source_url', 'embedding'
