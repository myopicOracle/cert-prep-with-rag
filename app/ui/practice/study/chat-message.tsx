import ReactMarkdown from 'react-markdown'
import { ChatMessageProps } from '@/app/types/components'

export default function ChatMessage({ role, content }: ChatMessageProps) {
    const userStyle = 'self-start bg-blue-300'
    const assistantStyle = 'self-end bg-gray-300'
    const sharedStyle = 'w-full max-w-[66%] m-2 p-4 rounded-lg prose prose-sm'

    return (
        <div className={`${role === 'user' ? userStyle : assistantStyle} ${sharedStyle}`}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}
