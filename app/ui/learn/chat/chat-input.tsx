'use client'

import { useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { ChatInputProps } from '@/app/types/components'

export default function ChatInput({ isLoading, onSubmit }: ChatInputProps) {
    const [input, setInput] = useState('')

    function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setInput(e.target.value)
    }

    function submitInput() {
        const cleanInput = input.trim()
        if (cleanInput === '') {
            return
        }
        onSubmit(cleanInput)
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
            <form
                className="flex flex-col gap-3 sm:flex-row sm:items-end"
                onSubmit={handleSubmit}>
                <label htmlFor="chat-question" className="sr-only">
                    Ask a question
                </label>
                <textarea
                    id="chat-question"
                    value={input}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a question about AWS..."
                    disabled={isLoading}
                    rows={2}
                    className="min-h-24 flex-1 resize-none rounded-md border border-border bg-input px-3 py-3 text-sm text-body shadow-inner placeholder:text-body-muted focus:border-transparent focus:outline-none focus:ring-2 focus:ring-focus disabled:opacity-70"
                />
                <button
                    type="submit"
                    aria-label={
                        isLoading ? 'Waiting for response' : 'Ask question'
                    }
                    title={isLoading ? 'Waiting for response' : 'Ask question'}
                    disabled={input.trim() === '' || isLoading}
                    className="inline-flex h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-button px-5 text-sm font-semibold text-button-text shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-2 focus:ring-offset-brand-navy disabled:cursor-not-allowed disabled:opacity-50 sm:w-12 sm:px-0">
                    <PaperAirplaneIcon aria-hidden="true" className="h-5 w-5" />
                    <span className="sm:sr-only">
                        {isLoading ? 'Noodling...' : 'Ask'}
                    </span>
                </button>
            </form>
        </>
    )
}
