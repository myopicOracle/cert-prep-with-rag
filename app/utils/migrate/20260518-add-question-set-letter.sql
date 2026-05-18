-- set_letter: marks which exam set a question belongs to (e.g. 'a', 'b', 'c').
-- Sourced from the filename when seeding via /api/update-questions.
-- View is dropped + recreated because q.* would reorder columns,
-- which CREATE OR REPLACE VIEW does not allow.

DROP VIEW IF EXISTS public.questions_full;

ALTER TABLE public.questions
ADD COLUMN set_letter text;

CREATE VIEW public.questions_full AS
SELECT
    q.*,
    ts.number   AS task_statement_number,
    ts.name     AS task_statement_name,
    d.number    AS domain_number,
    d.name      AS domain_name,
    e.code      AS exam_code,
    e.name      AS exam_name
FROM public.questions q
LEFT JOIN public.task_statements ts ON q.task_statement_id = ts.id
LEFT JOIN public.domains d ON ts.domain_id = d.id
LEFT JOIN public.exams e ON d.exam_id = e.id;
