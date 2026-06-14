import { examMetadata } from '@/app/lib/seed'
import { fetchAvailableQuizExamCodes } from '@/app/lib/data'
import SelectorGrid from '@/app/ui/learn/exam/selector-grid'

export default async function Page() {
    const available = new Set(await fetchAvailableQuizExamCodes())

    const items = examMetadata.map((exam) => ({
        title: exam.short_name,
        description: `[${exam.exam_code}]: ${exam.description}`,
        href: `/learn/speedrun/${exam.exam_code}`,
        image: {
            src: `/badges/${exam.exam_code}.png`,
            alt: `${exam.full_name} certification badge`,
        },
        disabled: !available.has(exam.exam_code),
    }))

    return (
        <div className="w-full">
            <h1 className="mb-2 text-3xl font-sora tracking-tight text-contrast">
                Speedrun
            </h1>
            <p className="mb-8 font-outfit tracking-wide text-contrast">
                Choose a certification for a quick-fire round of concept checks.
            </p>
            <SelectorGrid items={items} />
        </div>
    )
}
