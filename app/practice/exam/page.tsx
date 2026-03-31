import { lusitana } from '@/app/ui/fonts'
import { shuffle } from 'lodash'
import Card from '@/app/ui/practice/exam/card'
import ProgressBar from '@/app/ui/practice/exam/progress-bar'
import NavButtons from '@/app/ui/practice/exam/nav-buttons'
import { fetchQuestions } from '@/app/lib/data'

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{
        id?: string
    }>
}) {
    const params = await searchParams

    const questionsRaw = await fetchQuestions()
    console.log('questionsRaw: ', questionsRaw[0])
    const questions = shuffle(questionsRaw)
    console.log('questions: ', questions[0])

    console.log('Questions table returned: ', questions)

    const currentID = Number(params?.id) || 1
    console.log('currentID: ', currentID)
    const currentQuestion = questions[currentID - 1]
    console.log('currentQuestion: ', currentQuestion)
    const totalQuestions = questions.length

    const examID = 'DEA-C01 - Exam 1' // NTD: make dynamic (pull from questions table)

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>{examID}</h1>

            <ProgressBar />

            {/* Now dynamically generated */}
            <Card id={currentID} question={currentQuestion} />

            <NavButtons total={totalQuestions} />
        </div>
    )
}
