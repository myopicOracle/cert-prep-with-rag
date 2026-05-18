'use client'

import { useState } from 'react'

import useExplain from '@/app/hooks/useExplain'
import Drawer from '@/app/ui/practice/exam/drawer'

export default function ExplainDebug() {
    const [isOpen, setIsOpen] = useState(false)
    const { messages, status, explain, sendMessage } = useExplain()

    async function handleClick() {
        await explain('In one sentence, what is Amazon S3?')
        setIsOpen(true)
    }

    async function handleSendFollowUp(text: string) {
        await sendMessage({ text })
    }

    return (
        <>
            <button
                type="button"
                onClick={handleClick}
                className="fixed bottom-4 right-4 z-30 rounded bg-purple-500 px-4 py-2 text-sm text-white">
                Debug: open explain panel
            </button>
            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                messages={messages}
                status={status}
                onSendFollowUp={handleSendFollowUp}
            />
        </>
    )
}
