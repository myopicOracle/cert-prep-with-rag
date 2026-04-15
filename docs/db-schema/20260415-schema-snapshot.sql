-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.documents (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  content text NOT NULL,
  embedding USER-DEFINED NOT NULL,
  source_url text,
  service_id uuid,
  created_at timestamp with time zone DEFAULT now(),
  metadata jsonb,
  CONSTRAINT documents_pkey PRIMARY KEY (id),
  CONSTRAINT documents_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.services(id)
);
CREATE TABLE public.domains (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  exam_id uuid,
  number integer NOT NULL,
  name text NOT NULL,
  CONSTRAINT domains_pkey PRIMARY KEY (id),
  CONSTRAINT domains_exam_id_fkey FOREIGN KEY (exam_id) REFERENCES public.exams(id)
);
CREATE TABLE public.exams (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  code text NOT NULL UNIQUE,
  name text NOT NULL,
  CONSTRAINT exams_pkey PRIMARY KEY (id)
);
CREATE TABLE public.questions (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  task_statement_id uuid,
  scenario text NOT NULL,
  correct_answer text NOT NULL,
  wrong_answer_1 text NOT NULL,
  wrong_answer_2 text NOT NULL,
  wrong_answer_3 text NOT NULL,
  correct_explanation text NOT NULL,
  wrong_explanation_1 text NOT NULL,
  wrong_explanation_2 text NOT NULL,
  wrong_explanation_3 text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT questions_pkey PRIMARY KEY (id),
  CONSTRAINT questions_task_statement_id_fkey FOREIGN KEY (task_statement_id) REFERENCES public.task_statements(id)
);
CREATE TABLE public.services (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  overview text NOT NULL,
  deep_dive text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT services_pkey PRIMARY KEY (id)
);
CREATE TABLE public.task_statements (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  domain_id uuid,
  number text NOT NULL,
  name text NOT NULL,
  CONSTRAINT task_statements_pkey PRIMARY KEY (id),
  CONSTRAINT task_statements_domain_id_fkey FOREIGN KEY (domain_id) REFERENCES public.domains(id)
);