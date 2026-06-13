import Image from 'next/image'
import Link from 'next/link'
import ThemeSelect from '@/app/ui/theme-select'

export default function Header() {
    return (
        <div className="relative w-full h-[10dvh] bg-header flex items-center justify-between px-1 py-2 md:px-2 py-3">
            <Link href="/" className="h-full">
                <Image
                    src="/atlas/lockup-light.svg"
                    alt="Brand lockup for Praevisio Atlas"
                    width={240}
                    height={64}
                    className="h-full w-auto dark:hidden"
                />
                <Image
                    src="/atlas/lockup-dark.svg"
                    alt="Brand lockup for Praevisio Atlas"
                    width={240}
                    height={64}
                    className="h-full w-auto hidden dark:block"
                />
            </Link>
            <nav className="absolute left-1/2 -translate-x-1/2 flex gap-6 md:gap-10 text-body font-sora semibold">
                <Link
                    href="/about"
                    className="text-link text-lg transition-colors hover:text-link-hover">
                    About
                </Link>
                <Link
                    href="/learn"
                    className="text-link text-lg transition-colors hover:text-link-hover">
                    Learn
                </Link>
            </nav>
            <div className="flex items-stretch self-stretch gap-4 text-body font-outfit tracking-wide py-3">
                <ThemeSelect />
                <button className="h-full rounded-md bg-button px-4 py-2 text-button-text">
                    Login
                </button>
            </div>
        </div>
    )
}
