interface ButtonProps {
    name: string
    onClick: () => void
}

export default function Button({ name, onClick }: ButtonProps) {
    return (
        <div>
            <button onClick={onClick}>{name}</button>
        </div>
    )
}
