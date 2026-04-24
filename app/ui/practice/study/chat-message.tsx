import ReactMarkdown from 'react-markdown'
import { ChatMessageProps } from '@/app/types/components'

export default function ChatMessage({
    role,
    content,
    citations,
}: ChatMessageProps) {
    const userStyle = 'max-w-[66%] self-end bg-blue-200 border-blue-500'
    const assistantStyle = 'max-w-[75%] self-start bg-gray-200 border-gray-500'
    const sharedStyle =
        'w-full m-2 px-4 py-2 rounded-lg border-2 shadow-sm prose prose-sm'

    return (
        <div
            className={`${sharedStyle} ${
                role === 'user' ? userStyle : assistantStyle
            }`}>
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
    )
}
