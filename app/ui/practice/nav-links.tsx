'use client'

import { HomeIcon, ClipboardDocumentIcon, BoltIcon, ForwardIcon } from '@heroicons/react/24/outline'
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
                        className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
                            pathname === link.href ? 'bg-sky-100 text-blue-600' : 'bg-gray-50'
                        }`}>
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}
