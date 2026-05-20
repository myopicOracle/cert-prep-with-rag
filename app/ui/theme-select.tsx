'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

function setTheme(theme: 'light' | 'dark') {
    document.documentElement.dataset.theme = theme
}

export default function ThemeSelect() {
    return (
        <div className="flex items-center gap-2">
            <button
                type="button"
                onClick={() => setTheme('light')}
                className="rounded-sm bg-button px-3 py-2 text-button-text">
                <SunIcon className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => setTheme('dark')}
                className="rounded-sm bg-button px-3 py-2 text-button-text">
                <MoonIcon className="h-4 w-4" />
            </button>
        </div>
    )
}
