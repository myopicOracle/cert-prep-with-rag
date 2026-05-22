'use client'

import { lusitana } from '@/app/ui/fonts'
import useChat from '@/app/hooks/useChat'
import ChatInput from '@/app/ui/study/chat-input'
import ChatDisplay from '@/app/ui/study/chat-display'

export default function Page() {
    const { chatHistory, isLoading, fetchResponse } = useChat()

    return (
        <div className="flex flex-col w-full h-full gap-2 sm:gap-4">
            <div className="flex-none">
                <h1 className={`font-sora tracking-tight text-2xl`}>
                    Study Mode
                </h1>
            </div>
            <div className="flex-none">
                <p className="text-sm text-body-muted">
                    Get answers directly from AWS documentation.
                </p>
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col max-w-2xl w-full mx-auto rounded-lg border-2 border-border p-2 sm:p-4">
                <ChatDisplay chatHistory={chatHistory} />
            </div>
            <div className="flex-none">
                <div className="max-w-lg mx-auto border-t border-border mx-4" />
            </div>
            <div className="flex-none max-w-2xl w-full mx-auto rounded-lg border-2 border-border p-2 sm:p-4">
                <ChatInput isLoading={isLoading} onSubmit={fetchResponse} />
            </div>
        </div>
    )
}
