import ProgressBar from '@/app/ui/practice/exam/progress-bar'

interface ProgressWrapperProps {
    examCode: string
    questionsCompleted: number
    totalQuestions: number
}

export default function ProgressWrapper({
    examCode,
    questionsCompleted,
    totalQuestions,
}: ProgressWrapperProps) {
    const progressPercentage = (questionsCompleted / totalQuestions) * 100

    return (
        <div className="w-full flex flex-col">
            <div className="self-end">
                Completed: {questionsCompleted} / {totalQuestions}
            </div>
            <ProgressBar progressPercentage={progressPercentage} />
        </div>
    )
}
