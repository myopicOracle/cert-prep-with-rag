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

- [x] set up Bedrock client with Titan Embeddings and Haiku 4.5, #3
- [x] build and test Bedrock embedding and converse invocation functions, #26
- [x] create Supabase db with pgvector column and HNSW index, #4
- [x] scripts/ingest.ts: write and test PDF parse + chunking script, #5
- [x] extend ingest script to generate and store Titan embeddings, #6
- [x] write and test Supabase vector table insert function, #7
- [x] lib/rag.ts: embed query, run similarity search, return Bedrock response, #8
- [x] optimize system prompts and tweak RAG params (size, threshold, window), #9
- [x] app/api/ask/route.ts: API endpoint for full RAG chain user query, #10
- [x] ingest exam guides and AWS whitepapers into docs table, #25

## Sprint 3: Study Mode & Chat UI

- [x] lib/rag.ts: extend getRagResponse to return citations alongside answer, #32
- [x] app/api/ask/route.ts: expose citations in response body, #33
- [x] app/study/page.tsx: create study route and client component skeleton, #34
- [x] build static ChatInput component with textarea and submit button, #11
- [x] wire ChatInput to /api/ask and render raw response below input, #14
- [x] extract ChatMessage component accepting role and content props, #35
- [x] add conversation history state and render scrollable message thread, #36
- [x] render source citations and breadcrumbs beneath assistant messages, #37
- [x] add loading state, submit-disable, and error handling to chat flow, #38
- [x] enhance styling and layout, implement improved responsiveness, #39

## Sprint 4: Question Bank & Live Explanations

- [x] add service_tags column and questions_full view to questions schema, #46
- [x] seed exams, domains, and task statements tables with exam metadata, #51
- [x] seed questions for 3 exams, add metadata filter, refactor fetch api, #47
- [x] add /api/explain streaming endpoint and slide-out chat panel, #50
- [x] add "Explain Answer" feature to answer choices, wire new API route, #48
- [x] add "Explain All" feature to question card, wire new API route, #49
- [x] fix untracked exam variants by adding set_letter field and reseeding db, #54
- [x] add message enhancement step before sending initial explain request, #55

## Planned Improvements

- [x] design brand assets and add to repo, #47
- [ ] redesign color palette, add accents, add dark/light mode toggle, #41
- [ ] style sidenav, add header, add footer, add GH CTA to app, #53
- [ ] create site landing page, exams selector dash, reorg routes, #58
- [ ] refactor study mode chat UI to use streaming responses, #52
- [ ] add loading indicator, starter questions, button animation to chat UI, #43
