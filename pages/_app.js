import Layout from '../components/layout'
import '../styles/global.css'

  export default function MyApp({ Component, pageProps }) {
    <Layout></Layout>
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<Component {...pageProps} />)
  }


