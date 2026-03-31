'use client'

import Card from '@/app/ui/practice/exam/card'
import NavButtons from '@/app/ui/practice/exam/nav-buttons'

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
    questions: QuestionData[]
    currentID: number
}

export default function QuestionWrapper({ questions, currentID }: WrapperProps) {
    const [selected, setSelected] = useState<Record<number, number | null>>({})
    const [revealed, setRevealed] = useState<Record<number, boolean>>({})

    const currentQuestion = questions[currentID - 1]
    console.log('currentQuestion: ', currentQuestion)

    const totalQuestions = questions.length

    return (
        <div>
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

            <NavButtons total={totalQuestions} />
        </div>
    )
}
