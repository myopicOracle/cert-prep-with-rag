'use client'

import { lusitana } from '@/app/ui/fonts'
import useChat from '@/app/hooks/useChat'
import ChatInput from '@/app/ui/practice/study/chat-input'
import ChatDisplay from '@/app/ui/practice/study/chat-display'

export default function Page() {
    const { chatHistory, isLoading, fetchResponse } = useChat()

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>Study Mode</h1>
            <p className="mt-2 text-gray-500">
                Get answers from real AWS documentation.
            </p>
            <div className="mt-4">
                <ChatDisplay chatHistory={chatHistory} />
                <ChatInput isLoading={isLoading} onSubmit={fetchResponse} />
            </div>
        </div>
    )
}
