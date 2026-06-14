import { ChoiceProps } from '@/app/types/components'

export default function Choice({ children, index, selected, onSelect }: ChoiceProps) {
    return (
        <div
            // prettier-ignore
            className={`rounded-lg border p-4 m-2 min-h-16 cursor-pointer transition-colors 
                ${selected 
                    ? 'border-button bg-selected font-medium'
                    : 'border-border bg-card'
                }`}
            onClick={() => onSelect(index)}>
            {children}
        </div>
    )
}
