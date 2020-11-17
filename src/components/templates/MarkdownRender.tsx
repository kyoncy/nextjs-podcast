import ReactMarkdown from 'react-markdown'
import 'github-markdown-css/github-markdown.css'

interface MarkdownRenderProps {
  markdown: string
}

const MarkdownRender: React.FC<MarkdownRenderProps> = ({ markdown }) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown source={markdown} />
    </div>
  )
}

export default MarkdownRender
