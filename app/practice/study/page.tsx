'use client'

import { useState } from 'react'
import { lusitana } from '@/app/ui/fonts'
import ChatInput from '@/app/ui/practice/study/chat-input'
import ChatDisplay from '@/app/ui/practice/study/chat-display'
import ChatMessage from '@/app/ui/practice/study/chat-message'

export default function Page() {
    const [assistantResponse, setAssistantResponse] = useState<string | null>(null)

    async function fetchResponse(userInput: string) {
        const response = await fetch('/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: userInput }),
        })

        const data = await response.json()
        // console.log('Response body: ', data)

        const responseText = data.assistantResponse
        const citationText = data.citations
            .map((citation: any, index: number) => {
                const link = citation.sourceURL
                const provenence = citation.breadcrumb
                return `${index + 1}. [${provenence}](${link})`
            })
            .join('\n')

        setAssistantResponse(`\n\n${responseText}\n\n---\n\n${citationText}\n\n`)
    }

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>Study Mode</h1>
            <p className="mt-2 text-gray-500">Get answers from real AWS documentation.</p>
            <div className="mt-4">
                {/* {assistantResponse && (
                    <ChatMessage role={'assistant'} content={assistantResponse} />
                )} */}
                <ChatDisplay />
                <ChatInput onSubmit={fetchResponse} />
            </div>
        </div>
    )
}
