import { notFound } from 'next/navigation'
import { examMetadata } from '@/app/lib/seed'
import { fetchSetLettersByExam } from '@/app/lib/data'
import SelectorGrid from '@/app/ui/learn/exam/selector-grid'

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

    const setLetters = await fetchSetLettersByExam(examCode)

    const items = setLetters.map((letter) => ({
        title: `Set ${letter.toUpperCase()}`,
        description: `Full-length ${exam.duration}-minute practice exam aligned to ${exam.short_name}.`,
        href: `/learn/exam/${examCode}/${letter}`,
        image: {
            src: `/badges/${examCode}.png`,
            alt: `${exam.full_name} certification badge`,
        },
    }))

    return (
        <div className="w-full">
            <h1 className="mb-2 text-3xl font-sora tracking-tight text-contrast">
                {exam.short_name}
            </h1>
            <p className="mb-8 font-outfit tracking-wide text-contrast">
                {exam.exam_code} — choose a practice set.
            </p>
            <SelectorGrid items={items} />
        </div>
    )
}
