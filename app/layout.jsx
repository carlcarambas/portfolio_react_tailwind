import { Outfit } from 'next/font/google'
import './globals.css'

// components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Carl Mark Carambas | Fullstack Software Engineer',
  description:
    'Fullstack software engineer with 10 years building production web platforms with React, Next.js, Node.js and NestJS, and integrating LLMs into real business workflows.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
