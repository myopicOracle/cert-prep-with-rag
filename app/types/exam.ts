export interface DatabaseQuestion {
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
    service_tags: string[] | null
    created_at: string
    task_statement_number: string | null
    task_statement_name: string | null
    domain_number: number | null
    domain_name: string | null
    exam_code: string | null
    exam_name: string | null
}

export interface ExamUIQuestion extends DatabaseQuestion {
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
