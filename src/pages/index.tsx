import { Howl } from 'howler'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import AudioControlCenter from '../components/templates/AudioControlCenter'
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
    <div>
      <Head>
        <title>Podcast</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm">
        hoge
        <AudioControlCenter audio={audio} />
      </Container>
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
