interface ProgressBarProps {
    progressPercentage: number
}

export default function ProgressBar({ progressPercentage }: ProgressBarProps) {
    return (
        // prettier-ignore
        <div className="mt-4 p-4 rounded-full border border-border bg-card shadow-sm">
            <div
                className="rounded-full bg-button h-2"
                style={ { width: `${progressPercentage}%` } }>    
            </div>
        </div>
    )
}
