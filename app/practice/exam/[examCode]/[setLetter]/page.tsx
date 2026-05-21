import { lusitana } from '@/app/ui/fonts'
import ExamWrapper from '@/app/ui/practice/exam/exam-wrapper'
import { fetchQuestionsByExamSet } from '@/app/lib/data'

export default async function Page({
    params,
    searchParams,
}: {
    params: Promise<{
        examCode: string
        setLetter: string
    }>
    searchParams: Promise<{
        id?: string
    }>
}) {
    const { examCode, setLetter } = await params
    const { id } = await searchParams

    const currentID = Number(id) || 1
    const rawQuestions = await fetchQuestionsByExamSet(examCode, setLetter)

    const questions = rawQuestions.map((question) => {
        return {
            ...question,
            selectedAnswer: null,
            isRevealed: false,
            isFlagged: false,
            answeredCorrectly: null,
        }
    })

    return (
        <div className="w-full px-2 md:px-10">
            <h1 className={`${lusitana.className} text-3xl`}>{examCode}</h1>

            <ExamWrapper
                examCode={examCode}
                questions={questions}
                currentID={currentID}
            />
        </div>
    )
}
