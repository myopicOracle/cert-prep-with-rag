import Timer from '@/app/ui/practice/exam/timer'
import ProgressBar from '@/app/ui/practice/exam/progress-bar'
import { examMetadata } from '@/app/lib/metadata'

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
    const examDuration = () => {
        for (let i = 0; i < examMetadata.length; i++) {
            if (examMetadata[i].exam_code === examCode) {
                return examMetadata[i].duration * 60
            }
        }
    }

    return (
        <div className="w-full flex flex-col">
            <div className="self-end">
                <Timer timeInSeconds={examDuration() ?? 215999} />
                <div>
                    Completed: {questionsCompleted} / {totalQuestions}
                </div>
            </div>
            <ProgressBar progressPercentage={progressPercentage} />
        </div>
    )
}
