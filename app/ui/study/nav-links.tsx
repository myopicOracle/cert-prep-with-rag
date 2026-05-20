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
                        className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-selected hover:text-link md:flex-none md:justify-start md:p-2 md:px-3 ${
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
