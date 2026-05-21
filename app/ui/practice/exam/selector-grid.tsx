import Link from 'next/link'

export type SelectorItem = {
    title: string
    description: string
    href: string
}

export default function SelectorGrid({ items }: { items: SelectorItem[] }) {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:bg-selected">
                    <h2 className="text-xl font-semibold text-heading">
                        {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-body-muted">
                        {item.description}
                    </p>
                </Link>
            ))}
        </div>
    )
}
