'use client'

import { lusitana } from '@/app/ui/fonts'
import ChatInput from '@/app/ui/practice/study/chat-input'

export default function Page() {
    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>Study Mode</h1>
            <p className="mt-2 text-gray-500">Get answers from real AWS documentation.</p>
            <div className="mt-4">
                <ChatInput />
            </div>
        </div>
    )
}
