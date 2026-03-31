'use client'

import { useMemo } from 'react'
import { shuffle } from 'lodash'
import Scenario from '@/app/ui/practice/exam/scenario'
import Choice from '@/app/ui/practice/exam/choice'
import Explanation from '@/app/ui/practice/exam/explanation'
import Button from '@/app/ui/practice/button'

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
    selectedIndex: number | null
    onSelect: (index: number) => void
    revealed: boolean
    onReveal: () => void
}

export default function Card({
    id,
    question,
    selectedIndex,
    onSelect,
    revealed,
    onReveal,
}: QuestionProps) {
    const questionID = id

    const scenario = question.scenario
    const choices = useMemo(() => {
        const rawArray = [
            {
                answer: question.correct_answer,
                explanation: question.correct_explanation,
                isCorrect: true,
            },
            {
                answer: question.wrong_answer_1,
                explanation: question.wrong_explanation_1,
                isCorrect: false,
            },
            {
                answer: question.wrong_answer_2,
                explanation: question.wrong_explanation_2,
                isCorrect: false,
            },
            {
                answer: question.wrong_answer_3,
                explanation: question.wrong_explanation_3,
                isCorrect: false,
            },
        ]
        return shuffle(rawArray)
    }, [question.id])

    return (
        <div className="flex flex-col items-center mt-6 rounded-lg border border-gray-200 bg-white p-8 m-12 shadow-sm min-h-64">
            <div className="w-full px-6 py-2">
                <p className="mt-2 p-4 rounded-sm text-md font-bold text-gray-600 bg-blue-100">
                    Question {questionID}
                </p>
            </div>
            <div className="mt-4 mb-8 p-4">
                <Scenario>{scenario}</Scenario>
                {choices.map((choice, index) => {
                    const isCorrect = choice.isCorrect

                    return (
                        <Choice
                            key={index}
                            index={index}
                            selected={selectedIndex === index}
                            onSelect={onSelect}>
                            {choice.answer}
                            {revealed ? (
                                <Explanation isCorrect={isCorrect}>
                                    {choice.explanation}
                                </Explanation>
                            ) : (
                                ''
                            )}
                        </Choice>
                    )
                })}
            </div>
            <div>
                <button
                    onClick={onReveal}
                    disabled={selectedIndex === null || revealed}
                    className="rounded mb-4 px-4 py-2 bg-blue-500 text-white disabled:opacity-50">
                    Check Answer
                </button>
            </div>
        </div>
    )
}
