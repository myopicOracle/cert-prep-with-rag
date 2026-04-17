DROP FUNCTION match_documents(vector, double precision, integer);

CREATE OR REPLACE FUNCTION match_documents(
    query_embedding  vector(1024),
    match_threshold  float,
    match_count      int
)
RETURNS TABLE (
    id          uuid,
    content     text,
    source_url  text,
    service_id  uuid,
    metadata    jsonb,
    similarity  float
)
LANGUAGE sql STABLE AS $$
    SELECT id, content, source_url, service_id, metadata,
           1 - (embedding <=> query_embedding) AS similarity
    FROM documents
    WHERE 1 - (embedding <=> query_embedding) > match_threshold
    ORDER BY embedding <=> query_embedding
    LIMIT match_count;
$$;
