import { lusitana } from '@/app/ui/fonts'
import ProgressOverview from '@/app/ui/practice/progress-overview'
import ExamStats from '@/app/ui/practice/exam-stats'
import FlashcardsStats from '@/app/ui/practice/flashcards-stats'

export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Track Your Progress
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <ProgressOverview />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <ExamStats />
                <FlashcardsStats />
            </div>
        </main>
    )
}
