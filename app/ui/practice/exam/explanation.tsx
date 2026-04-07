interface ChoiceProps {
    // NTD: extract to types definitions file
    children: React.ReactNode
    isCorrect: boolean
}

export default function Explanation({ children, isCorrect }: ChoiceProps) {
    return (
        // prettier-ignore
        <div className={`font-normal rounded-lg p-4 m-2 min-h-16 cursor-pointer transition-colors 
            ${isCorrect 
                ? 'bg-green-50' 
                : 'bg-red-50'
            }`}>
            <strong>Explanation</strong>: <em>{children}</em>
        </div>
    )
}
