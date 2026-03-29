'use client'

import Scenario from '@/app/ui/practice/exam/scenario'
import Choice from '@/app/ui/practice/exam/choice'
import Explanation from '@/app/ui/practice/exam/explanation'
import Button from '@/app/ui/practice/button'
// import { questions } from '@/app/lib/placeholder-data' // NTD: moved up to parent, remove once UI mocking complete

interface QuestionData {
    // NTD: extract to types definitions file
    id: string
    task_statement_id: string | null
    scenario: string
    correct_answer: string
    wrong_answer_1: string
    wrong_answer_2: string
    wrong_answer_3: string
    correct_explanation: string
    wrong_explanation_1: string
    wrong_explanation_2: string
    wrong_explanation_3: string
    created_at: string
}

interface QuestionProps {
    // NTD: extract to types definitions file
    count: number
    question: QuestionData
}

export default function Card({ count, question }: QuestionProps) {
    const questionID = count

    const questionText = question.scenario
    const choicesText = [
        question.correct_answer,
        question.wrong_answer_1,
        question.wrong_answer_2,
        question.wrong_answer_3,
    ]

    // // NTD: remove once UI mocking complete
    // const questionID = 'Question 1' // NTD: make dynamic

    // const selectedQuestion = questions[0]

    // const questionText = selectedQuestion.scenario
    // const choicesText = [
    //     selectedQuestion.correct_answer,
    //     selectedQuestion.wrong_answer_1,
    //     selectedQuestion.wrong_answer_2,
    //     selectedQuestion.wrong_answer_3,
    // ]

    function handlePrevCard() {}
    function handleNextCard() {}

    return (
        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-8 m-12 shadow-sm min-h-64">
            <div>
                <p className="mt-2 p-4 rounded-sm text-md font-bold text-gray-600 bg-blue-100">
                    {questionID}
                </p>
            </div>
            <div className="mt-4 mb-8 p-4">
                <Scenario>{questionText}</Scenario>
                {choicesText.map((choice, index) => {
                    return <Choice key={index}>{choice}</Choice>
                })}
                {/* <Explanation /> */}
            </div>
            <div className="flex w-full items-center justify-between">
                <Button name="Prev" onClick={handlePrevCard} />
                <Button name="Next" onClick={handleNextCard} />
            </div>
        </div>
    )
}
