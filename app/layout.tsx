import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Donali Party | Decoração de eventos',
  description: 'Donali Party cria decorações personalizadas e celebrações inesquecíveis em Lowell, Massachusetts e região.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/donali-party-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/donali-party-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/donali-party-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
