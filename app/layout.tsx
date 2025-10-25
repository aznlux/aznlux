import '@/assets/globals.css'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { twJoin } from 'tailwind-merge'

const font = localFont({
  src: '../assets/font.woff2',
  variable: '--font',
})

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Aznlux',
  },
  applicationName: 'Aznlux',
  authors: { name: 'aznlux', url: 'https://github.com/aznlux' },
  description: 'Aznlux - 一个基于 Next.js 的工具库',
  formatDetection: {
    address: false,
    date: false,
    email: false,
    telephone: false,
    url: false,
  },
  generator: 'Bun.js + Next.js',
  metadataBase: new URL('https://aznlux.com'),
  referrer: 'origin-when-cross-origin',
  robots: { follow: false, index: false },
  title: 'Aznlux',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  interactiveWidget: 'overlays-content',
  themeColor: '#1E1E24',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="h-full" lang="zh-CN">
      <body
        className={twJoin(
          'h-full text-pretty break-all bg-dark font-family text-light leading-[1.2em] antialiased',
          font.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
