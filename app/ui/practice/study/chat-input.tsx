'use client'

import Button from '@/app/ui/practice/button'

export default function ChatInput() {
    return (
        <form className="flex flex-col gap-4">
            <textarea placeholder="Ask a question about AWS..." rows={3} />
            <Button
                name="Ask"
                buttonStyle="rounded-sm text-sm font-semibold px-8 py-3 bg-blue-100 shadow-md hover:bg-blue-300 focus:outline-none"
                onClick={() => {}}
                isDisabled={false}
            />
        </form>
    )
}
