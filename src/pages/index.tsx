import { Howl } from 'howler';
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AudioPlayControlButton from '../components/Organisms/AudioControlButtons'
import AudioSeekbar from '../components/Molecules/InputRange/AudioSeekbar'
// TODO: 仮でここにオーディオファイル置いてるだけなので適切な場所に
import sample from '../audio/sample.mp3'

interface HomeProps {
  audioFile: string
}

const Home: NextPage<HomeProps> = ({ audioFile }) => {
  let audio: Howl

  audio = new Howl({
    src: [audioFile],
    autoplay: false,
    loop: false,
    volume: 0.5,
  });

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

        <AudioPlayControlButton audio={audio} />
        <AudioSeekbar audio={audio} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      audioFile: sample
    }
  }
}

export default Home
