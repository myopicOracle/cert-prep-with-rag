import { lusitana } from '@/app/ui/fonts'
import ExamWrapper from '@/app/ui/practice/exam/exam-wrapper'
import { fetchQuestions } from '@/app/lib/data'

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{
        id?: string
    }>
}) {
    const params = await searchParams

    const questions = await fetchQuestions()

    const currentID = Number(params?.id) || 1
    console.log('currentID: ', currentID)

    const examCode = 'DEA-C01' // NTD: make dynamic (pull from questions table)

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>{examCode}</h1>

            <ExamWrapper examCode={examCode} questions={questions} currentID={currentID} />
        </div>
    )
}
