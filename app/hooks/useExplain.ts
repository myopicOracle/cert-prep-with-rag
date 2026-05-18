import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { toast } from 'sonner'
import { useCallback, useEffect } from 'react'

export default function useExplain() {
    const { messages, sendMessage, status, error, setMessages, stop } = useChat(
        {
            transport: new DefaultChatTransport({
                api: '/api/explain',
            }),
        },
    )

    useEffect(() => {
        if (error) {
            toast.error(
                "We couldn't generate an explanation. Please try again in a few seconds.",
            )
        }
    }, [error])

    const clearThread = useCallback(() => {
        setMessages([])
    }, [setMessages])

    const explain = useCallback(
        async (prompt: string) => {
            setMessages([])
            await sendMessage({ text: prompt })
        },
        [setMessages, sendMessage],
    )

    return {
        messages,
        status,
        explain,
        clearThread,
        sendMessage,
        stop,
    }
}
