import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SmoothScroll from '@/components/SmoothScroll'
import Cursor from '@/components/Cursor'
import Preloader from '@/components/Preloader'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
})

export const metadata: Metadata = {
  title: 'Arfa Abdul Nasir — CS @ NUST · AI/ML Engineer',
  description:
    'I build intelligent systems that actually ship — from Roman Urdu hate-speech detection to RAG assistants and network optimization. Final-year CS student at NUST.',
  keywords: ['Arfa Abdul Nasir', 'Portfolio', 'NUST', 'Machine Learning', 'Deep Learning', 'AI Engineer', 'Software Engineer'],
  creator: 'Arfa Abdul Nasir',
  openGraph: {
    title: 'Arfa Abdul Nasir — CS @ NUST · AI/ML Engineer',
    description: 'Building intelligent systems that ship. ML, RAG, and full-stack projects.',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0c0a08',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${fraunces.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-canvas text-ink">
        <div className="grain" aria-hidden />
        <Preloader />
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
