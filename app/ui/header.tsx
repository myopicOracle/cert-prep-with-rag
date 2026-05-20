import Image from 'next/image'

export default function Header() {
    return (
        <div className="w-full h-[5dvh] bg-header flex items-center justify-between px-2 md:px-4">
            <Image
                src="/atlas/lockup-light.svg"
                alt="Brand lockup for Praevisio Atlas"
                width={240}
                height={64}
                className="h-8 w-auto [[data-theme='dark']_&]:hidden"
            />
            <Image
                src="/atlas/lockup-dark.svg"
                alt="Brand lockup for Praevisio Atlas"
                width={240}
                height={64}
                className="h-8 w-auto hidden [[data-theme='dark']_&]:block"
            />
            <nav className="text-text">About / Study / Practice</nav>
            <div className="flex gap-4 text-text">
                <div>Toggle Dark Light</div>
                <div>Login</div>
            </div>
        </div>
    )
}
