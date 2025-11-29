import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'Adarsh G - Portfolio',
    description: 'Professional portfolio of Adarsh G - Computer Science Engineer specializing in Full Stack Development, Machine Learning, and Deep Learning',
    keywords: ['Adarsh G', 'Portfolio', 'Computer Science', 'Full Stack Developer', 'Machine Learning', 'Deep Learning', 'Verizon'],
    authors: [{ name: 'Adarsh G' }],
    openGraph: {
        title: 'Adarsh G - Portfolio',
        description: 'Professional portfolio showcasing projects and experience',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
