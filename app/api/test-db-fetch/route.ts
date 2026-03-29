import { fetchQuestions } from '@/app/lib/data'

export async function GET() {
    try {
        const allQuestions = await fetchQuestions()
        return Response.json({ allQuestions })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}
