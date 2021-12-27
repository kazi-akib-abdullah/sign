import '../styles/globals.css'
import Layout from '../comps/Layout'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
