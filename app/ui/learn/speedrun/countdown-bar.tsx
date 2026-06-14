import { CountdownBarProps } from '@/app/types/components'

export default function CountdownBar({
    secondsLeft,
    totalSeconds,
}: CountdownBarProps) {
    const pct = Math.max(0, (secondsLeft / totalSeconds) * 100)

    return (
        <div className="mb-6 flex w-full items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-selected">
                <div
                    className="h-full rounded-full bg-button transition-[width] duration-1000 ease-linear"
                    style={{ width: `${pct}%` }}
                />
            </div>
            <span className="w-8 text-right font-outfit text-sm tabular-nums text-contrast">
                {secondsLeft}s
            </span>
        </div>
    )
}
