import ReactMarkdown from 'react-markdown'
import { ChatMessageProps } from '@/app/types/components'

export default function ChatMessage({
    role,
    content,
    citations,
}: ChatMessageProps) {
    const label = role === 'user' ? 'You' : 'Monsieur Atlas'
    const roleAlign =
        role === 'user'
            ? 'self-end items-end w-full max-w-[66%]'
            : 'self-start items-start w-full max-w-[75%]'
    const roleStyle =
        role === 'user'
            ? 'bg-button/20 border-button' //
            : 'bg-card border-border'
    const sharedStyle =
        'w-full m-2 px-4 py-2 rounded-lg border shadow-sm prose prose-sm text-[0.8125rem]'

    return (
        <div className={`flex flex-col ${roleAlign}`}>
            <span className="text-xs text-body-muted mb-1 px-2">{label}</span>
            <div className={`${sharedStyle} ${roleStyle}`}>
                <ReactMarkdown>{content}</ReactMarkdown>
                {citations && citations.length > 0 && (
                    <details className="mt-4">
                        <summary className="cursor-pointer font-semibold">
                            Links to AWS Docs
                        </summary>
                        <div className="mt-2">
                            <ReactMarkdown>
                                {citations
                                    .map((citation: any, index: number) => {
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
