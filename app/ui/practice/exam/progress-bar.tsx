interface ProgressBarProps {
    questionsCompleted: number
    totalQuestions: number
}

export default function ProgressBar({ questionsCompleted, totalQuestions }: ProgressBarProps) {
    const progressPercentage = (questionsCompleted / totalQuestions) * 100

    return (
        <div className="w-full flex flex-col">
            <div className="self-end">
                Completed: {questionsCompleted} / {totalQuestions}
            </div>
            <div className="mt-4 p-4 rounded-full border border-gray-200 bg-white shadow-sm">
                <div
                    className="rounded-full bg-blue-500 h-2"
                    style={{ width: `${progressPercentage}%` }}></div>
            </div>
        </div>
    )
}
