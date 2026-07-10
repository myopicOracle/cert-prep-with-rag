import { fetchServices } from '@/app/lib/data'
import {
    getServiceDisplayName,
    getServiceSortName,
} from '@/app/lib/service-names'
import GlossaryWrapper from '@/app/ui/learn/glossary/glossary-wrapper'
import { GlossaryItem } from '@/app/types/components'

export default async function Page() {
    const services = await fetchServices()

    const items: GlossaryItem[] = services.map((service) => {
        const displayName = getServiceDisplayName(service.name)

        return {
            id: service.id,
            slug: service.name,
            displayName: displayName,
            sortName: getServiceSortName(displayName),
            overview: service.overview,
            deepDive: service.deep_dive,
        }
    })

    items.sort((a, b) => a.sortName.localeCompare(b.sortName))

    return (
        <div className="w-full">
            <h1 className="mb-2 text-3xl font-sora tracking-tight text-contrast">
                AWS Glossary
            </h1>
            <p className="mb-8 font-outfit tracking-wide text-contrast">
                Browse {items.length} AWS services, from overview to deep dive.
            </p>
            <GlossaryWrapper items={items} />
        </div>
    )
}
