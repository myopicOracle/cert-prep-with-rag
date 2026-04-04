'use client'

import { useState, useEffect } from 'react'
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
}

interface WrapperProps {
    // NTD: extract to types definitions file
    examCode: string
    questions: QuestionData[]
    currentID: number
}

export default function ExamWrapper({ examCode, questions, currentID }: WrapperProps) {
    const [selected, setSelected] = useState<Record<number, number | null>>({})
    const [revealed, setRevealed] = useState<Record<number, boolean>>({})
    const [flagged, setFlagged] = useState<Record<number, boolean>>({})
    const [numberCompleted, setNumberCompleted] = useState<number>(0)
    const [timeRemaining, setTimeRemaining] = useState<number>(0)

    const currentQuestion = questions[currentID - 1]
    console.log('currentQuestion: ', currentQuestion)

    const totalQuestions = questions.length

    useEffect(() => {
        for (let i = 0; i < examMetadata.length; i++) {
            if (examMetadata[i].exam_code === examCode) {
                setTimeRemaining(examMetadata[i].duration * 60)
                return
            }
        }
        setTimeRemaining(215999) // display 59:59:59
    }, [examCode])

    return (
        <div>
            <ProgressWrapper
                timeRemaining={timeRemaining}
                setTimeRemaining={setTimeRemaining}
                questionsCompleted={numberCompleted}
                totalQuestions={totalQuestions}
                flagged={flagged[currentID] ?? false}
                onFlag={() =>
                    setFlagged((prev) => ({
                        ...prev,
                        [currentID]: !prev[currentID],
                    }))
                }
            />

            <Card
                id={currentID}
                question={currentQuestion}
                selectedIndex={selected[currentID] ?? null}
                onSelect={(index) =>
                    setSelected((prev) => ({
                        ...prev,
                        [currentID]: index,
                    }))
                }
                revealed={revealed[currentID] ?? false}
                onReveal={() =>
                    setRevealed((prev) => ({
                        ...prev,
                        [currentID]: true,
                    }))
                }
            />

            <NavButtons
                completed={numberCompleted}
                total={totalQuestions}
                onComplete={setNumberCompleted}
            />
        </div>
    )
}
