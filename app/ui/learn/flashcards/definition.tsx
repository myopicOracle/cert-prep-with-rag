export default function Definition({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto rounded-2xl border border-border bg-card p-8 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <span className="mb-4 text-xs font-outfit uppercase tracking-widest text-body-muted">
                Definition
            </span>
            <p className="font-outfit text-base leading-relaxed text-body md:text-lg">
                {children}
            </p>
        </div>
    )
}
