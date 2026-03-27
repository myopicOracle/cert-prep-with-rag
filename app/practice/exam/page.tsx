import { lusitana } from '@/app/ui/fonts'
import Card from '@/app/ui/practice/exam/card'
import ProgressBar from '@/app/ui/practice/exam/progress-bar'

export default async function Page() {
    const examID = 'DEA-C01 - Exam 1' // NTD: make dynamic

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>{examID}</h1>

            <ProgressBar />

            <Card />
        </div>
    )
}
