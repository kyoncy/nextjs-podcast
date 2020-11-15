import ReactMarkdown from 'react-markdown'

interface MarkdownRenderProps {
  markdown: string
}

const MarkdownRender: React.FC<MarkdownRenderProps> = ({ markdown }) => {
  return <ReactMarkdown source={markdown} />
}

export default MarkdownRender
