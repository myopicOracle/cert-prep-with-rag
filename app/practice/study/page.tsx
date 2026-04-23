'use client'

import { useState } from 'react'
import { lusitana } from '@/app/ui/fonts'
import { ChatMessageProps } from '@/app/types/components'
import ChatInput from '@/app/ui/practice/study/chat-input'
import ChatDisplay from '@/app/ui/practice/study/chat-display'

export default function Page() {
    const [chatHistory, setChatHistory] = useState<ChatMessageProps[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    function pushMessage(message: ChatMessageProps) {
        setChatHistory((prev) => [
            ...prev,
            message, //
        ])
    }

    async function fetchResponse(userInput: string) {
        setIsLoading(true)
        setError(null)

        const userQuery: ChatMessageProps = {
            role: 'user',
            content: userInput,
        }
        pushMessage(userQuery)

        try {
            const response = await fetch('/api/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: userInput }),
            })

            if (response.status === 429) {
                throw new Error('RATE_LIMIT')
            }

            if (!response.ok) {
                throw new Error('SERVER_ERROR')
            }

            const data = await response.json()
            // console.log('Response body: ', data)

            const assistantResponse: ChatMessageProps = {
                role: 'assistant',
                content: data.assistantResponse,
                citations: data.citations,
            }
            pushMessage(assistantResponse)
        } catch (e: any) {
            const message = (e as Error).message

            if (message === 'RATE_LIMIT') {
                setError(
                    "You're sending too many messages. Please wait and try again.",
                )
            } else {
                setError(
                    "We're having trouble reaching the server. Please try again in a few seconds.",
                )
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>Study Mode</h1>
            <p className="mt-2 text-gray-500">
                Get answers from real AWS documentation.
            </p>
            <div className="mt-4">
                {error && (
                    <div className="mb-4 rounded-md border border-red-400 bg-red-50 p-4 text-sm text-red-700">
                        {error}
                    </div>
                )}
                <ChatDisplay chatHistory={chatHistory} />
                <ChatInput isLoading={isLoading} onSubmit={fetchResponse} />
            </div>
        </div>
    )
}
