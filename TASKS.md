## Sprint 1: Foundation & Mock Exam UI

- [x] init Next.js app with TS/Tailwind/App Router
- [x] create Supabase db, seed exam data table
- [x] refocus sprint plan to ui while awaiting Bedrock access
- [x] (ui) scaffold sidenav, scenario/choices card, nav buttons
- [x] (ui) finalize basic design of exam page ui components
- [x] create table schemas for questions and services
- [x] init tables with sql query editor, seed tables with api route
- [x] scaffold page/route and update nav for Speed Run feature
- [x] write fetch data function and test Supabase connection
- [x] refactor page to map each card component from db rows pulled
- [x] implement URL params with shuffle logic as routes for cards
- [x] implement Server Events to check answer and return explanation
- [x] (ui) add timer, progress indicator, question flags, review page
- [x] (ui) enhance responsiveness, adjust page component sizing/layout

## Sprint 2: RAG Pipeline

- [x] set up Bedrock client with Titan Embeddings and Haiku 4.5, completes #3
- [x] build and test Bedrock embedding and converse invocation functions, completes #26
- [x] create Supabase db with pgvector column and HNSW index, completes #4
- [x] scripts/ingest.ts: write and test PDF parse + chunking script, completes #5
- [x] extend ingest script to generate and store Titan embeddings, completes #6
- [x] write and test Supabase vector table insert function, completes #7
- [x] lib/rag.ts: embed query, run similarity search, return Bedrock response, completes #8
- [ ] ingest exam guides and AWS whitepapers into docs table, completes #25
- [ ] optimize system prompts and tweak RAG params (size, threshold, window), completes #9
- [ ] app/api/ask/route.ts: API endpoint for full RAG chain user query, completes #10
