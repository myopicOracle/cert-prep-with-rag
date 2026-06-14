-- Seeded via /api/update-quizzes from data/generated-quizzes/{exam-code}.json.

create table quizzes (
  id                    uuid primary key default gen_random_uuid(),
  exam_code             text  not null,
  domain_number         int2  not null,
  task_statement_number text  not null,
  question              text  not null,
  correct_answer        text  not null,
  wrong_answer_1        text  not null,
  wrong_answer_2        text  not null,
  wrong_answer_3        text  not null,
  explanation           text  not null,
  service_tags          text[],
  created_at            timestamptz default now()
);

create index on quizzes (exam_code);
