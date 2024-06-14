import styled from 'styled-components'

interface TitleProps {
  title: string
  fontSize: string
  headerSize: string
}

const Title = ({ title, fontSize, headerSize }: TitleProps) => {
  if (headerSize === '1') {
    return <TitleH1Style fontSize={fontSize}>{title}</TitleH1Style>
  } else if (headerSize === '2') {
    return <TitleH2Style fontSize={fontSize}>{title}</TitleH2Style>
  }
  return <TitleH3Style fontSize={fontSize}>{title}</TitleH3Style>
}

export default Title

const TitleH1Style = styled.h1<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: 1.5;
`

const TitleH2Style = styled.h2<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: 1.5;
`

const TitleH3Style = styled.h3<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: 1.5;
`
