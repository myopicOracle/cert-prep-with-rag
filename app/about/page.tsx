import Overview from '@/app/ui/about/overview'
import Features from '@/app/ui/about/features'
import Roadmap from '@/app/ui/about/roadmap'
import CTA from '@/app/ui/about/cta'

export default function Page() {
    return (
        <div className="bg-page">
            <div className="mx-auto max-w-3xl px-4 py-12">
                <div className="space-y-12">
                    <Overview />
                    <Features />
                    <Roadmap />
                    <CTA />
                </div>
            </div>
        </div>
    )
}
