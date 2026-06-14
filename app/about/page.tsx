import Image from 'next/image'
import Overview from '@/app/ui/about/overview'
import Roadmap from '@/app/ui/about/roadmap'
import CTA from '@/app/ui/about/cta'

export default function Page() {
    return (
        <div className="bg-page">
            <div className="mx-auto max-w-3xl px-4 py-12">
                <div className="py-12 space-y-12">
                    <Overview />
                    <Image
                        src="/images/about-overview.png"
                        alt="Image showing cloud learning campus"
                        width={4297}
                        height={2089}
                        className="w-full h-auto mt-auto"
                    />
                    <Roadmap />
                </div>
                <div className="py-12 space-y-12">
                    <CTA />
                </div>
            </div>
        </div>
    )
}
