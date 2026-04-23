import ChatMessage from '@/app/ui/practice/study/chat-message'
import { ChatMessageProps } from '@/app/types/components'

const testHistory: ChatMessageProps[] = [
    { role: 'user', content: 'lorem' },
    { role: 'assistant', content: 'ipsum' },
    { role: 'user', content: 'dolor' },
    { role: 'assistant', content: 'thus' },
    { role: 'user', content: 'spake' },
    { role: 'assistant', content: 'zarathustra' },
]

export default function ChatDisplay() {
    return (
        <div className="w-full flex flex-col mb-4">
            {testHistory.map((message) => {
                return <ChatMessage role={message.role} content={message.content} />
            })}
        </div>
    )
}
