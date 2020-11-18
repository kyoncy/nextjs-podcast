import fs from 'fs'
import path from 'path'
import { Fragment } from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import grayMatter from 'gray-matter'

type MarkdownMatterType = {
  title: string
  audioFile: string
}

interface HomeProps {
  posts: {
    path: string
    filename: string
    content: string
    matter: MarkdownMatterType
  }[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
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
        <List>
          {posts.map((post) => {
            const { path, filename, matter } = post
            return (
              <Fragment key={filename}>
                <ListItem>
                  <ListItemText>
                    <Link href={`posts/${path}`}>{matter.title}</Link>
                  </ListItemText>
                </ListItem>
                <Divider />
              </Fragment>
            )
          })}
        </List>
      </Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDir = path.join(process.cwd(), `src/_posts/`)
  const filenames = fs.readdirSync(postsDir)

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const markdown = grayMatter<string, unknown>(fileContents)
    const matter = markdown.data as MarkdownMatterType

    return {
      path: filename.split('.')[0],
      filename,
      content: fileContents,
      matter: matter,
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export default Home
