import { Howl } from 'howler'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AudioPlayControlButton from '../components/Organisms/AudioControlButtons'
import AudioSeekbar from '../components/Molecules/InputRange/AudioSeekbar'
import VolumeSeekbar from '../components/Molecules/InputRange/VolumeSeekbar'
// TODO: 仮でここにオーディオファイル置いてるだけなので適切な場所に
import sample from '../audio/sample.mp3'

interface HomeProps {
  audioFile: string
}

const Home: NextPage<HomeProps> = ({ audioFile }) => {
  const audio = new Howl({
    src: [audioFile],
    autoplay: false,
    loop: false,
    volume: 0.5,
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <VolumeSeekbar audio={audio} />
        <AudioPlayControlButton audio={audio} />
        <AudioSeekbar audio={audio} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      audioFile: sample,
    },
  }
}

export default Home
