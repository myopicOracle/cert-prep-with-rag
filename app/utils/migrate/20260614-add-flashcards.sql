-- Seeded via /api/update-flashcards from data/generated-flashcards/{exam-code}.json.

create table flashcards (
  id            uuid primary key default gen_random_uuid(),
  exam_code     text  not null,
  domain_number int2  not null,
  term          text  not null,
  definition    text  not null,
  created_at    timestamptz default now()
);

create index on flashcards (exam_code);
