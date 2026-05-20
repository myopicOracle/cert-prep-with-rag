import type { Metadata, Viewport } from 'next'
import { inter } from '@/app/ui/fonts'
import './globals.css'

import Header from '@/app/ui/header'
import Footer from '@/app/ui/footer'

export const metadata: Metadata = {
    title: 'Praevisio Atals',
    description: 'Learn AWS and pass certification exams with flying colors.',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html:
                    `document.documentElement.dataset.theme =
                        localStorage.getItem('theme') ||
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')`
                }} />
            </head>
            <body
                className={`${inter.className} antialiased h-full flex flex-col`}>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
