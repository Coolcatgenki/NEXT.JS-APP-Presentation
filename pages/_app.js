import Head from "next/head";
import '../styles/globals.css'
import Layout from "../components/layout/Layout"

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
    <link rel="shortcut icon" href="../images/favicon.ico" />
    </Head>
    <Layout>
  <Component {...pageProps} />
    </Layout>
     </>
  ) 
}
