import '../styles/globals.css'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Header />
      <div class="container  mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

