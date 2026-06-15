import type { Metadata } from 'next'
import {  Poppins } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'


const inter = Poppins({ subsets: ['latin'], weight: "500" })

export const metadata: Metadata = {
  applicationName: "Birthday wish",
  authors: [
    {
      name: "Elvin Murithi Njeru"
    }
  ],
  title: {
    default: "Happy Birthday Twilaaaaaa",
    template: "%s | Happy Birthday"
  },
  description: "Designed with love, I got confused what i will do for your brithday then thought of thiss... if you have reached the end it means it has not broke ",
  category: "website",
  icons: ["/favicon.ico"],
  publisher: "CloudBurst Lab",
  creator: "Shawkat Hossain Maruf",
  keywords: ["Next.js 16", "birthday wishes", "animated greetings", "well-organized", "remotely wish", "timer wish", "special occasions", "celebration", "heartfelt messages", "joyous moments", "virtual celebrations", "digital greetings", "responsive design", "animated birthday wishes", "seamless wishes", "remote celebrations", "best wishes", "personalized messages", "cloudburst lab"],
  metadataBase: process.env.NEXT_PUBLIC_APP_BASE_URL,
  openGraph: {
    images: '/opengraph-image.png',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="dark:[color-scheme:dark]">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#9333ea" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
