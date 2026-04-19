# Journal: Project CloudIQ

_Documents , inflection points, useful notes, and relevant minutiae._

## Sprint 2: RAG Pipeline

Goal: Establish a working `/api/ask` endpoint.

### [S2-1] AWS Bedrock Client & Identity Verification

**Task**  
Configure local environment to communicate with AWS Bedrock.

**Decision**

Installing the AWS Serverless Application Model (SAM) was recommended for testing scripts and hitting endpoints locally in a "mock" AWS environment, but given the low number of queries I would be making for the next few weeks, I decided to defer this until I would actually be hitting AWS servers with some regularity.

That being said, installing the AWS CLI makes your life easier (although you could go the Cloudshell route or just click around in the Management Console), and the AWS SDK is necessary for making API calls, similar to the OpenAI SDK or Vercel AI SDK.

**Challenges**

I heard about issues with accessing Anthropic's models on Bedrock, so I submitted a usage report to Anthropic for Claude Haiku 4.5 about a week prior to starting Sprint 1. But what ended up blocking me for almost 2 weeks was Bedrock's default service quotas.

I assumed there'd be no issues since most non-Marketplace models are now technically available on first invocation, but it looks like a combination of high demand for Bedrock inference and new account sandboxing caused my actual service quota to be set to 0. Thankfully the AWS Support Team was pretty helpful in pushing my ticket through the Services Team's queue and getting the sandbox lifted.

It ended up working out because I swapped Sprint 1's original goals with a parallel feature - the Mock Exam UI - but the lesson here is never assume!

<details>

<summary>Notes on Installing SDK, Setting Up IAM Access, Requesting Service Quota Increases, Calling the Bedrock API.</summary>

**Install SDK**

```zsh
npm install @aws-sdk/client-bedrock-runtime
```

