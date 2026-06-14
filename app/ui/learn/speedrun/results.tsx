import Button from '@/app/ui/learn/button'
import { SpeedrunResultsProps } from '@/app/types/components'

const restartButtonStyle =
    'rounded-sm text-sm font-semibold px-8 py-3 bg-button text-button-text hover:bg-button/80 shadow-md focus:outline-none'

export default function Results({
    score,
    total,
    onRestart,
}: SpeedrunResultsProps) {
    const pct = Math.round((score / total) * 100)

    return (
        <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-2xl border border-border bg-card p-10 text-center shadow-md">
            <span className="mb-2 text-xs font-outfit uppercase tracking-widest text-body-muted">
                Round complete
            </span>
            <p className="font-sora text-5xl tracking-tight text-heading">
                {score}
                <span className="text-2xl text-body-muted"> / {total}</span>
            </p>
            <p className="mt-2 font-outfit text-sm tracking-wide text-body">
                {pct}% correct
            </p>
            <div className="mt-8">
                <Button
                    name="New round"
                    buttonStyle={restartButtonStyle}
                    onClick={onRestart}
                    isDisabled={false}
                />
            </div>
        </div>
    )
}
