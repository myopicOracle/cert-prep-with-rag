'use client'

import { lusitana } from '@/app/ui/fonts'

export default function Page() {
    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>Study Mode</h1>
            <p>Get answers from real AWS documentation.</p>
        </div>
    )
}
