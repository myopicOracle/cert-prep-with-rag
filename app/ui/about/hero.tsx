import Image from 'next/image'

export default function Hero() {
    return (
        <div
            style={{
                fontFamily:
                    "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
            className="w-full text-center bg-page">
            <header className="px-4 pb-4 max-w-7xl mx-auto">
                <div className="max-w-4xl mx-auto pt-10 sm:pt-16">
                    <h1 className="text-4xl md:text-6xl text-body tracking-tighter font-medium mx-auto pb-6">
                        Your{' '}
                        <span className="text-highlight">
                            AWS Cloud Journey
                        </span>
                        <span className="block font-medium">Starts Here</span>
                    </h1>
                    <div className="pb-8 max-w-xl mx-auto">
                        <p className="mb-4 text-lg md:text-xl text-gray-500">
                            We commit to delivering high-quality resources at
                            zero cost. All you need to bring is a growth
                            mindset.
                        </p>
                    </div>
                </div>
                <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 min-w-[100px]
            rounded-md shadow-sm text-sm text-button-text bg-button
            border border-gray-300 hover:bg-gray-50
            focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400
            no-underline cursor-pointer">
                    Begin Your Path
                </a>
            </header>
            <Image
                src="/images/hero-backdrop.png"
                alt="Image showing cloud certification path"
                width={2048}
                height={736}
                className="w-full h-auto"
            />
        </div>
    )
}
