'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

function toggleTheme() {
    const next =
        document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
}

export default function ThemeSelect() {
    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-1 rounded-full bg-button px-1.5 py-1 cursor-pointer">
            <span className="rounded-full p-2 text-button-text transition-colors bg-header dark:bg-transparent">
                <SunIcon className="h-4 w-4" />
            </span>
            <span className="rounded-full p-2 text-button-text transition-colors bg-transparent dark:bg-neutral">
                <MoonIcon className="h-4 w-4" />
            </span>
        </button>
    )
}
