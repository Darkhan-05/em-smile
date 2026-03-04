import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0A1628',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Стоматология Э.М.SMILE в Кокшетау — Запись онлайн | +7 771 278-1228',
  description: 'Профессиональная стоматология в Кокшетау. Терапия, хирургия, имплантация, брекеты, виниры. Рассрочка 0–0–24. Бесплатная консультация. Запишитесь онлайн!',
  openGraph: {
    title: 'Стоматология Э.М.SMILE — Кокшетау',
    description: 'Полный спектр стоматологических услуг. Современное оборудование. Рассрочка 0–0–24.',
    type: 'website',
    locale: 'ru_RU',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
