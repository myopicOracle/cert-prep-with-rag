import { ButtonProps } from '@/app/types/components'

export default function Button({ name, buttonStyle, isDisabled, onClick }: ButtonProps) {
    return (
        // prettier-ignore
        <button 
            className={`${buttonStyle} cursor-pointer`} 
            onClick={ onClick }
            disabled={ isDisabled }
        >
            {name}
        </button>
    )
}
