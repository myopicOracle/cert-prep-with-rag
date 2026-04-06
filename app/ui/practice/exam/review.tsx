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

interface ReviewProps {
    questions: QuestionData[]
    totalQuestions: number
    numberCompleted: number
    numberCorrect: number
}

export default function Review({
    questions,
    totalQuestions,
    numberCompleted,
    numberCorrect,
}: ReviewProps) {
    const score = Math.round(numberCorrect / totalQuestions) * 100
    const letterArray = ['A', 'B', 'C', 'D']

    return (
        <div>
            <h2>Exam Statistics</h2>
            <div className="flex justify-between my-6">
                <div>
                    <h3>Score</h3>
                    <p>{score}%</p>
                </div>
                <div>
                    <h3>Outcome</h3>
                    <p>{score >= 75 ? 'PASS' : 'FAIL'}</p>
                </div>
                <div>
                    <h3>Completion</h3>
                    <p>
                        {numberCompleted} of {totalQuestions}
                    </p>
                </div>
            </div>
            <h2>Question Review</h2>
            <div className="flex flex-col gap-2 my-4">
                {questions.map((question, index) => {
                    return (
                        <div className="flex gap-4 rounded-xl bg-blue-50">
                            <div>Correct: {question.answeredCorrectly ? 'True' : 'False'}</div>
                            <div>Question: {question.scenario}</div>
                            <div>Skipped: {question.isRevealed ? 'False' : 'True'}</div>
                            <div>Flagged: {question.isFlagged ? 'True' : 'False'}</div>
                            <div>
                                Selection:{' '}
                                {question.selectedAnswer !== null
                                    ? letterArray[question.selectedAnswer]
                                    : 'N/A'}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
