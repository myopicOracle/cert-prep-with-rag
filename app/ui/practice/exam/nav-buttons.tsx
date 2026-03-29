'use client'

import Button from '@/app/ui/practice/button'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

interface NavButtonProps {
    total: number
}

export default function NavButtons({ total }: NavButtonProps) {
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
        // NTD: function wrapper uncessary, left to make painfully obvious for now
        navigate(current - 1)
    }

    function handleNextCard() {
        // NTD: function wrapper uncessary, left to make painfully obvious for now
        navigate(current + 1)
    }

    return (
        <div className="flex w-full items-center justify-between px-12">
            <Button name="Prev" onClick={handlePrevCard} condition={current <= 1} />
            <Button name="Next" onClick={handleNextCard} condition={current >= total} />
        </div>
    )
}
