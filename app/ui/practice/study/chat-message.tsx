import ReactMarkdown from 'react-markdown'
import { ChatMessageProps } from '@/app/types/components'

export default function ChatMessage({ role, content }: ChatMessageProps) {
    return (
        <div className="flex mb-4">
            {role === 'user' ? (
                <div className="max-w-[66%] rounded-lg bg-blue-300 prose prose-sm">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            ) : (
                <div className="mr-auto max-w-[66%] rounded-lg bg-gray-300 prose prose-sm">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            )}
        </div>
    )
}
