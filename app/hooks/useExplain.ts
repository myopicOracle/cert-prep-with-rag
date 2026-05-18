import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { toast } from 'sonner'
import { useEffect } from 'react'

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

    function clearThread() {
        setMessages([])
    }

    async function explain(prompt: string) {
        setMessages([])
        await sendMessage({ text: prompt })
    }

    return {
        messages,
        status,
        explain,
        clearThread,
        sendMessage,
        stop,
    }
}
