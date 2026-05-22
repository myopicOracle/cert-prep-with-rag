'use client'

import {
    HomeIcon,
    ClipboardDocumentIcon,
    BoltIcon,
    ForwardIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        name: 'Progress',
        href: '/practice',
        icon: HomeIcon,
    },
    {
        name: 'Mock Exams',
        href: '/practice/exam',
        icon: ClipboardDocumentIcon,
    },
    {
        name: 'Flashcards',
        href: '/practice/flashcards',
        icon: BoltIcon,
    },
    {
        name: 'Speed Run',
        href: '/practice/speedrun',
        icon: ForwardIcon,
    },
]

export default function NavLinks() {
    const pathname = usePathname()
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-lg font-outfit tracking-wide hover:bg-selected hover:text-link md:flex-none md:justify-start md:p-2 md:px-3 ${
                            pathname === link.href
                                ? 'bg-selected text-link'
                                : 'bg-page'
                        }`}>
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}
