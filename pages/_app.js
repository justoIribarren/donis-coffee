import { MainProvider } from '@/context/MainContext'
import { AnimatePresence } from 'framer-motion'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Sidebar from '@/components/sidebar'

import '@/styles/globals.css'
import '@/styles/globalicons.css'
import '@/styles/virtual-scroll.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps, router }) {
  
  return(
    <MainProvider>
      <div className={inter.className}>
        <Header />
        <Sidebar />
        <AnimatePresence mode='wait'>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </div>
    </MainProvider>
  )
}
