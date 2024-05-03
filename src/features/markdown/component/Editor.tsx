import { useState } from 'react'
import styled from 'styled-components'

interface EditorProps {
  onClick: (paragraph: string) => void
}

export const Editor = (props: EditorProps) => {
  const [content, setContent] = useState<string>('')
  const onClick = () => {
    props.onClick(content)
    setContent('')
  }

  const handleParagraphChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <EditorWrapper>
      <EditorTextBox value={content} onChange={handleParagraphChange} />
      <SelectableButton onClick={onClick}>작성하기</SelectableButton>
    </EditorWrapper>
  )
}

const EditorWrapper = styled.div`
  padding: 10px;
  height: 10vh;
  display: flex;
  align-content: center;
`

const SelectableButton = styled.button`
  margin-left: 10px;
`

const EditorTextBox = styled.textarea`
  background: #ececec;
  resize: none;
  border: #d3d3d3 1px solid;
  border-radius: 5px;
  overflow: hidden;
  outline: none;
`
