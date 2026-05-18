-- service_tags: array of AWS services included in question (['s3', 'glue'])

ALTER TABLE public.questions
ADD COLUMN service_tags text[];
