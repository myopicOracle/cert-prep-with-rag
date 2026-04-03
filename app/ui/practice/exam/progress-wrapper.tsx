import Timer from '@/app/ui/practice/exam/timer'
import ProgressBar from '@/app/ui/practice/exam/progress-bar'
interface ProgressWrapperProps {
    timeRemaining: number
    setTimeRemaining: (setter: (prev: number) => number) => void
    questionsCompleted: number
    totalQuestions: number
}

export default function ProgressWrapper({
    timeRemaining,
    setTimeRemaining,
    questionsCompleted,
    totalQuestions,
}: ProgressWrapperProps) {
    const progressPercentage = (questionsCompleted / totalQuestions) * 100

    return (
        <div className="w-full flex flex-col">
            <div className="self-end">
                <Timer timeInSeconds={timeRemaining} setTimeRemaining={setTimeRemaining} />
                <div>
                    Completed: {questionsCompleted} / {totalQuestions}
                </div>
            </div>
            <ProgressBar progressPercentage={progressPercentage} />
        </div>
    )
}
