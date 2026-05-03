import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Hotel Residence MACASAH | Abidjan - Luxe & Confort',
  description: 'Decouvrez l\'Hotel Residence MACASAH a Abidjan. Chambres elegantes, salle de conference, restaurant avec cuisine locale et internationale. Votre adresse de confort et de raffinement en Cote d\'Ivoire.',
  keywords: ['hotel', 'residence', 'macasah', 'abidjan', 'cote d\'ivoire', 'luxe', 'conference', 'restaurant', 'chambres'],
  generator: 'v0.app',
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
  openGraph: {
    title: 'Hotel Residence MACASAH | Abidjan',
    description: 'Votre adresse de confort et de raffinement a Abidjan',
    type: 'website',
    locale: 'fr_FR',
  }
}

export const viewport: Viewport = {
  themeColor: '#2d5a4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
