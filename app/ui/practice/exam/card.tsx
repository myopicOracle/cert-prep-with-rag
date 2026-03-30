'use client'

import { useState } from 'react'
import Scenario from '@/app/ui/practice/exam/scenario'
import Choice from '@/app/ui/practice/exam/choice'
import Explanation from '@/app/ui/practice/exam/explanation'

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
    id: number
    question: QuestionData
}

export default function Card({ id, question }: QuestionProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const questionID = id

    const questionText = question.scenario
    const choicesText = [
        question.correct_answer,
        question.wrong_answer_1,
        question.wrong_answer_2,
        question.wrong_answer_3,
    ]

    return (
        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-8 m-12 shadow-sm min-h-64">
            <div>
                <p className="mt-2 p-4 rounded-sm text-md font-bold text-gray-600 bg-blue-100">
                    Question {questionID}
                </p>
            </div>
            <div className="mt-4 mb-8 p-4">
                <Scenario>{questionText}</Scenario>
                {choicesText.map((choice, index) => {
                    return (
                        <Choice
                            key={index}
                            selected={selectedIndex === index}
                            onSelect={() => setSelectedIndex(index)}>
                            {choice}
                        </Choice>
                    )
                })}
                {/* <Explanation /> */}
            </div>
        </div>
    )
}
