import json
import os

import boto3
from dotenv import load_dotenv

load_dotenv(".env.local")

bedrock = boto3.client(
    "bedrock-runtime",
    region_name=os.getenv("AWS_REGION"),
)

with open("data/chunks-preview.json", "r", encoding="utf-8") as my_file:
    document_chunks = json.load(my_file)

response = bedrock.invoke_model(
    modelId="amazon.titan-embed-text-v2:0",
    contentType="application/json",
    accept="application/json",
    body=json.dumps(
        {
            "inputText": document_chunks[0]["content"],
            "dimensions": 1024,
            "normalize": True,
        }
    ),
)

body = json.loads(response["body"].read())
print(f"Embedding length: {len(body['embedding'])}")  # Embedding length: 1024
print(f"Return type: {type(body)}")  # Return type: <class 'dict'>
# print(f"Returned object: {body}")
