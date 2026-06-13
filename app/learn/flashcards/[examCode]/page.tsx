import { notFound } from 'next/navigation'
import { examMetadata } from '@/app/lib/seed'
import { fetchFlashcardsByExam } from '@/app/lib/data'
import FlashcardWrapper from '@/app/ui/learn/flashcards/flashcard-wrapper'

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

    const cards = await fetchFlashcardsByExam(examCode)

    return (
        <div className="w-full">
            <h1 className="mb-2 text-3xl font-sora tracking-tight text-contrast">
                {exam.short_name}
            </h1>
            <p className="mb-8 font-outfit tracking-wide text-contrast">
                {exam.exam_code} — {cards.length} terms to review.
            </p>

            {cards.length === 0 ? (
                <p className="font-outfit tracking-wide text-body-muted">
                    No flashcards are available for this exam yet.
                </p>
            ) : (
                <FlashcardWrapper cards={cards} />
            )}
        </div>
    )
}
