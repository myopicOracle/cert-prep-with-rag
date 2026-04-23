import ChatMessage from '@/app/ui/practice/study/chat-message'
import { ChatDisplayProps } from '@/app/types/components'

export default function ChatDisplay({ chatHistory }: ChatDisplayProps) {
    return (
        <div className="w-full flex flex-col mb-4">
            {chatHistory.map((message, index) => {
                return (
                    <ChatMessage
                        key={index}
                        role={message.role}
                        content={message.content}
                        citations={message.citations}
                    />
                )
            })}
        </div>
    )
}
