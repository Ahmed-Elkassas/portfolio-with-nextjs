import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ahmed Elkassas</title>
        <meta name="description" content="front-end developer here..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h2>Hi, this Ahmed Elqassas</h2>
      </main>
    </div>
  )
}
