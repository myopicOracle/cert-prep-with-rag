import ReactMarkdown from 'react-markdown'
import { ChatMessageProps } from '@/app/types/components'

export default function ChatMessage({
    role,
    content,
    citations,
}: ChatMessageProps) {
    const userStyle = 'self-end bg-blue-300'
    const assistantStyle = 'self-start bg-gray-300'
    const sharedStyle = 'w-full max-w-[66%] m-2 p-4 rounded-lg prose prose-sm'

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
