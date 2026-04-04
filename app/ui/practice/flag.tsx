'use client'

import { useState } from 'react'
import { FlagIcon as FlagIconOutline } from '@heroicons/react/24/outline'
import { FlagIcon as FlagIconSolid } from '@heroicons/react/24/solid'

export default function Flag() {
    const [isFlagged, setIsFlagged] = useState<boolean>(false)

    function handleClick() {
        setIsFlagged(!isFlagged)
    }

    return (
        <div>
            <button onClick={handleClick} className="cursor-pointer">
                {isFlagged ? (
                    <FlagIconSolid className="w-6" />
                ) : (
                    <FlagIconOutline className="w-6" />
                )}
            </button>
        </div>
    )
}
