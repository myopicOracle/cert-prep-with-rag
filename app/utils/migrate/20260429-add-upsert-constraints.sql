ALTER TABLE public.domains
ADD CONSTRAINT domains_exam_id_number_unique UNIQUE (exam_id, number);

ALTER TABLE public.task_statements
ADD CONSTRAINT task_statements_domain_id_number_unique UNIQUE (domain_id, number);
