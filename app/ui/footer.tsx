import Image from 'next/image'

export default function Footer() {
    return (
        <div className="w-full h-[5dvh] bg-footer flex items-center justify-between px-2 md:px-4 text-sm">
            <div className="h-3/5 flex items-center gap-2">
                <Image
                    src="/atlas/brandmark.svg"
                    alt="Brand logo for Praevisio Atlas"
                    width={64}
                    height={64}
                    className="h-full w-auto rounded-md"
                />
                <div className="text-body font-outfit tracking-wide opacity-90">
                    Enjoying the app? Consider giving us a{' '}
                    <a
                        href="https://github.com/myopicOracle/cert-prep-with-rag"
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent-contrast font-semibold transition-colors hover:text-link-hover">
                        star on GitHub
                    </a>
                    .
                </div>
            </div>
            <div className="h-3/5 flex items-center gap-4">
                <div className="text-body font-outfit tracking-wide opacity-90">
                    © 2026 Praevisio Labs. All Rights Reserved.
                </div>
                <Image
                    src="/praevisio/slogan.png"
                    alt="Brand slogan for Praevisio Labs"
                    width={240}
                    height={64}
                    className="h-full w-auto rounded-sm"
                />
            </div>
        </div>
    )
}
