'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import GlossaryEntry from './glossary-entry'
import { GlossaryItem, GlossaryWrapperProps } from '@/app/types/components'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function matchesSearch(item: GlossaryItem, searchText: string): boolean {
    const query = searchText.trim().toLowerCase()

    if (query === '') {
        return true
    }

    if (item.displayName.toLowerCase().includes(query)) {
        return true
    }

    if (item.slug.includes(query)) {
        return true
    }

    if (item.overview.toLowerCase().includes(query)) {
        return true
    }

    return false
}

function groupByFirstLetter(
    items: GlossaryItem[],
): Map<string, GlossaryItem[]> {
    const groups = new Map<string, GlossaryItem[]>()

    for (const item of items) {
        const letter = item.sortName.charAt(0).toUpperCase()
        const group = groups.get(letter)

        if (group) {
            group.push(item)
        } else {
            groups.set(letter, [item])
        }
    }

    return groups
}

export default function GlossaryWrapper({ items }: GlossaryWrapperProps) {
    const [searchText, setSearchText] = useState('')

    const filteredItems = items.filter((item) =>
        matchesSearch(item, searchText),
    )
    const groups = groupByFirstLetter(filteredItems)
    const isSearching = searchText.trim() !== ''

    return (
        <div>
            <div>
                <div className="relative mb-6 max-w-md">
                    <MagnifyingGlassIcon className="pointer-events-none absolute top-1/2 left-3 w-5 -translate-y-1/2 text-body-muted" />
                    <input
                        type="text"
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                        placeholder="Search services..."
                        className="w-full rounded-lg border border-border bg-input py-2 pr-4 pl-10 font-outfit tracking-wide text-body placeholder:text-body-muted focus:ring-2 focus:ring-focus focus:outline-none"
                    />
                </div>

                {isSearching && filteredItems.length > 0 && (
                    <p className="mb-6 font-outfit text-sm tracking-wide text-contrast">
                        Showing {filteredItems.length} of {items.length}{' '}
                        services
                    </p>
                )}

                {filteredItems.length === 0 && (
                    <p className="font-outfit tracking-wide text-contrast">
                        No services match your search.
                    </p>
                )}

                {alphabet.map((letter) => {
                    const group = groups.get(letter)

                    if (!group) {
                        return null
                    }

                    return (
                        <section
                            key={letter}
                            id={`letter-${letter}`}
                            className="mb-10 scroll-mt-4">
                            <h2 className="mb-4 border-b border-border pb-2 text-2xl font-sora tracking-tight text-contrast">
                                {letter}
                            </h2>
                            <div className="space-y-4">
                                {group.map((item) => (
                                    <GlossaryEntry key={item.id} item={item} />
                                ))}
                            </div>
                        </section>
                    )
                })}
            </div>

            <nav
                aria-label="Jump to letter"
                className="fixed top-1/2 right-3 hidden -translate-y-1/2 flex-col items-center lg:flex">
                {alphabet.map((letter) => {
                    if (!groups.has(letter)) {
                        return (
                            <span
                                key={letter}
                                className="px-1.5 py-0.5 font-outfit text-xs text-contrast opacity-30">
                                {letter}
                            </span>
                        )
                    }

                    return (
                        <a
                            key={letter}
                            href={`#letter-${letter}`}
                            className="rounded px-1.5 py-0.5 font-outfit text-xs font-semibold text-contrast hover:bg-selected hover:text-link">
                            {letter}
                        </a>
                    )
                })}
            </nav>
        </div>
    )
}
