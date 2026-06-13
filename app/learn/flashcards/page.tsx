import { examMetadata } from '@/app/lib/seed'
import { fetchAvailableFlashcardExamCodes } from '@/app/lib/data'
import SelectorGrid from '@/app/ui/learn/exam/selector-grid'

export default async function Page() {
    const available = new Set(await fetchAvailableFlashcardExamCodes())

    const items = examMetadata.map((exam) => ({
        title: exam.short_name,
        description: exam.description,
        href: `/learn/flashcards/${exam.exam_code}`,
        image: {
            src: `/badges/${exam.exam_code}.png`,
            alt: `${exam.full_name} certification badge`,
        },
        disabled: !available.has(exam.exam_code),
    }))

    return (
        <div className="w-full">
            <h1 className="mb-2 text-3xl font-sora tracking-tight text-contrast">
                Flashcards
            </h1>
            <p className="mb-8 font-outfit tracking-wide text-contrast">
                Choose a certification to review its key terms.
            </p>
            <SelectorGrid items={items} />
        </div>
    )
}
