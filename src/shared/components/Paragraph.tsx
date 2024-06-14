import styled from 'styled-components'

interface ParagraphProps {
  content: string
  fontSize?: number | undefined
}

const Paragraph = ({ content, fontSize }: ParagraphProps) => {
  return <ParagraphStyle fontSize={fontSize}>{content}</ParagraphStyle>
}

const ParagraphStyle = styled.p<{ fontSize: number | undefined }>`
  width: fit-content;
  font-size: ${({ fontSize }) =>
    fontSize === undefined ? '16px' : `${fontSize}px`};
  line-height: 1.5;
`

export default Paragraph
