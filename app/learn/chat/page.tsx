'use client'

import useChat from '@/app/hooks/useChat'
import ChatInput from '@/app/ui/learn/chat/chat-input'
import ChatDisplay from '@/app/ui/learn/chat/chat-display'

export default function Page() {
    const { chatHistory, isLoading, fetchResponse } = useChat()

    return (
        <div className="flex w-full flex-col gap-4">
            <div className="flex-none">
                <h1
                    className={`font-sora tracking-tight text-contrast text-3xl`}>
                    Docs Agent
                </h1>
                <p className="mt-2 font-outfit text-sm tracking-wide text-contrast">
                    Get answers directly from AWS documentation.
                </p>
            </div>
            <section className="mx-auto flex w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-border bg-brand-navy shadow-lg">
                <div className="h-[55dvh] overflow-y-auto px-3 py-4 sm:px-5 sm:py-6">
                    <ChatDisplay
                        chatHistory={chatHistory}
                        isLoading={isLoading}
                    />
                </div>
                <div className="flex-none border-t border-border/60 bg-brand-navy/95 p-3 sm:p-4">
                    <ChatInput isLoading={isLoading} onSubmit={fetchResponse} />
                </div>
            </section>
        </div>
    )
}
