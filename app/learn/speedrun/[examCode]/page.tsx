import { notFound } from 'next/navigation'
import { examMetadata } from '@/app/lib/seed'
import { fetchQuizzesByExam } from '@/app/lib/data'
import SpeedrunWrapper from '@/app/ui/learn/speedrun/speedrun-wrapper'

export default async function Page({
    params,
}: {
    params: Promise<{ examCode: string }>
}) {
    const { examCode } = await params
    const exam = examMetadata.find((e) => e.exam_code === examCode)

    if (!exam) {
        notFound()
    }

    const quizzes = await fetchQuizzesByExam(examCode)

    return (
        <div className="w-full">
            <h1 className="mb-2 text-3xl font-sora tracking-tight text-contrast">
                {exam.short_name}
            </h1>
            <p className="mb-8 font-outfit tracking-wide text-contrast">
                {exam.exam_code} — quick-fire concept checks.
            </p>

            {quizzes.length === 0 ? (
                <p className="font-outfit tracking-wide text-body-muted">
                    No quizzes are available for this exam yet.
                </p>
            ) : (
                <SpeedrunWrapper quizzes={quizzes} />
            )}
        </div>
    )
}
