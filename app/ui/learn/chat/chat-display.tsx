import { useRef, useEffect } from 'react'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
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
        <div className="flex min-h-full flex-col gap-4">
            {chatHistory.length === 0 ? (
                <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center text-brand-white/60">
                    <ChatBubbleLeftRightIcon
                        aria-hidden="true"
                        className="h-10 w-10"
                    />
                    <p className="text-sm">Ask a question to get started.</p>
                </div>
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
            {isLoading && chatHistory.length > 0 && (
                <div className="self-start rounded-lg bg-message px-4 py-3 text-sm text-body shadow-sm">
                    Thinking...
                </div>
            )}
            <div ref={scrollRef} aria-hidden="true"></div>
        </div>
    )
}
