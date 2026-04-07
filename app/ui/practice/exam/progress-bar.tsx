interface ProgressBarProps {
    progressPercentage: number
}

export default function ProgressBar({ progressPercentage }: ProgressBarProps) {
    return (
        // prettier-ignore
        <div className="mt-4 p-4 rounded-full border border-gray-200 bg-white shadow-sm">
            <div
                className="rounded-full bg-blue-500 h-2"
                style={ { width: `${progressPercentage}%` } }>    
            </div>
        </div>
    )
}
