import Image from 'next/image'

export default function Hero() {
    return (
        <div className="w-full h-full flex flex-col text-center bg-page">
            <div className="px-4 pb-4 max-w-7xl mx-auto">
                <div className="max-w-4xl mx-auto pt-10 sm:pt-16">
                    <h1 className="text-4xl md:text-6xl text-body font-sora tracking-tight font-medium mx-auto pb-6">
                        Your{' '}
                        <span className="text-highlight">
                            AWS Cloud Journey
                        </span>
                        <span className="block font-medium">Starts Here</span>
                    </h1>
                    <div className="pb-8 max-w-xl mx-auto">
                        <p className="mb-4 text-lg md:text-xl text-body-muted font-outfit">
                            We're committed to delivering high-quality
                            certification prep resources at no cost to learners.
                        </p>
                    </div>
                </div>
                <a
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 min-w-[100px]
            rounded-md shadow-sm text-sm text-button-text font-outfit tracking-wide bg-button
            border border-border transition-opacity hover:opacity-90
            focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-focus
            no-underline cursor-pointer">
                    Begin Your Path
                </a>
            </div>
            <Image
                src="/images/hero-main.png"
                alt="Image showing cloud certification path"
                width={2048}
                height={736}
                className="w-full h-auto mt-auto"
            />
        </div>
    )
}
