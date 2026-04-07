import { QuestionData, AnswerChoice } from './exam'

export interface ExamWrapperProps {
    examCode: string
    questions: QuestionData[]
    currentID: number
}

export interface CardProps {
    id: number
    question: QuestionData
    choices: AnswerChoice[]
    selectedAnswer: number | null
    onSelect: (index: number) => void
    isRevealed: boolean
    onReveal: (isCorrect: boolean) => void
}

export interface ChoiceProps {
    children: React.ReactNode
    index: number
    selected: boolean
    onSelect: (index: number) => void
}

export interface NavButtonsProps {
    total: number
    onFinish: () => void
}

export interface ReviewProps {
    questions: QuestionData[]
    totalQuestions: number
    numberCompleted: number
    numberCorrect: number
}

export interface ProgressWrapperProps {
    timeRemaining: number
    setTimeRemaining: (setter: (prev: number) => number) => void
    questionsCompleted: number
    totalQuestions: number
    isFlagged: boolean
    onFlag: () => void
}

export interface TimerProps {
    timeInSeconds: number
    setTimeRemaining: (setter: (prev: number) => number) => void
}

export interface ButtonProps {
    name: string
    buttonStyle: string
    isDisabled: boolean
    onClick: () => void
}

export interface FlagProps {
    isFlagged: boolean
    onFlag: () => void
}
