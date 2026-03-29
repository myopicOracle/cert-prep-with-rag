'use client'

import Button from '@/app/ui/practice/button'

export default function NavButtons() {
    function handlePrevCard() {}
    function handleNextCard() {}
    return (
        <div className="flex w-full items-center justify-between px-12">
            <Button name="Prev" onClick={handlePrevCard} />
            <Button name="Next" onClick={handleNextCard} />
        </div>
    )
}
