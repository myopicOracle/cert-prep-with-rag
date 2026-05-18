import {
    fetchQuestions,
    fetchQuestionsByExam,
    fetchQuestionsByDomain,
} from '@/app/lib/data'

export async function GET() {
    try {
        // const allQuestions = await fetchQuestions()
        const byExam = await fetchQuestionsByExam('CLF-C02')
        const byDomain = await fetchQuestionsByDomain('CLF-C02', 2)

        return Response.json({
            // allQuestions,
            byExam_count: byExam.length,
            // byExam_first_item: byExam[0],
            byDomain_count: byDomain.length,
            // byDomain_first_item: byDomain[0],
        })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

// test:
// {"byExam_count":195,"byDomain_count":48}
