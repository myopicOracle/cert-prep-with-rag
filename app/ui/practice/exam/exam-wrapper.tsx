'use client'

import { shuffle } from 'lodash'
import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import ProgressWrapper from '@/app/ui/practice/exam/progress-wrapper'
import Card from '@/app/ui/practice/exam/card'
import NavButtons from '@/app/ui/practice/exam/nav-buttons'
import Review from '@/app/ui/practice/exam/review'
import { examMetadata } from '@/app/lib/metadata'
import { ExamWrapperProps } from '@/app/types/components'
import { QuestionData, AnswerChoice } from '@/app/types/exam'

export default function ExamWrapper({ examCode, questions, currentID }: ExamWrapperProps) {
    const [statefulQuestions, setStatefulQuestions] = useState<QuestionData[]>(() => questions)
    const [timeRemaining, setTimeRemaining] = useState<number>(0)

    const searchParams = useSearchParams()
    const isReviewMode = searchParams.get('view') === 'review'
    const pathname = usePathname()
    const { replace } = useRouter()

    const currentIndex = currentID - 1
    const currentQuestion = statefulQuestions[currentIndex]

    const totalQuestions = statefulQuestions.length
    const numberCompleted = statefulQuestions.filter(
        (question) => question.isRevealed === true,
    ).length
    const numberCorrect = statefulQuestions.filter(
        (question) => question.answeredCorrectly === true,
    ).length

    const shuffledChoices = useMemo(() => {
        return questions.map((question) => {
            return shuffle<AnswerChoice>([
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

            updatedArray[currentIndex] = {
                ...updatedArray[currentIndex],
                selectedAnswer: index,
            }

            return updatedArray
        })
    }

    function handleReveal(isCorrect: boolean) {
        setStatefulQuestions((prev) => {
            const updatedArray = [...prev]

            updatedArray[currentIndex] = {
                ...updatedArray[currentIndex],
                isRevealed: true,
                answeredCorrectly: isCorrect,
            }

            return updatedArray
        })
    }

    function handleFlag() {
        setStatefulQuestions((prev) => {
            const updatedArray = [...prev]

            updatedArray[currentIndex] = {
                ...updatedArray[currentIndex],
                isFlagged: !updatedArray[currentIndex].isFlagged,
            }

            return updatedArray
        })
    }

    function handleFinish() {
        if (!currentQuestion.isRevealed && currentQuestion.selectedAnswer !== null) {
            const isUserCorrect =
                shuffledChoices[currentIndex][currentQuestion.selectedAnswer].isCorrect
            handleReveal(isUserCorrect)
        }
        const params = new URLSearchParams(searchParams)
        params.set('view', 'review')
        replace(`${pathname}? ${params.toString()}`)
    }

    return (
        <div>
            {!isReviewMode ? (
                <>
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
                        choices={shuffledChoices[currentIndex]}
                        selectedAnswer={currentQuestion.selectedAnswer}
                        onSelect={handleSelect}
                        isRevealed={currentQuestion.isRevealed}
                        onReveal={handleReveal}
                    />

                    <NavButtons total={totalQuestions} onFinish={handleFinish} />
                </>
            ) : (
                <Review
                    questions={statefulQuestions}
                    totalQuestions={totalQuestions}
                    numberCompleted={numberCompleted}
                    numberCorrect={numberCorrect}
                />
            )}
        </div>
    )
}
