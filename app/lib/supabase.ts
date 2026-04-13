import { createClient } from '@/app/utils/supabase/client'

export async function getMatchedDocuments(embedding: number[]) {
    const supabase = createClient()

    const { data, error } = await supabase.rpc('match_documents', {
        query_embedding: embedding,
        match_threshold: 0.5,
        match_count: 5,
    })

    if (error) {
        console.error(error)
    } else {
        console.log(data)
    }

    return data
}
