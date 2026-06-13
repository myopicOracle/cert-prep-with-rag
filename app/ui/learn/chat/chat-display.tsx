import { useRef, useEffect } from 'react'
import { ChatDisplayProps } from '@/app/types/components'
import ChatMessage from '@/app/ui/learn/chat/chat-message'

export default function ChatDisplay({
    chatHistory,
    isLoading,
}: ChatDisplayProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }, [chatHistory, isLoading])

    return (
        <>
            {chatHistory.length === 0 ? (
                <p className="text-center text-sm text-body-muted mt-12">
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
            <div ref={scrollRef}></div>
        </>
    )
}
