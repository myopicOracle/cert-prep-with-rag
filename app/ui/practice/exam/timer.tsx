import { ClockIcon } from '@heroicons/react/24/outline'

interface TimerProps {
    timeInSeconds: number | null
}

export default function Timer({ timeInSeconds }: TimerProps) {
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
    const seconds = timeInSeconds % 60

    function pad(num: number) {
        if (num < 10) return `0${num}`
        else return num
    }

    return (
        <div className="flex gap-2">
            <div>
                <ClockIcon className="w-6" />
            </div>
            <div>
                {pad(hours)}:{pad(minutes)}:{pad(seconds)}
            </div>
        </div>
    )
}
