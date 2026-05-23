'use client'

import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        name: 'New Chat',
        href: '/study',
        icon: ChatBubbleLeftRightIcon,
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
                        className={`flex grow items-center justify-center gap-3 rounded-lg p-3 font-outfit font-semibold tracking-wide transition-colors md:flex-none md:justify-start ${
                            pathname === link.href
                                ? 'bg-selected text-link'
                                : 'text-body-muted hover:bg-selected hover:text-link'
                        }`}>
                        <LinkIcon className="w-6 shrink-0" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}
