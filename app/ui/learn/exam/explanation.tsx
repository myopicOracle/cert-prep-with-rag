interface ChoiceProps {
    // NTD: extract to types definitions file
    children: React.ReactNode
    isCorrect: boolean
}

export default function Explanation({ children, isCorrect }: ChoiceProps) {
    return (
        // prettier-ignore
        <div className={`font-normal text-brand-navy rounded-lg p-4 m-2 min-h-16 cursor-pointer transition-colors 
            ${isCorrect 
                ? 'bg-status-correct'
                : 'bg-status-wrong'
            }`}>
            <strong>Explanation</strong>: <em>{children}</em>
        </div>
    )
}
