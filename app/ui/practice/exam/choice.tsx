interface ChoiceProps {
    // NTD: extract to types definitions file
    children: React.ReactNode
}

export default function Choice({ children }: ChoiceProps) {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 m-2 min-h-16">
            {children}
        </div>
    )
}
