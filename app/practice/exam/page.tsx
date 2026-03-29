import { lusitana } from '@/app/ui/fonts'
import Card from '@/app/ui/practice/exam/card'
import ProgressBar from '@/app/ui/practice/exam/progress-bar'
import { fetchQuestions } from '@/app/lib/data'

export default async function Page() {
    const examID = 'DEA-C01 - Exam 1' // NTD: make dynamic (pull from questions table)

    const questions = await fetchQuestions()
    console.log('Object returned: ', questions)

    const currQuestion = questions[0] // NTD: replace with URL Params, hardcoded for now

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>{examID}</h1>

            <ProgressBar />

            {/* NTD: dynamically generate with map, index with URL params */}
            <Card id={0} question={currQuestion} />
        </div>
    )
}
