'use client'

import { lusitana } from '@/app/ui/fonts'

export default function Page() {
    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}>Study Mode</h1>
            <p className="mt-2 text-gray-500">Get answers from real AWS documentation.</p>
        </div>
    )
}
