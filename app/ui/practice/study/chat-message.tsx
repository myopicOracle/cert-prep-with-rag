import ReactMarkdown from 'react-markdown'
import { ChatMessageProps } from '@/app/types/components'

export default function ChatMessage({ role, content }: ChatMessageProps) {
    return (
        <div>
            {content && (
                <div className="prose prose-sm mb-4">
                    <ReactMarkdown>{`*${role}*: ${content}`}</ReactMarkdown>
                </div>
            )}
        </div>
    )
}
