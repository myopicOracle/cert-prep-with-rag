import Image from 'next/image'

export default function Header() {
    return (
        <div className="w-full h-8 md:h-10 bg-header flex items-center justify-between px-2">
            <Image
                src="/lockup.svg"
                alt="Brand lockup for Praevisio Atlas"
                width={240}
                height={64}
                className="h-8 w-auto rounded-sm"
            />
            <div>About / Study / Practice</div>
            <div className="flex gap-4">
                <div>Toggle Dark Light</div>
                <div>Login</div>
            </div>
        </div>
    )
}
