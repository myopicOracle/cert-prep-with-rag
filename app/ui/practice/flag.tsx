'use client'

import { FlagIcon as FlagIconOutline } from '@heroicons/react/24/outline'
import { FlagIcon as FlagIconSolid } from '@heroicons/react/24/solid'

interface FlagProps {
    flagged: boolean
    onFlag: () => void
}

export default function Flag({ flagged, onFlag }: FlagProps) {
    return (
        // prettier-ignore
        <div>
            <button onClick={onFlag} className="cursor-pointer">
                {flagged ? (
                    <FlagIconSolid className="w-6" />
                ) : (
                    <FlagIconOutline className="w-6" />
                )}
            </button>
        </div>
    )
}
