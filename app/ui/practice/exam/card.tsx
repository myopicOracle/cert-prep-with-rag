'use client'

import Scenario from '@/app/ui/practice/exam/scenario'
import Choice from '@/app/ui/practice/exam/choice'
import Explanation from '@/app/ui/practice/exam/explanation'
import Button from '@/app/ui/practice/button'
import { questions } from '@/app/lib/placeholder-data'

export default function Card() {
    const questionID = 'Question 1' // NTD: make dynamic

    const selectedQuestion = questions[0]

    const questionText = selectedQuestion.scenario
    const choicesText = [
        selectedQuestion.correct_answer,
        selectedQuestion.wrong_answer_1,
        selectedQuestion.wrong_answer_2,
        selectedQuestion.wrong_answer_3,
    ]

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
