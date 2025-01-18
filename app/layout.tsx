import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import Providers from './components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Chatbot Plugin',
  description: 'Empower your website with our AI-powered chatbot plugin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

