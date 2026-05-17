import { createClient } from '@supabase/supabase-js'
import { services } from '@/app/lib/seed'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

async function seedServices() {
    const { error } = await supabase
        .from('services')
        .upsert(services, { onConflict: 'name' })

    if (error) {
        throw error
    }

    return services.length
}

export async function GET() {
    try {
        const count = await seedServices()

        return Response.json({
            message: 'Services were updated successfully',
            services: count,
        })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

// last update: 2026-05-17
// {"message":"Services were updated successfully","services":176}
