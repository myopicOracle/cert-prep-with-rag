import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'

import { inter } from '@/app/ui/fonts'
import './globals.css'

import Header from '@/app/ui/header'
import Footer from '@/app/ui/footer'

export const metadata: Metadata = {
    title: 'Cloud Atlas',
    description: 'Learn AWS and pass certification exams with flying colors.',
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
        ],
    },
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
                <script
                    dangerouslySetInnerHTML={{
                        __html: `document.documentElement.dataset.theme =
                        localStorage.getItem('theme') || 'dark'`,
                    }}
                />
            </head>
            <body
                className={`${inter.className} antialiased h-full flex flex-col`}>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
                <Analytics />
            </body>
        </html>
    )
}
