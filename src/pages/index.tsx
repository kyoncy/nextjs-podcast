import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AudioPlayControlButton from '../components/Molecules/Button/AudioPlayControlButton'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <AudioPlayControlButton />
      </main>
    </div>
  )
}

export default Home
