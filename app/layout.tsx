import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'João Gomes | Frontend Software Engineer',
  description: "João Gomes' portfolio - Frontend Software Engineer specialized in Vue.js, React, TypeScript and modern web development. Based in Lisbon, Portugal.",
  keywords: ['frontend', 'software engineer', 'Vue.js', 'React', 'TypeScript', 'Lisbon', 'Portugal', 'João Gomes'],
  authors: [{ name: 'João Gomes' }],
  openGraph: {
    title: 'João Gomes | Frontend Software Engineer',
    description: 'Frontend Software Engineer specialized in creating modern, high-performance digital experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'João Gomes | Frontend Software Engineer',
    description: 'Frontend Software Engineer specialized in creating modern, high-performance digital experiences.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0f14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-US" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
