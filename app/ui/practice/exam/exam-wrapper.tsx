'use client'

import { useState, useEffect, useMemo } from 'react'
import { shuffle } from 'lodash'
import ProgressWrapper from '@/app/ui/practice/exam/progress-wrapper'
import Card from '@/app/ui/practice/exam/card'
import NavButtons from '@/app/ui/practice/exam/nav-buttons'
import { examMetadata } from '@/app/lib/metadata'

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
    isRevealed: boolean
    isFlagged: boolean
    selectedAnswer: number | null
    answeredCorrectly: boolean | null
}

interface WrapperProps {
    // NTD: extract to types definitions file
    examCode: string
    questions: QuestionData[]
    currentID: number
}

export default function ExamWrapper({ examCode, questions, currentID }: WrapperProps) {
    const [statefulQuestions, setStatefulQuestions] = useState<QuestionData[]>(questions)
    const [timeRemaining, setTimeRemaining] = useState<number>(0)

    const currentQuestion = statefulQuestions[currentID - 1]
    const totalQuestions = statefulQuestions.length
    const numberCompleted = statefulQuestions.filter(
        (question) => question.isRevealed === true,
    ).length
    const numberCorrect = statefulQuestions.filter(
        (question) => question.answeredCorrectly === true,
    ).length

    const shuffledChoices = useMemo(() => {
        return questions.map((question) => {
            return shuffle([
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
            ])
        })
    }, [])

    useEffect(() => {
        for (let i = 0; i < examMetadata.length; i++) {
            if (examMetadata[i].exam_code === examCode) {
                setTimeRemaining(examMetadata[i].duration * 60)
                return
            }
        }
        setTimeRemaining(215999) // display 59:59:59
    }, [examCode])

    function handleSelect(index: number) {
        setStatefulQuestions((prev) => {
            const updatedArray = [...prev]
            const index = currentID - 1

            updatedArray[index] = {
                ...updatedArray[index],
                selectedAnswer: index,
            }

            return updatedArray
        })
    }

    function handleReveal(isCorrect: boolean) {
        setStatefulQuestions((prev) => {
            const updatedArray = [...prev]
            const index = currentID - 1

            updatedArray[index] = {
                ...updatedArray[index],
                isRevealed: true,
                answeredCorrectly: isCorrect,
            }

            return updatedArray
        })
    }

    function handleFlag() {
        setStatefulQuestions((prev) => {
            const updatedArray = [...prev]
            const index = currentID - 1

            updatedArray[index] = {
                ...updatedArray[index],
                isFlagged: !updatedArray[index].isFlagged,
            }

            return updatedArray
        })
    }

    return (
        <div>
            <ProgressWrapper
                timeRemaining={timeRemaining}
                setTimeRemaining={setTimeRemaining}
                questionsCompleted={numberCompleted}
                totalQuestions={totalQuestions}
                isFlagged={currentQuestion.isFlagged}
                onFlag={handleFlag}
            />

            <Card
                id={currentID}
                question={currentQuestion}
                choices={shuffledChoices[currentID - 1]}
                selectedAnswer={currentQuestion.selectedAnswer}
                onSelect={handleSelect}
                isRevealed={currentQuestion.isRevealed}
                onReveal={handleReveal}
            />

            <NavButtons completed={numberCompleted} total={totalQuestions} />
        </div>
    )
}
