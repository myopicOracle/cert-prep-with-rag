import type { Metadata } from 'next'
import { inter } from '@/app/ui/fonts'
import Header from '@/app/ui/header'
import './globals.css'

export const metadata: Metadata = {
    title: 'CloudIQ AWS Prep',
    description: 'Learn AWS and pass certification exams with flying colors.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full">
            <body
                className={`${inter.className} antialiased h-full flex flex-col`}>
                <Header />
                <main className="flex-1">{children}</main>
            </body>
        </html>
    )
}
