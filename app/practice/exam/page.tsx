import { examMetadata } from '@/app/lib/seed'
import SelectorGrid from '@/app/ui/practice/exam/selector-grid'

export default function Page() {
    const items = examMetadata.map((exam) => ({
        title: exam.short_name,
        description: exam.description,
        href: `/practice/exam/${exam.exam_code}`,
    }))

    return (
        <div className="w-full py-8">
            <h1 className="mb-2 text-3xl font-bold text-heading">Mock Exams</h1>
            <p className="mb-8 text-body-muted">
                Choose a certification to view available practice sets.
            </p>
            <SelectorGrid items={items} />
        </div>
    )
}
