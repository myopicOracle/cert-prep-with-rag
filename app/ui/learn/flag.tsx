'use client'

import { FlagIcon as FlagIconOutline } from '@heroicons/react/24/outline'
import { FlagIcon as FlagIconSolid } from '@heroicons/react/24/solid'
import { FlagProps } from '@/app/types/components'

export default function Flag({ isFlagged, onFlag }: FlagProps) {
    return (
        // prettier-ignore
        <div>
            <button onClick={onFlag} className="cursor-pointer">
                {isFlagged ? (
                    <FlagIconSolid className="size-4 md:size-6" />
                ) : (
                    <FlagIconOutline className="size-4 md:size-6" />
                )}
            </button>
        </div>
    )
}
