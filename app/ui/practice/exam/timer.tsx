import { ClockIcon } from '@heroicons/react/24/outline'

interface TimerProps {
    timeInSeconds: number
}

export default function Timer({ timeInSeconds }: TimerProps) {
    const hours = Math.floor(timeInSeconds / 3600)
    console.log('hours: ', hours)
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
    console.log('minutes: ', minutes)
    const seconds = timeInSeconds % 60
    console.log('seconds: ', seconds)

    function pad(num: number) {
        if (num < 10) return `0${num}`
        else return num
    }

    return (
        <div className="flex">
            <div>
                <ClockIcon className="w-6" />
            </div>
            <div>
                `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
            </div>
        </div>
    )
}
