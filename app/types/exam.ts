export interface QuestionData {
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

export interface AnswerChoice {
    answer: string
    explanation: string
    isCorrect: boolean
}
