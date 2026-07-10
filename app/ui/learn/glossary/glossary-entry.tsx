import { GlossaryEntryProps } from '@/app/types/components'

// The deep_dive column stores one long string of facts separated by '; '.
function splitDeepDiveIntoFacts(deepDive: string): string[] {
    const parts = deepDive.split('; ')
    const facts: string[] = []

    for (const part of parts) {
        let fact = part.trim()

        if (fact.endsWith('.')) {
            fact = fact.slice(0, -1)
        }

        if (fact !== '') {
            facts.push(fact)
        }
    }

    return facts
}

export default function GlossaryEntry({ item }: GlossaryEntryProps) {
    const facts = splitDeepDiveIntoFacts(item.deepDive)

    return (
        <article className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-sora tracking-tight text-heading">
                    {item.displayName}
                </h3>
                <code className="rounded bg-selected px-1.5 py-0.5 font-jetbrains text-xs text-body-muted">
                    {item.slug}
                </code>
            </div>

            <p className="mt-2 font-outfit tracking-wide text-body-muted">
                {item.overview}
            </p>

            <details className="group mt-3">
                <summary className="cursor-pointer list-none font-outfit text-sm font-semibold tracking-wide text-link hover:text-link-hover">
                    <span className="group-open:hidden">Show deep dive</span>
                    <span className="hidden group-open:inline">
                        Hide deep dive
                    </span>
                </summary>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 font-outfit text-sm tracking-wide text-body-muted">
                    {facts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                    ))}
                </ul>
            </details>
        </article>
    )
}
