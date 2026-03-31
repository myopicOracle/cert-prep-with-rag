interface ButtonProps {
    // NTD: extract to types definitions file
    name: string
    buttonStyle: string
    isDisabled: boolean
    onClick: () => void
}

export default function Button({ name, buttonStyle, isDisabled, onClick }: ButtonProps) {
    return (
        // prettier-ignore
        <button 
            className={buttonStyle} 
            onClick={ onClick }
            disabled={ isDisabled }
        >
            {name}
        </button>
    )
}
