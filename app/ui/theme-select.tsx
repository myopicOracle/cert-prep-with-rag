'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

function setTheme(theme: 'light' | 'dark') {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
}

export default function ThemeSelect() {
    return (
        <div className="flex items-center gap-2">
            <button
                type="button"
                onClick={() => setTheme('light')}
                className="rounded-sm bg-button px-3 py-2 text-button-text opacity-100 dark:opacity-40">
                <SunIcon className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => setTheme('dark')}
                className="rounded-sm bg-button px-3 py-2 text-button-text opacity-40 dark:opacity-100">
                <MoonIcon className="h-4 w-4" />
            </button>
        </div>
    )
}
