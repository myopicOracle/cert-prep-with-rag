'use client'

import { lusitana } from '@/app/ui/fonts'
import useChat from '@/app/hooks/useChat'
import ChatInput from '@/app/ui/practice/study/chat-input'
import ChatDisplay from '@/app/ui/practice/study/chat-display'

export default function Page() {
    const { chatHistory, isLoading, fetchResponse } = useChat()

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex-none">
                <h1 className={`${lusitana.className} text-2xl`}>Study Mode</h1>
            </div>
            <div className="flex-none">
                <p className="mt-2 text-sm text-gray-500">
                    Get answers directly from AWS documentation.
                </p>
            </div>
            <div className="flex-1 overflow-y-auto mt-4">
                <ChatDisplay chatHistory={chatHistory} />
            </div>
            <div className="flex-none">
                <ChatInput isLoading={isLoading} onSubmit={fetchResponse} />
            </div>
        </div>
    )
}
