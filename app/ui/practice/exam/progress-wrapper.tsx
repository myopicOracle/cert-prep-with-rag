import Timer from '@/app/ui/practice/exam/timer'
import Flag from '@/app/ui/practice/flag'
import ProgressBar from '@/app/ui/practice/exam/progress-bar'
interface ProgressWrapperProps {
    timeRemaining: number
    setTimeRemaining: (setter: (prev: number) => number) => void
    questionsCompleted: number
    totalQuestions: number
    flagged: boolean
    onFlag: () => void
}

export default function ProgressWrapper({
    timeRemaining,
    setTimeRemaining,
    questionsCompleted,
    totalQuestions,
    flagged,
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
                <Flag flagged={flagged} onFlag={onFlag} />
            </div>
            <ProgressBar progressPercentage={progressPercentage} />
        </div>
    )
}
