export interface Quiz {
    id: string
    exam_code: string
    domain_number: number
    task_statement_number: string
    question: string
    correct_answer: string
    wrong_answer_1: string
    wrong_answer_2: string
    wrong_answer_3: string
    explanation: string
    service_tags: string[] | null
    created_at: string
}

export interface QuizChoice {
    answer: string
    isCorrect: boolean
}

export interface RoundQuestion extends Quiz {
    choices: QuizChoice[]
}
