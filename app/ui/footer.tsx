import Image from 'next/image'

export default function Footer() {
    return (
        <div className="flex items-center justify-between px-2 md:px-4">
            <div>© 2026 Praevisio Labs.</div>
            <div className="flex items-center gap-2">
                <Image
                    src="/brandmark.svg"
                    alt="Brand logo for Praevisio Atlas"
                    width={64}
                    height={64}
                    className="h-lh w-auto rounded-md"
                />
                <div>
                    Enjoying the app? Consider giving us a star on{' '}
                    <a
                        href="https://github.com/myopicOracle/cert-prep-with-rag"
                        target="_blank"
                        rel="noreferrer"
                        className="text-link underline hover:no-underline">
                        GitHub
                    </a>
                </div>
            </div>
            <Image
                src="/slogan.png"
                alt="Brand slogan for Praevisio Labs"
                width={240}
                height={64}
                className="h-lh w-auto rounded-sm"
            />
        </div>
    )
}
