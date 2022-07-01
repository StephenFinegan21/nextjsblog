import '../styles/global.css'
import { DarkProvider } from '../context/DarkContext'

export default function App({ Component, pageProps }) {
  return (
    <DarkProvider>
      <Component {...pageProps} />
    </DarkProvider>
  )
}
