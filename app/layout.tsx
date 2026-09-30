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
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2030%2C%202026%2C%2011_55_57%20AM-GeLW3SBvbFWYJktdJf6jjJ8SyWhl9T.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2030%2C%202026%2C%2011_55_57%20AM-GeLW3SBvbFWYJktdJf6jjJ8SyWhl9T.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2030%2C%202026%2C%2011_55_57%20AM-GeLW3SBvbFWYJktdJf6jjJ8SyWhl9T.png',
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
