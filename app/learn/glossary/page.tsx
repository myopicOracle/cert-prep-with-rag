import { fetchServices } from '@/app/lib/data'
import { getServiceDisplayName } from '@/app/lib/service-names'

export default async function Page() {
    const services = await fetchServices()

    return (
        <div className="w-full">
            <h1 className="mb-2 text-3xl font-sora tracking-tight text-contrast">
                AWS Glossary
            </h1>
            <p className="mb-8 font-outfit tracking-wide text-contrast">
                Browse {services.length} AWS services, from overview to deep
                dive.
            </p>

            {/* Placeholder list — replaced by the full glossary UI in the next step. */}
            <ul className="space-y-2">
                {services.map((service) => (
                    <li
                        key={service.id}
                        className="font-outfit tracking-wide text-body-muted">
                        {getServiceDisplayName(service.name)}
                    </li>
                ))}
            </ul>
        </div>
    )
}
