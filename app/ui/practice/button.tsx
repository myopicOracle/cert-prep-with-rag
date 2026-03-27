interface ButtonProps {
    // NTD: extract to types definitions file
    name: string
    onClick: () => void
}

export default function Button({ name, onClick }: ButtonProps) {
    return (
        <button
            className="rounded-sm text-sm font-semibold px-6 py-2 bg-blue-100 shadow-md hover:bg-blue-300 focus:outline-none"
            onClick={onClick}>
            {name}
        </button>
    )
}
