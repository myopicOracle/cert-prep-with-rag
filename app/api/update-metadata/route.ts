import { createClient } from '@supabase/supabase-js'
import { services, examMetadata } from '@/app/lib/seed'

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

async function seedExams() {
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

    const { data: seededExams, error: fetchError } = await supabase
        .from('exams')
        .select('id, code')

    if (fetchError) {
        throw fetchError
    }

    return seededExams
}

async function seedDomains(seededExams: any) {
    const domainRows = []

    for (const exam of examMetadata) {
        const examRecord = seededExams.find(
            (e: any) => e.code === exam.exam_code,
        )

        for (const domain of exam.domains) {
            domainRows.push({
                exam_id: examRecord.id,
                number: domain.number,
                name: domain.name,
            })
        }
    }

    const { error } = await supabase
        .from('domains')
        .upsert(domainRows, { onConflict: 'exam_id,number' })

    if (error) {
        throw error
    }

    const { data: seededDomains, error: fetchError } = await supabase
        .from('domains')
        .select('id, exam_id, number')

    if (fetchError) {
        throw fetchError
    }

    return seededDomains
}

async function seedTaskStatements(seededExams: any, seededDomains: any) {
    const taskRows = []

    for (const exam of examMetadata) {
        const examRecord = seededExams.find(
            (e: any) => e.code === exam.exam_code,
        )

        for (const domain of exam.domains) {
            const domainRecord = seededDomains.find(
                (d: any) =>
                    d.exam_id === examRecord.id && d.number === domain.number,
            )
            for (const task of domain.task_statements) {
                taskRows.push({
                    domain_id: domainRecord.id,
                    number: task.number,
                    name: task.name,
                })
            }
        }
    }

    const { error } = await supabase
        .from('task_statements')
        .upsert(taskRows, { onConflict: 'domain_id,number' })

    if (error) {
        throw error
    }

    return taskRows.length
}

export async function GET() {
    try {
        const serviceCount = await seedServices()
        const seededExams = await seedExams()
        const seededDomains = await seedDomains(seededExams)
        const taskCount = await seedTaskStatements(seededExams, seededDomains)

        return Response.json({
            message: 'Metadata was updated successfully',
            services: serviceCount,
            exams: seededExams.length,
            domains: seededDomains.length,
            task_statements: taskCount,
        })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

// last update: 2026-04-29
// {"message":"Metadata was updated successfully","exams":12,"domains":55,"task_statements":188}
