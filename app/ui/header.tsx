import Image from 'next/image'
import Link from 'next/link'
import ThemeSelect from '@/app/ui/theme-select'

export default function Header() {
    return (
        <div className="relative w-full h-[10dvh] bg-header flex items-center justify-between px-2 py-2 md:px-4 md:py-3">
            <Link href="/" className="h-1/2 md:h-full flex-shrink-0">
                <Image
                    src="/atlas/lockup-light.svg"
                    alt="Brand lockup for Cloud Atlas"
                    width={240}
                    height={64}
                    priority
                    className="h-full w-auto dark:hidden"
                />
                <Image
                    src="/atlas/lockup-dark.svg"
                    alt="Brand lockup for Cloud Atlas"
                    width={240}
                    height={64}
                    priority
                    className="h-full w-auto hidden dark:block"
                />
            </Link>
            <nav className="absolute left-1/2 -translate-x-1/2 flex gap-4 md:gap-10 text-body font-sora font-semibold">
                <Link
                    href="/about"
                    className="text-link text-sm md:text-lg transition-colors hover:text-link-hover">
                    About
                </Link>
                <Link
                    href="/learn/exam"
                    className="text-link text-sm md:text-lg transition-colors hover:text-link-hover">
                    Learn
                </Link>
            </nav>
            <div className="flex items-center gap-2 md:gap-4 text-body font-outfit tracking-wide">
                <ThemeSelect />
                <button className="rounded-sm bg-button px-4 py-2 text-sm md:text-base text-button-text">
                    Login
                </button>
            </div>
        </div>
    )
}
