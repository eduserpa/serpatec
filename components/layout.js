import Head from 'next/head'
import styles from './style/layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SERPATEC</title>
        <link rel="shortcut icon" href="assets\favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}