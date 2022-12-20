import '../styles/globals.css'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

