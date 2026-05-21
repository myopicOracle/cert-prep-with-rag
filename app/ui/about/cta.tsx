export default function CTA() {
    return (
        <section className="relative isolate overflow-hidden bg-card px-6 py-16 sm:rounded-3xl sm:px-16 md:py-24 lg:px-24 lg:py-32 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:sm:rounded-3xl">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-balance text-heading sm:text-4xl">
                        Want to contribute?
                    </h2>
                    <p className="mt-6 text-lg/8 text-pretty text-body-muted">
                        If you want to give back to the project, you can do so
                        by adding to the curriculum, opening a pull request, or
                        emailing us with questions and feedback.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="https://github.com/myopicOracle/cert-prep-with-rag"
                            className="rounded-md bg-button px-3.5 py-2.5 text-sm font-semibold text-button-text transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
                            Contribute
                        </a>
                        <a
                            href="mailto:gary@praevisiolabs.com"
                            className="text-sm/6 font-semibold text-link transition-colors hover:text-link-hover">
                            Email us <span aria-hidden="true">→</span>
                        </a>
                    </div>
            </div>
        </section>
    )
}
