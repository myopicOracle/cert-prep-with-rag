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
        // NTD: replace with inline anon function, left to make painfully obvious for now
        navigate(current - 1)
    }

    function handleNextCard() {
        // NTD: replace with inline anon function, left to make painfully obvious for now
        navigate(current + 1)
    }

    return (
        <div className="flex w-full items-center justify-between px-12">
            <Button
                name="Prev"
                buttonStyle={`"rounded-sm text-sm font-semibold px-8 py-3 bg-blue-100 shadow-md hover:bg-blue-300 focus:outline-none"`}
                onClick={handlePrevCard}
                isDisabled={current <= 1}
            />
            <Button
                name="Next"
                buttonStyle={`"rounded-sm text-sm font-semibold px-8 py-3 bg-blue-100 shadow-md hover:bg-blue-300 focus:outline-none"`}
                onClick={handleNextCard}
                isDisabled={current >= total}
            />
        </div>
    )
}