[AWS SDK for JavaScript v3](https://github.com/aws/aws-sdk-js-v3) | [Developer Guide](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/) | [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/introduction/)

**API**

[How to set up environment](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started-api.html)

[BedrockClient API](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bedrock/)

**Set up Access**

[IAM](https://docs.aws.amazon.com/bedrock/latest/userguide/security-iam.html)

</details>

<br>

> _Note: For a quick sanity check for model access you can always open Playgrounds in Bedrock and try chatting with the models you want to invoke, along with testing access with the region/response mode you need._

### [S2-2] Bedrock Embedding and Chat Endpoints

**Task**

- S2-2A. Create a reusable AWS Bedrock client with error handling to signal comm channels clear and credentials are all good.
- S2-2B. Write a Converse call to Haiku and test it returns an LLM response via console.log using npx in terminal.
- S2-2C. Write a Invoke call to Titan Embedding and test it returns the correct vector object via console.log using npx in terminal.
- S2-2D. Package them into exports and drop into a simple test script for dry run.

**Takeaways**

I initially assumed that all Bedrock Runtime engine [endpoints](https://docs.aws.amazon.com/bedrock/latest/userguide/endpoints.html) have a uniform set of required parameters. However the uniform interface is only true of the `Converse API`. For the older `Invoke API`, where you're essentially sending raw JSON, different [foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html) can have slightly different param requirements. To that end, consulting the [parameters and response fields](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) for various FM's is quite helpful.

_Amazon Titan Text Embeddings v2_

Rolled out in mid 2024, [Titan Text Embeddings v2](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-amazon-titan-text-embeddings-v2.html) is the most advanced of AWS's embedding models, outperforming Titan G1 at 20% of the cost.

One notable departure from Titan G1 and other text embedding models like OpenAI's, is the dimensionality. Whereas G1 and OpenAI's text embedding models typically use 1536, Titan Text Embeddings v2 uses 1024, 512, or 256.

512 is said to be [99% as accurate](https://aws.amazon.com/blogs/aws/amazon-titan-text-v2-now-available-in-amazon-bedrock-optimized-for-improving-rag/), but I opted for 1024 to maximize accuracy.

_Converse API Endpoint_

Unlike OpenAI's ChatCompletions endpoint, Bedrock's Converse endpoint has a more complex nested structure when passing in messages. It uses an array of content blocks because Bedrock supports multimodal inputs, like:

```ts
content: [
    { text: 'What is in this image?' },
    { image: { format: 'png', source: { bytes: imageData } } },
    { text: 'Please describe it in detail.' },
]
```

So even if you're only passing text inputs, you'll need an array of objects:

```ts
const messages = [
    {
        role: 'user',
        content: [{ text: 'What is Amazon SageMaker? Explain in under 50 words.' }],
    },
]
```

...instead of a string like with OpenAI ChatCompletions:

```ts
const messages = [
    {
        role: 'user',
        content: 'What is Amazon SageMaker? Explain in under 50 words.',
    },
]
```

**Decision**

Bedrock uses two main endpoint families: Mantle and Runtime.

Mantle is the newer engine for OpenAI-compatibility. But since I don't have any legacy OpenAI code to port over, and my goal is to build as much of this on AWS as possible, going with the Runtime engine would be a better choice since it's AWS-native and allows me to learn an inference framework I haven't used before.

The basic breakdown for both is as follows.

_Mantle_

- Distributed inference engine designed specifically for OpenAI-compatible large-scale model serving. Use the OpenAI SDK to call Amazon Bedrock models by simply changing the base_url.
- Primary APIs: `Chat Completions`, `Responses`
- Endpoint Format: `bedrock-mantle.{region}.api.aws`
- Best For: Migrating existing OpenAI-based applications to AWS with minimal code changes or using external tools that expect an OpenAI API format.

_Bedrock_

- The AWS-native, serverless API for invoking models within the AWS ecosystem. Also the default way to use Amazon Bedrock via AWS SDKs or AWS CLI.
- Primary APIs: `InvokeModel`, `Converse`
- Endpoint Format: `bedrock-runtime.{region}.amazonaws.com`
- Best For: Applications built natively on AWS using IAM roles and AWS SDKs, especially those requiring complex features like Guardrails and Agents.

> [Reference](https://docs.aws.amazon.com/bedrock/latest/userguide/endpoints.html)

<details>

<summary>S2-2B: Converse Call to Haiku</summary>

```ts
async function testCall() {
    const command = new ConverseCommand({
        modelId: 'us.anthropic.claude-haiku-4-5-20251001-v1:0',
        messages: [
            {
                role: 'user',
                content: [{ text: 'What is Amazon SageMaker?' }],
            },
        ],
    })

    const responseObj = await client.send(command)
    const responseText = responseObj.output.message.content[0].text
}
```

</details>

<details>

<summary>S2-2C: Invoke Call to Titan v2</summary>

```ts
async function testEmbed() {
    const command = new InvokeModelCommand({
        modelId: models.embedding,
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify({
            inputText:
                'Amazon SageMaker is often used as an umbrella term encompassing SageMaker Studio, Notebooks, Jumpstart, Canvas, and many more AWS ML services. It is designed for Data Scientists and advanced customization and integration, distinct from AWS Bedrock, which abstracts away a degree of technical complexity.',
            dimensions: 1024,
            normalize: true,
        }),
    })

    const response = await client.send(command)
    const responseBody = JSON.parse(new TextDecoder().decode(response.body))
}
```

</details>

<details>

<summary>Helpful Reference Links</summary>

[APIs supported by Amazon Bedrock:](https://docs.aws.amazon.com/bedrock/latest/userguide/apis.html)

- [Invoke API](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-invoke.html)
- [Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html)
- [Responses API](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-mantle.html#bedrock-mantle-responses) / [OpenAI Docs](https://platform.openai.com/docs/api-reference/responses)
- [Chat Completions API](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-chat-completions.html)

[Inference Fundamentals:](https://docs.aws.amazon.com/bedrock/latest/userguide/inference.html)

- [How inference works in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-how.html)
- [Optimize model inference for latency](https://docs.aws.amazon.com/bedrock/latest/userguide/latency-optimized-inference.html)
- [Generate responses using OpenAI APIs](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-mantle.html)
- [Submit prompts and generate responses using the API](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-api.html)

</details>

<br>

### [S2-3] Create Supabase Vector Table

_You can find virtually everything you need to know for the Supabase vector table setup [here](https://supabase.com/docs/guides/ai/vector-columns)._

_To dive deeper on indexing specifically, see [this](https://github.com/pgvector/pgvector#indexing)._

**Distance Metrics: Cosine, Euclidean, Inner Product**

pgvector support 3 distance metrics:

- Cosine Similarity | operator: `<=>` | op class: `vector_cosine_ops`
- Euclidean Distance (L2) | operator: `<->` | op class: `vector_l2_ops`
- Inner Product | operator: `<#>` | op class: `vector_ip_ops`

_Why cosine similarity?_

- Titan Embeddings v2 uses normalize: true (unit vectors).
- Industry standard for semantic search.

**Index Types: HNSW vs IVFFlat**

pgvector supports 2 ANN (approximate nearest neighbor) index types:

- [HNSW](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes) (Hierarchical Navigable Small World) | Graph-based | Faster queries
- [IVFFlat](https://supabase.com/docs/guides/ai/vector-indexes/ivf-indexes) (Inverted File with Flat compression) | Clustering-based | Faster to build

_Why HNSW for RAG?_

- Works well out-of-the-box with no tuning
- I'm expecting thousands of documents, not millions
- Query speed is more important to me than build time

**Vector Dimensions**

Must match what's returned by the embedding function:

- My `getEmbedding()` function invokes Titan Text Embeddings v2 with a dimension parameter of 1024
- As such, the dimension value for pgvector must be set to `vector(1024)`

**Supabase pgvector**

Extensions must be [explicitly enabled](https://supabase.com/docs/guides/ai/vector-columns#enable-the-extension) per database (extensions are database-scoped). This can be done in two ways:

- Programmatically using SQL query `CREATE EXTENSION IF NOT EXISTS vector;`
- Via the Supabase Extension Management - Dashboard > Database > Extensions > search "vector" > click "Enable"

**Schema Design**

Now that the `vector` data type has been made available, the vector table can be created. The [Supabase example](https://supabase.com/docs/guides/ai/vector-columns#create-a-table-to-store-vectors) is intentionally barebones, but I needed a couple more columns.

1. `service_id`

- I expect a majority of user questions to be clarifying features and patterns for specific AWS Services, rather than based on role or task.
- This would allow me to filter `match_documents` queries to only search chunks from the relevant service

2. `source_url`

- AWS Docs are neatly packaged into PDFs by service name, so this seems like a natural partition to filter on.
- AWS Services aren't always neatly siloed, which means descriptions for one service can appear in various forms across multiple types of documentation. As such, being able to select the most appropriate version is vital.

3. `created_at`

- The point of building this RAG pipeline is to keep context fresh, and AWS has been making a lot of changes to shift, regroup, or rebrand services, especially in the AI/ML domain. This would allow me to perform selective batch updates.

**Creating the Table**

```sql
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT NOT NULL,
    embedding vector(1024) NOT NULL,
    source_url TEXT,
    service_id UUID REFERENCES services(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

<details>

<summary>Schema Now Looks Like:</summary>

![Schema Snapshot](docs/db-schema/20260413-schema-snapshot.png)

</details>

<br>

**Create HNSW Index**

The HNSW indexing algorithm should be leveraged to significantly speed up queries. Since it's graph-based, you can narrow the scope before running the search, kind of like how partition filtering and pushdown predicates work to reduce data movement and in-mem processing prior running the computationally-expensive analysis.

The canonical way to do so according to [Supabase docs](https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes#cosine-distance--vectorcosineops-) is:

```sql
create index on items using hnsw (column_name vector_cosine_ops);
```

You can further specify the `m` and `ef_construction` parameters, which tweak recall (more memory used) and accuracy (slower build time), but I think you would really need to know what you're doing here to justify changing the defaults.

```sql
CREATE INDEX ON documents USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);
```

Note that `m = 16` and `ef_construction = 64` are the values it will default to, so you could omit the second statement entirely and achieve the same result.

<details>

<summary>Verify HNSW Index Creation</summary>

After running the index creation command, you can confirm the index exists by running:

```sql
SELECT indexname, indexdef FROM pg_indexes WHERE tablename = 'documents';
```

You should see a response matching the distance metric (`vector_cosine_ops`), table name (`documents`), and vector column name (`embedding`) you defined in your `CREATE INDEX` statement:

```json
[
    {
        "indexname": "documents_pkey",
        "indexdef": "CREATE UNIQUE INDEX documents_pkey ON public.documents USING btree (id)"
    },
    {
        "indexname": "documents_embedding_idx",
        "indexdef": "CREATE INDEX documents_embedding_idx ON public.documents USING hnsw (embedding vector_cosine_ops) WITH (m='16', ef_construction='64')"
    }
]
```

</details>

<details>

<summary>Test Similarity Search Query</summary>

You can run a quick test in the Supabase SQL Editor using dummy data:

```sql
SELECT id, content, 1 - (embedding <=> array_fill(0.0, ARRAY[1024])::vector(1024)) AS similarity
FROM documents
ORDER BY embedding <=> array_fill(0.0, ARRAY[1024])::vector(1024)
LIMIT 5;
```

It should return `Success. No rows returned`, but make sure to click the 'Explain' tab in SQL Editor and confirm the query used `Index Scan` and not `Seq Scan`, the latter of which means that a full sequential scan was run, and your index was ignored.

Expected behavior:

```md
Limit (cost=4.41..4.62 rows=5 width=64) (actual time=0.035..0.036 rows=0 loops=1)
-> Index Scan using documents_embedding_idx on documents (cost=4.41..25.45 rows=490 width=64) (actual time=0.034..0.035 rows=0 loops=1)
...
```

</details>

<details>

<summary>Create "Stored Procedure" in Supabase</summary>

I'll let Supabase explain this one:

> _Supabase client libraries like supabase-js connect to your Postgres instance via PostgREST. PostgREST does not currently support pgvector similarity operators, so we'll need to wrap our query in a Postgres function and call it via the rpc() method:_

```sql
create or replace function match_documents (
  query_embedding extensions.vector(384),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  title text,
  body text,
  similarity float
)
language sql stable
as $$
  select
    documents.id,
    documents.title,
    documents.body,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by (documents.embedding <=> query_embedding) asc
  limit match_count;
$$;
```

</details>

<details>

<summary>Create RPC Function</summary>

> _To execute the function from your client library, call rpc() with the name of your Postgres function:_

```js
const { data: documents } = await supabaseClient.rpc('match_documents', {
    query_embedding: embedding, // Pass the embedding you want to compare
    match_threshold: 0.78, // Choose an appropriate threshold for your data
    match_count: 10, // Choose the number of matches
})
```

[Source](https://supabase.com/docs/guides/ai/vector-columns#querying-a-vector--embedding)

</details>

<br>

Note: Make sure to run the `match_documents` SQL function in the Supabase SQL Editor so that it exists in your database. Otherwise your RPC function has nothing to call.

If no error the result should be `Success. No rows returned`.

You can check that the function exists by following this path `Dashboard > Database > Functions`.

If you click the ellipses on the function card, you can navigate to `Client API docs`, which will give you the exact code you need to call the function.

In my case:

<!-- prettier-ignore -->
```js
let { data, error } = await supabase
  .rpc('match_documents', {
    match_count, 
    match_threshold, 
    query_embedding
  })
if (error) console.error(error)
else console.log(data)
```

### [S2-4] Extraction Pipeline: PDF -> Markdown -> Langchain

This step took much longer than anticipated. Having never really thought about how PDFs work, I was surprised to learn how hard it is to reliably extract data from them.

**Challenges: Heading Detection**

I initially chose Docling for its 'structural fidelity'. Because of this, I was surprised to find that Docling struggles with something as seemingly basic as recognizing heading hiearchy. This is a whole other can of worms to do with the PDF binary to text conversion and inconsistency of tag usage. Basically, there are as many different ways to set up a PDF as there are people who make them.

For Docling specifically, the issue lies in the conversion from it's internal intermediary object (type: `<class 'docling.datamodel.document.ConversionResult'>`). This is a known issue to the IBM maintainers, and based on the heated exchanges on this long-running [issue thread](https://github.com/docling-project/docling/issues/529?issue=docling-project%7Cdocling%7C287) in Docling's [GitHub repo](https://github.com/docling-project/docling), a frustration shared by many.

For my use case specifically, I found that Docling was unable to pick up on the `section_headers` for AWS Docs PDFs. This was true for small Exam Guide PDFs as well as large multi-hundred page Service Guides.

When I inspected the intermediate result object:

```py
for item in raw_text.document.texts:
    if getattr(item, "label", None) == "section_header":
        print(f"Level: {getattr(item, 'level', 'N/A')} | Text: {item.text[:60]}")
```

I found that it was returning the same level for all section headers:

```zsh
Level: 1 | Text: Scenario 2 - Turn on VPC BPA in Bidirectional mode
Level: 1 | Text: 2.1 Enable VPC BPA bidirectional mode
Level: 1 | Text: AWS Management Console
Level: 1 | Text: AWS CLI
```

I tried the most promising fix, a 'post-processing' [package](https://github.com/krrome/docling-hierarchical-pdf) created by [a community member](https://github.com/krrome). It successfully picked up a second level on a 20-page exam guide, but crashed a few minutes into a 700-page PDF.

I later found out that it works by iterating through every item in the Table of Contents and trying to match it to extracted content using bounding box coordinates. The TOC on that 700-page PDF had over 300 items.

And 700 pages is small potatoes for AWS Docs. This approach would never work for the 3,556 page [AWS S3 user guide](https://docs.aws.amazon.com/pdfs/AmazonS3/latest/userguide/s3-userguide.pdf), for example.

**Decision: Docling vs Marker**

_Rationale_

The first level to filter on was hosted or offline. Cloud-based solutions like [Unstructured](https://unstructured.io/) are the most frequently recommended, and the appeal of hitting an API endpoint over managing an entire pipeline is evident.

I chose an offline solution for 2 reasons:

1. My workflow did not require the pipeline to be triggered on-demand or as a cron job.

2. Many of these solutions are geared towards production workflows, and priced as such.

That left me with open source tools like [Docling](https://github.com/docling-project/docling) and [Marker](https://github.com/datalab-to/marker).

Both of these are AI-powered, highly-praised for their efficacy, and have strong community support.

[Docling](https://github.com/docling-project/docling):

- High accuracy, extracts much more metadata, optimized for structure preservation.

[Marker](https://github.com/datalab-to/marker):

- Fast, vision-based layout detection, and optimized for markdown ouput.

I initially chose Docling, thinking it would handle AWS’s technical tables and "Note/Warning" callouts with higher precision. And since I had a relatively small amount of documents to parse, in a manually triggered batch pipeline, Docling’s longer processing times was not a major consideration.

_The Pivot_

However, after investing a significant amount of time learning Docling and successfully setting up the pipeline, I found out that it was the wrong tool for the job (as expounded upon earlier).

Marker ended up being the better solution because:

1. It's optimized for Markdown. If you need rich metadata like 'bounding-box coordinates' to recreate graphics for scientific papers, it won't be much help. But it's incredibly reliable for the task it was designed for.

2. I overestimated the complexity of AWS Documents. The more complex pages have nested tables, but these are represented by XML tags that can be regex'd away. There are many artifacts introduced by the design of the AWS docs, like dangling footers or `<span>` tags for internal page references, but these are also highly regular.

If I had more time to experiment with the extraction tool, here are some tools I would try:

- [Kreuzberg](https://github.com/opendatalab/PDF-Extract-Kit)
- [langextract](https://github.com/google/langextract)
- [PDF Extract Kit](https://github.com/opendatalab/PDF-Extract-Kit)

**Decision: Plain Text vs Markdown**

Markdown.

Something I'd never considered, since most of the AI Engineering / RAG tutorials I've come across focus on parsing and storing plain text. Some include a `title` column in the vector table, but that's about it.

It wasn't until I stumbled across [this article](https://onlyoneaman.medium.com/i-tested-7-python-pdf-extractors-so-you-dont-have-to-2025-edition-c88013922257), that I found out you can (and should) preserve the data hierarchy in order to create more meaningful semantic relationships between documents in your vector db.

The author explains this much more eloquently:

> _"...parsers are able to generate a markdown representation of the content. This is important for RAG because a lot of contextual information is communicated in things like headings, images, graphs, and formatting. We want to preserve this information so the LLM can better determine how to “think” about the information provided in a given piece of content."_ - [Aman Kumar](https://github.com/onlyoneaman)

This shift from plain text to markdown is particularly relevant to this project because AWS documentation communicates critical relationships through hierarchy. A "Service Limit" for S3 is contextually distinct from one for EC2 only if the parent headers are preserved.

Critically, markdown allows for:

- Semantic Splitting: Using `MarkdownHeaderTextSplitter` to break chunks at logical section boundaries.
- Context Inheritance: Prepending header "breadcrumbs" like `S3 > Security > Encryption` to the text before embedding

### [S2-8] Ingest Large AWS Service Docs and White Papers

While a high-quality markdown artifact is a critical precursor, the objective difficulty and myriad solutions available to solve the challenge that is reliably parsing PDFs, means that spending additional time on this particular step presents diminishing returns with respect to the value prop of the Cloud.IQ project.

I will outline below the remaining challenges and considerations for enhancements as time permits.

**Challenges**

Several issues exist with the current PDF to Markdown extraction pipeline.

_Headings_:

- Marker is better than Docling at heading recognition, but still struggles to differentiate between levels.
- Marker is OCR-based, and AWS Docs in PDF can be inconsistant with font sizing for headings.

*Artifact*s:

- Continues to output artifacts that are difficult to remove entirely or without damaging other text.
- The database is expected to store a variety of docs, including exam guides, white papers, user guides, service refences, etc.
- Each doc type has notable differences in structure and common artifacts.
- Using a regex-based approach to cleaning artifacts with inconsistent patterns across these doc types is challenging.

**Future Enhancements**

_The Case for HTML to Markdown_:

- AWS publishes most docs as HTML at docs.aws.amazon.com.
- HTML has reliable semantic heading tags that don't depend on font-size inference.
- Scraping HTML may be more reliable and reduce manual clean-up before ingest.

_The LLM Solution_:

- Process overlapping chunks through an LLM to maintain structural hierarchy iteratively.
- Pass current hierarchy state between chunks to prevent context loss.
- Use strict system instructions to fix headers without altering body text.

**AI Use Disclaimer**

I wrote the initial, simple regex logic to clean Markdown files output during the PDF extraction process. However my patterns would often fail to capture variations across different AWS Docs types. After further debugging, it turned out that a much more sophisticated series of transformations was required.

At this point I leaned on LLM's substantially to debug that persistent artifacts that were left by my PDF extraction workflow. In paricular, I wanted to flag that the changes in commit `a1f44d26` were written almost entirely by a coding agent. This is a departure from the remainder of my project up to this point, where I had system prompts that purposefully restricted direct edits and instructed assistants to use _Socratic_ dialogue.

LLMs proved to be very effective at identifying opaque regex edge cases, and inconsistent behavior across `pypdf` and `fitz` that would cause the run to crash. In addition, the larger AWS Docs like the S3 User Guide, had well over 3,000 pages, which translates to a little over 100,000 lines of markdown. This corpus was too large to manually inspect.

I'm noting it explicitly because this portfolio is meant to reflect my actual skill level, or very close to my skill level, and not implementing any code I did not understand.
