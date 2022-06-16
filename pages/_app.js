import '../styles/globals.css'

import {SlideshowContextProvider} from '../components/store/slideshowContext'

function MyApp({ Component, pageProps }) {
  return (
    <SlideshowContextProvider>
      <Component {...pageProps} />
    </SlideshowContextProvider>
  )
}

export default MyApp
