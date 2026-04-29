import { createClient } from '@supabase/supabase-js'
import { examMetadata } from '@/app/lib/seed'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

export async function GET() {
    const tableRows = examMetadata.map((exam) => ({
        code: exam.exam_code,
        name: exam.full_name,
        time_limit: exam.duration,
    }))

    const { error } = await supabase
        .from('exams')
        .upsert(tableRows, { onConflict: 'code' })

    if (error) {
        throw error
    }

    return Response.json({
        message: 'Exams table seeding was successful',
        count: tableRows.length,
    })
}

// last update: 2026-04-29
// {"message":"Exams table seeding was successful","count":12}
