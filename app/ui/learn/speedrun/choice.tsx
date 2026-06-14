import { SpeedrunChoiceProps } from '@/app/types/components'

export default function Choice({
    answer,
    index,
    isAnswered,
    isCorrect,
    isSelected,
    onSelect,
}: SpeedrunChoiceProps) {
    let stateStyle =
        'border-border bg-card text-body hover:bg-selected cursor-pointer'

    if (isAnswered) {
        if (isCorrect) {
            stateStyle =
                'border-status-correct bg-status-correct text-body cursor-default'
        } else if (isSelected) {
            stateStyle =
                'border-status-wrong bg-status-wrong text-body cursor-default'
        } else {
            stateStyle =
                'border-border bg-card text-body-muted opacity-60 cursor-default'
        }
    }

    return (
        <button
            type="button"
            disabled={isAnswered}
            onClick={() => onSelect(index)}
            className={`w-full rounded-lg border p-4 text-left font-outfit text-sm tracking-wide transition-colors focus:outline-none md:text-base ${stateStyle}`}>
            {answer}
        </button>
    )
}
