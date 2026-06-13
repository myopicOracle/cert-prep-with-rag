'use client'

import { useState } from 'react'
import { ChatInputProps } from '@/app/types/components'

export default function ChatInput({ isLoading, onSubmit }: ChatInputProps) {
    const [input, setInput] = useState('')

    function handleInput(e: any) {
        setInput(e.target.value)
        // console.log('User typed: ', input)
    }

    function submitInput() {
        const cleanInput = input.trim()
        if (cleanInput === '') {
            return
        }
        onSubmit(cleanInput)
        // console.log('Submitted user query: ', cleanInput)
        setInput('')
    }

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault()
        submitInput()
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            submitInput()
        }
    }

    return (
        <>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <textarea
                    value={input}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a question about AWS..."
                    disabled={isLoading}
                    rows={3}
                    className="w-full rounded-lg border border-border bg-input p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-focus focus:border-transparent"
                />
                <button
                    type="submit"
                    disabled={input.trim() === '' || isLoading}
                    className="mt-2 rounded-sm text-lg text-brand-white font-semibold px-8 py-3 bg-brand-gold shadow-md hover:bg-brand-gold/80 focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50">
                    {isLoading ? 'Noodling...' : 'Ask'}
                </button>
            </form>
        </>
    )
}
