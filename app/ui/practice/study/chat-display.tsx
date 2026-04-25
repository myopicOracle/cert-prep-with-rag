import ChatMessage from '@/app/ui/practice/study/chat-message'
import { ChatDisplayProps } from '@/app/types/components'

export default function ChatDisplay({ chatHistory }: ChatDisplayProps) {
    return (
        <>
            {chatHistory.length === 0 ? (
                <p className="text-center text-sm text-gray-400 mt-12">
                    Ask a question get started.
                </p>
            ) : (
                chatHistory.map((message, index) => {
                    return (
                        <ChatMessage
                            key={index}
                            role={message.role}
                            content={message.content}
                            citations={message.citations}
                        />
                    )
                })
            )}
        </>
    )
}
