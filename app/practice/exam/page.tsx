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

    const examID = 'DEA-C01 - Exam 1' // NTD: make dynamic (pull from questions table)

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>{examID}</h1>

            <ExamWrapper questions={questions} currentID={currentID} />
        </div>
    )
}
