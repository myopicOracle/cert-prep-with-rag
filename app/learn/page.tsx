import { lusitana } from '@/app/ui/fonts'
import ProgressOverview from '@/app/ui/learn/progress/progress-overview'
import ExamStats from '@/app/ui/learn/progress/exam-stats'
import FlashcardsStats from '@/app/ui/learn/progress/flashcards-stats'

export default async function Page() {
    return (
        <div className="w-full">
            <h1 className="mb-2 text-3xl font-sora tracking-tight text-contrast">
                Track Your Progress
            </h1>
            <p className="mb-8 font-outfit tracking-wide text-contrast">
                Review your performance across exams and flashcards.
            </p>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <ProgressOverview />
                <ExamStats />
                <FlashcardsStats />
            </div>
        </div>
    )
}
