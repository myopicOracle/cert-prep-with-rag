import Timer from '@/app/ui/practice/exam/timer'
import Flag from '@/app/ui/practice/flag'
import ProgressBar from '@/app/ui/practice/exam/progress-bar'
import { ProgressWrapperProps } from '@/app/types/components'

export default function ProgressWrapper({
    timeRemaining,
    setTimeRemaining,
    questionsCompleted,
    totalQuestions,
    isFlagged,
    onFlag,
}: ProgressWrapperProps) {
    const progressPercentage = (questionsCompleted / totalQuestions) * 100

    return (
        <div className="w-full flex flex-col mt-4">
            <div className="flex justify-between">
                <Timer timeInSeconds={timeRemaining} setTimeRemaining={setTimeRemaining} />
                <div>
                    Answered: {questionsCompleted} / {totalQuestions}
                </div>
                <Flag isFlagged={isFlagged} onFlag={onFlag} />
            </div>
            <ProgressBar progressPercentage={progressPercentage} />
        </div>
    )
}
