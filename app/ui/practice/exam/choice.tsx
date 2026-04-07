import { ChoiceProps } from '@/app/types/components'

export default function Choice({ children, index, selected, onSelect }: ChoiceProps) {
    return (
        <div
            // prettier-ignore
            className={`rounded-lg border p-4 m-2 min-h-16 cursor-pointer transition-colors 
                ${selected 
                    ? 'border-blue-400 bg-blue-50 font-medium' 
                    : 'border-gray-200 bg-white'
                }`}
            onClick={() => onSelect(index)}>
            {children}
        </div>
    )
}
