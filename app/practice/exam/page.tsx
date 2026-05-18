import { lusitana } from '@/app/ui/fonts'
import ExamWrapper from '@/app/ui/practice/exam/exam-wrapper'
import { fetchQuestionsByExamSet } from '@/app/lib/data'

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{
        id?: string
    }>
}) {
    const params = await searchParams

    const currentID = Number(params?.id) || 1
    console.log('currentID:', currentID)

    const examCode = 'DEA-C01' // NTD: make dynamic (pull from questions table)
    const setLetter = 'a' // NTD: make dynamic alongside examCode
    // const examName = `${questions[0].exam_code} - ${questions[0].full_name}`
    const rawQuestions = await fetchQuestionsByExamSet(examCode, setLetter)

    // Temporary state tracking - move into database once Auth is set up and user data persisted
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
        <div className="w-full">
            <h1 className={`${lusitana.className} text-3xl`}>{examCode}</h1>

            <ExamWrapper
                examCode={examCode}
                questions={questions}
                currentID={currentID}
            />
        </div>
    )
}
