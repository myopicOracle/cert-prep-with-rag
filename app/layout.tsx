import type { Metadata } from 'next'
import { inter } from '@/app/ui/fonts'
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
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    )
}
