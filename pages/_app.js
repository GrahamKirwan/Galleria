import '../styles/globals.css'

import {SlideshowContextProvider} from '../components/store/slideshowContext'

import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <SlideshowContextProvider>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} canonical={router.route} key={router.route}/>
      </AnimatePresence>
    </SlideshowContextProvider>
  )
}

export default MyApp
