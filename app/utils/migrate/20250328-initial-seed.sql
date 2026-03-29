create table exams (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null
);

create table domains (
  id uuid primary key default gen_random_uuid(),
  exam_id uuid references exams(id) on delete cascade,
  number int not null,
  name text not null
);

create table task_statements (
  id uuid primary key default gen_random_uuid(),
  domain_id uuid references domains(id) on delete cascade,
  number text not null,
  name text not null
);

create table questions (
  id uuid primary key default gen_random_uuid(),
  task_statement_id uuid references task_statements(id) on delete set null,
  scenario text not null,
  correct_answer text not null,
  wrong_answer_1 text not null,
  wrong_answer_2 text not null,
  wrong_answer_3 text not null,
  correct_explanation text not null,
  wrong_explanation_1 text not null,
  wrong_explanation_2 text not null,
  wrong_explanation_3 text not null,
  created_at timestamptz default now()
);

create table services (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  overview text not null,
  deep_dive text not null,
  created_at timestamptz default now()
);
