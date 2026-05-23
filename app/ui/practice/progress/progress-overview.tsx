export default function ProgressOverview() {
    return (
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm col-span-1 sm:col-span-2 lg:col-span-4 min-h-32">
            <h2 className="text-lg font-sora tracking-tight text-heading">
                Overall Progress
            </h2>
            <p className="mt-2 text-sm font-outfit tracking-wide text-body-muted">
                You must be signed in to view progress.
            </p>
        </div>
    )
}
