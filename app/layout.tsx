import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GPT Ads Media — ChatGPT Advertising Agency',
  description: 'The first agency built to design, launch, and scale ad campaigns inside ChatGPT and AI conversations.',
  openGraph: {
    title: 'GPT Ads Media',
    description: 'ChatGPT advertising that converts.',
    url: 'https://myvkserver.online',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
