export default function Concept({ children }: { children: React.ReactNode }) {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center [backface-visibility:hidden]">
            <span className="mb-4 text-xs font-outfit uppercase tracking-widest text-body-muted">
                Term
            </span>
            <p className="text-2xl font-sora tracking-tight text-heading md:text-3xl">
                {children}
            </p>
        </div>
    )
}
