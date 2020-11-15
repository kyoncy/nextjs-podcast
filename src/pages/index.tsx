import { Howl } from 'howler'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import grayMatter from 'gray-matter'
import MarkdownRender from '../components/templates/MarkdownRender'
import AudioControlCenter from '../components/templates/AudioControlCenter'
// TODO: 仮でここに置いてるだけなので適切な場所に
import sampleMd from '../_posts/first-content.md'
import sampleAudio from '../audio/sample.mp3'

interface HomeProps {
  audioFile: string
  markdownFile: string
}

type MarkdownMatterType = {
  title: string
}

const Home: NextPage<HomeProps> = ({ audioFile, markdownFile }) => {
  const audio = new Howl({
    src: [audioFile],
    autoplay: false,
    loop: false,
    volume: 0.5,
  })

  const markdown = grayMatter<string, unknown>(markdownFile)
  console.log(markdown.data as MarkdownMatterType)

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
        <MarkdownRender markdown={markdown.content} />
        <AudioControlCenter audio={audio} />
      </Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      audioFile: sampleAudio,
      markdownFile: sampleMd,
    },
  }
}

export default Home
