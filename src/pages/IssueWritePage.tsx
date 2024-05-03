import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Paragraph,
  ParagraphWrapper,
} from '@/features/markdown/component/Paragraph'
import { Editor } from '@/features/markdown/component/Editor'

function IssueWritePage() {
  const [paragraphs, setParagraphs] = useState<string[]>([])

  const addParagraph = (paragraph: string) => {
    setParagraphs([...paragraphs, paragraph])
  }

  return (
    <Container>
      <ParagraphWrapper>
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={index} body={paragraph} selectable={false} />
        ))}
      </ParagraphWrapper>
      <Editor onClick={addParagraph} />
    </Container>
  )
}

export default IssueWritePage

const Container = styled.div`
  height: 100vh;
`
