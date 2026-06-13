<br>

<div id="atlas-logo" align="center">

<img src="./public/atlas/brandmark.svg" alt="Cloud Atlas Logo" width="60"/>

<h3>Cloud Atlas</h3>
</div>

<div id="tagline" align="center">
<em>Grounded AI for AWS practitioners</em>
</div>

<br>

> **Status:** In active development.

### The Search Problem

AWS documentation is exhaustive — and that's the problem. For someone preparing for certification, the answers are in there, but extracting them efficiently isn't. Generic LLMs help, but they hallucinate or omit citations, leaving you to verify everything they say. Cloud Atlas grounds every answer in AWS's own documentation, so what you read is traceable back to what AWS actually published.

### What Atlas Does

- **RAG Q&A** — Natural-language questions answered by retrieving relevant chunks from a pgvector store of AWS documentation, then cited inline.
- **Exam Mode** — Multiple-choice practice for CLF-C02, AIF-C01, MLA-C01 and others, with grounded explanations on reveal.
- **Study Mode** — Freeform chat with source-chunk citations from the AWS docs.
- **Progress Dashboard** — Per-domain performance metrics tracked across sessions.

### Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Supabase (Postgres + pgvector) · AWS Bedrock (Titan Embeddings v2, Claude Haiku) · LangChain · Vercel AI SDK

A comprehensive README will replace this one when the project reaches v1.

<br>

<div id="praevisio-logo" align="left">

<img src="./public/praevisio/slogan.png" alt="Praevisio Labs" width="250"/>

</div>
