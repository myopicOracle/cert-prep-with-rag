'use client'

import Scenario from '@/app/ui/practice/exam/scenario'
import Choice from '@/app/ui/practice/exam/choice'
import Explanation from '@/app/ui/practice/exam/explanation'
import Button from '@/app/ui/practice/button'
import { CardProps } from '@/app/types/components'

export default function Card({
    id,
    question,
    choices,
    selectedAnswer,
    onSelect,
    isRevealed,
    onReveal,
}: CardProps) {
    const questionID = id

    const scenario = question.scenario

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
                    return (
                        <Choice
                            key={index}
                            index={index}
                            selected={selectedAnswer === index}
                            onSelect={onSelect}>
                            {choice.answer}
                            {isRevealed ? (
                                <Explanation isCorrect={choice.isCorrect}>
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
                <Button
                    name="Check Answer"
                    buttonStyle={
                        'rounded mb-4 px-4 py-2 bg-blue-500 text-white disabled:opacity-50'
                    }
                    isDisabled={selectedAnswer === null || isRevealed}
                    onClick={() => {
                        if (selectedAnswer !== null) {
                            onReveal(choices[selectedAnswer].isCorrect)
                        }
                    }}
                />
            </div>
        </div>
    )
}
