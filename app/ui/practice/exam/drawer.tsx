// note: the original boilerplate for this component was copied from 'https://tailwindcss.com/plus/ui-blocks/application-ui/overlays/drawers'
'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
    TransitionChild,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import ReactMarkdown from 'react-markdown'
import type { DrawerProps } from '@/app/types/components'

export default function Drawer({
    isOpen,
    onClose,
    messages,
    status,
    onSendFollowUp,
}: DrawerProps) {
    const [input, setInput] = useState('')

    const isStreaming = status === 'streaming' || status === 'submitted'

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        const trimmed = input.trim()
        if (!trimmed || isStreaming) {
            return
        }
        setInput('')
        await onSendFollowUp(trimmed)
    }

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-900/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                        <DialogPanel
                            transition
                            className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
                            <TransitionChild>
                                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                                    <button
                                        type="button"
                                        onClick={() => onClose()}
                                        className="relative rounded-md text-gray-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                        <span className="absolute -inset-2.5" />
                                        <span className="sr-only">
                                            Close panel
                                        </span>
                                        <XMarkIcon
                                            aria-hidden="true"
                                            className="size-6"
                                        />
                                    </button>
                                </div>
                            </TransitionChild>
                            <div className="relative flex h-full flex-col overflow-hidden bg-white py-6 shadow-xl">
                                <div className="pb-6 px-4 sm:px-6 border-b border-gray-200">
                                    <DialogTitle className="text-base font-semibold text-gray-900">
                                        AI Explanation
                                    </DialogTitle>
                                </div>
                                <div className="py-4 relative flex-1 overflow-y-auto px-4 sm:px-6 space-y-4">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={
                                                message.role === 'user'
                                                    ? 'text-right'
                                                    : 'text-left'
                                            }>
                                            <div
                                                className={`inline-block max-w-[90%] rounded-lg px-3 py-2 text-sm text-left ${
                                                    message.role === 'user'
                                                        ? 'bg-blue-500 text-white'
                                                        : 'bg-gray-100 text-gray-900'
                                                }`}>
                                                <div
                                                    className={
                                                        message.role ===
                                                        'assistant'
                                                            ? 'prose prose-sm max-w-none prose-p:my-1'
                                                            : ''
                                                    }>
                                                    {message.parts.map(
                                                        (part, index) =>
                                                            part.type ===
                                                            'text' ? (
                                                                <ReactMarkdown
                                                                    key={index}>
                                                                    {part.text}
                                                                </ReactMarkdown>
                                                            ) : null,
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {status === 'submitted' && (
                                        <p className="text-sm text-gray-500 italic">
                                            Thinking…
                                        </p>
                                    )}
                                </div>
                                <form
                                    onSubmit={handleSubmit}
                                    className="pt-6 border-t border-gray-200 px-4 sm:px-6 pt-4 flex gap-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) =>
                                            setInput(e.target.value)
                                        }
                                        placeholder="Ask a follow-up question…"
                                        disabled={isStreaming}
                                        className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm disabled:bg-gray-100"
                                    />
                                    <button
                                        type="submit"
                                        disabled={
                                            isStreaming || input.trim() === ''
                                        }
                                        className="rounded bg-blue-500 px-4 py-2 text-sm text-white disabled:opacity-50">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
