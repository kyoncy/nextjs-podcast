import styled from 'styled-components'

interface FooterProps {
  children: React.ReactNode
}

const FooterContainer = styled.div`
  bottom: 0;
  display: flex;
  justify-content: center;
  height: 80px;
`

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <FooterContainer>{children}</FooterContainer>
}

export default Footer
