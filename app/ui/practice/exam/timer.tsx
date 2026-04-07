import { useEffect } from 'react'
import { ClockIcon } from '@heroicons/react/24/outline'
import { TimerProps } from '@/app/types/components'

export default function Timer({ timeInSeconds, setTimeRemaining }: TimerProps) {
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
    const seconds = timeInSeconds % 60

    function pad(num: number) {
        if (num < 10) return `0${num}`
        else return num
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prev) => {
                return prev > 0 ? prev - 1 : 0
            })
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [setTimeRemaining])

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
