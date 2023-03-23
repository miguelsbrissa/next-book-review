import '@/styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'//faz com que consiga mudar as props do icone pelo css

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
