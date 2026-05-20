'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

function setTheme(theme: 'light' | 'dark') {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
}

export default function ThemeSelect() {
    return (
        <div className="flex items-center gap-1 rounded-full bg-button p-1">
            <button
                type="button"
                onClick={() => setTheme('light')}
                className="rounded-full p-2 text-button-text transition-colors bg-header dark:bg-transparent">
                <SunIcon className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => setTheme('dark')}
                className="rounded-full p-2 text-button-text transition-colors bg-transparent dark:bg-neutral">
                <MoonIcon className="h-4 w-4" />
            </button>
        </div>
    )
}
