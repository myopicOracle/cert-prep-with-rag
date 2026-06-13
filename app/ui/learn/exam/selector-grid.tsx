import Image from 'next/image'
import Link from 'next/link'

export type SelectorItem = {
    title: string
    description: string
    href: string
    image?: {
        src: string
        alt: string
    }
    disabled?: boolean
}

export default function SelectorGrid({ items }: { items: SelectorItem[] }) {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => {
                const content = (
                    <>
                        {item.image && (
                            <div className="flex items-center justify-center">
                                <Image
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    width={160}
                                    height={160}
                                    className="h-40 w-40 object-contain"
                                />
                            </div>
                        )}
                        <h2 className="mt-6 text-xl font-sora tracking-tight text-heading">
                            {item.title}
                        </h2>
                        <p className="mt-3 text-sm font-outfit tracking-wide text-body-muted">
                            {item.description}
                        </p>
                    </>
                )

                if (item.disabled) {
                    return (
                        <div
                            key={item.href}
                            aria-disabled="true"
                            className="relative cursor-not-allowed rounded-2xl border border-border bg-card p-8">
                            <span className="absolute top-4 right-4 rounded-full border border-highlight/40 bg-highlight/10 px-3 py-1 text-xs font-outfit tracking-wide text-highlight">
                                Coming Soon
                            </span>
                            <div className="flex flex-col opacity-50">
                                {content}
                            </div>
                        </div>
                    )
                }

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:bg-selected">
                        {content}
                    </Link>
                )
            })}
        </div>
    )
}
