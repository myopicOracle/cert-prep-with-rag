'use client'

import Button from '@/app/ui/practice/button'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

interface NavButtonProps {
    completed: number
    total: number
    onFinish: () => void
}

export default function NavButtons({ completed, total, onFinish }: NavButtonProps) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const current = Number(searchParams.get('id')) || 1

    function navigate(index: number) {
        const params = new URLSearchParams(searchParams)
        params.set('id', String(index))
        replace(`${pathname}?${params.toString()}`)
    }

    function handlePrevCard() {
        navigate(current - 1)
    }

    function handleNextCard() {
        navigate(current + 1)
    }

    function handleFinish() {
        // onComplete(current)
    }

    return (
        <div className="flex w-full items-center justify-between px-12">
            <Button
                name="Prev"
                buttonStyle="rounded-sm text-sm font-semibold px-8 py-3 bg-blue-100 shadow-md hover:bg-blue-300 focus:outline-none"
                onClick={handlePrevCard}
                isDisabled={current <= 1}
            />
            {current >= total ? (
                <Button
                    name="Finish"
                    buttonStyle="rounded-sm text-sm text-white font-semibold px-8 py-3 bg-blue-500 shadow-md hover:text-black hover:bg-blue-200 focus:outline-visible"
                    onClick={onFinish}
                    isDisabled={false}
                />
            ) : (
                <Button
                    name="Next"
                    buttonStyle="rounded-sm text-sm font-semibold px-8 py-3 bg-blue-100 shadow-md hover:bg-blue-300 focus:outline-none"
                    onClick={handleNextCard}
                    isDisabled={current >= total}
                />
            )}
        </div>
    )
}
