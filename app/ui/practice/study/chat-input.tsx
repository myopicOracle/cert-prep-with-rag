'use client'

import { useState } from 'react'

export default function ChatInput() {
    const [input, setInput] = useState('')

    function handleInput(e: any) {
        setInput(e.target.value)
    }

    function submitInput() {
        const cleanInput = input.trim()
        if (cleanInput === '') {
            return
        }
        console.log('Submitted user query: ', cleanInput)
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
        <div>
            <p>You asked: {input}</p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <textarea
                    value={input}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a question about AWS..."
                    rows={3}
                />
                <button type="submit">Ask</button>
            </form>
        </div>
    )
}
