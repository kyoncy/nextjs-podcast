import fs from 'fs'
import path from 'path'
import { Howl } from 'howler'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import grayMatter from 'gray-matter'
import MarkdownRender from '../../components/templates/MarkdownRender'
import AudioControlCenter from '../../components/templates/AudioControlCenter'

type MarkdownMatterType = {
  title: string
  audioFile: string
}

interface PostsProps {
  audio: string
  markdown: string
  matter: MarkdownMatterType
}

const Posts: NextPage<PostsProps> = ({ audio, markdown }) => {
  const howl = new Howl({
    src: [audio],
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
        <MarkdownRender markdown={markdown} />
        <AudioControlCenter audio={howl} />
      </Container>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/posts/1'],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pid } = params

  const postFile = path.join(process.cwd(), `src/_posts/${pid}.md`)
  const markdownRaw = fs.readFileSync(postFile, 'utf8')

  const markdown = grayMatter<string, unknown>(markdownRaw)
  const matter = markdown.data as MarkdownMatterType

  const audioPath = path.join(process.cwd(), `src/audio/${matter.audioFile}`)
  const audio = fs.readFileSync(audioPath, 'base64')

  return {
    props: {
      audio: 'data:audio/mpeg;base64,' + audio,
      markdown: markdown.content,
      matter: matter,
    },
  }
}

export default Posts
