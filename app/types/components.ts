import { type UIMessage } from 'ai'
import { ExamUIQuestion, AnswerChoice } from './exam'

export type Citation = {
    sourceURL: string
    breadcrumb: string
}

export interface ChatMessageProps {
    role: 'user' | 'assistant'
    content: string | null
    citations?: Citation[]
}

export interface ChatDisplayProps {
    chatHistory: ChatMessageProps[]
    isLoading?: boolean
}

export interface ChatInputProps {
    isLoading: boolean
    onSubmit: (text: string) => void
}

export interface ExamWrapperProps {
    examCode: string
    questions: ExamUIQuestion[]
    currentID: number
}

export interface CardProps {
    id: number
    question: ExamUIQuestion
    choices: AnswerChoice[]
    selectedAnswer: number | null
    onSelect: (index: number) => void
    isRevealed: boolean
    onReveal: (isCorrect: boolean) => void
    onExplainAll: () => void
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
    questions: ExamUIQuestion[]
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

export interface DrawerProps {
    isOpen: boolean
    onClose: () => void
    messages: UIMessage[]
    status: 'submitted' | 'streaming' | 'ready' | 'error'
    isEnhancing: boolean
    onSendFollowUp: (text: string) => Promise<void>
}
