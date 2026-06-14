import ReactMarkdown from 'react-markdown'
import { ChatMessageProps } from '@/app/types/components'

export default function ChatMessage({
    role,
    content,
    citations,
}: ChatMessageProps) {
    const label = role === 'user' ? 'You' : 'Atlas Agent'
    const roleAlign =
        role === 'user'
            ? 'self-end items-end max-w-[85%] sm:max-w-[70%]'
            : 'self-start items-start max-w-[92%] sm:max-w-[78%]'
    const roleStyle =
        role === 'user'
            ? 'bg-button text-button-text [--tw-prose-body:var(--color-button-text)] [--tw-prose-bold:var(--color-button-text)] [--tw-prose-bullets:var(--color-button-text)]'
            : 'bg-message text-body [--tw-prose-body:var(--color-body)] [--tw-prose-bold:var(--color-body)] [--tw-prose-bullets:var(--color-body)]'
    const sharedStyle =
        'prose prose-sm max-w-full rounded-lg px-4 py-3 text-sm shadow-sm prose-p:my-1 prose-ul:my-2 prose-ol:my-2 prose-li:my-0'

    return (
        <div className={`flex flex-col ${roleAlign}`}>
            <span className="mb-1 px-2 text-xs text-brand-white/60">
                {label}
            </span>
            <div className={`${sharedStyle} ${roleStyle}`}>
                <ReactMarkdown>{content ?? ''}</ReactMarkdown>
                {citations && citations.length > 0 && (
                    <details className="mt-4">
                        <summary className="cursor-pointer font-semibold">
                            Links to AWS Docs
                        </summary>
                        <div className="mt-2">
                            <ReactMarkdown>
                                {citations
                                    .map((citation, index) => {
                                        return `${index + 1}. [${citation.breadcrumb}](${citation.sourceURL})`
                                    })
                                    .join('\n')}
                            </ReactMarkdown>
                        </div>
                    </details>
                )}
            </div>
        </div>
    )
}
