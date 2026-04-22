'use client'

import { useState } from 'react'
import { lusitana } from '@/app/ui/fonts'
import ChatInput from '@/app/ui/practice/study/chat-input'

export default function Page() {
    const [assistantResponse, setAssistantResponse] = useState<string | null>(null)

    function fetchResponse(query: string) {
        console.log('Page Component - query: ')
        setAssistantResponse(query)
    }

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>Study Mode</h1>
            <p className="mt-2 text-gray-500">Get answers from real AWS documentation.</p>
            <div className="mt-4">
                {assistantResponse}
                <ChatInput onSubmit={fetchResponse} />
            </div>
        </div>
    )
}
