interface ChoiceProps {
    // NTD: extract to types definitions file
    children: React.ReactNode
}

export default function Scenario({ children }: ChoiceProps) {
    return <div className="mb-4 p-4 min-h-32">{children}</div>
}
