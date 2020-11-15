import { Howl } from 'howler'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Footer from '../components/templates/Footer'
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
        <Footer>
          <Grid container sm={8} justify="center" alignItems="center">
            <AudioPlayControlButton audio={audio} />
            <AudioSeekbar audio={audio} />
          </Grid>
          <Grid container sm={4} justify="center" alignItems="center">
            <VolumeSeekbar audio={audio} />
          </Grid>
        </Footer>
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
