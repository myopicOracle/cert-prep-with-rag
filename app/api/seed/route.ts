import { createClient } from '@supabase/supabase-js'
import { questions, services } from '@/app/lib/placeholder-data'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

async function seedQuestions() {
    const { error } = await supabase.from('questions').upsert(questions)

    if (error) {
        throw error
    }

    return questions.length
}

async function seedServices() {
    const { error } = await supabase.from('services').upsert(services, { onConflict: 'name' })

    if (error) {
        throw error
    }

    return services.length
}

export async function GET() {
    try {
        const serviceCount = await seedQuestions()
        const questionCount = await seedServices()

        return Response.json({
            message: 'Database seeding was successful',
            services: serviceCount,
            questions: questionCount,
        })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

// last update: 2025-03-28
// {"message":"Database seeding was successful","services":3,"questions":5}
