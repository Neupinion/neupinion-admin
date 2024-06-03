import React from 'react'
import styled from 'styled-components'

interface EditorProps {
  onChange: (content: string) => void
}

const Editor = (props: EditorProps) => {
  return (
    <EditorTextBox
      placeholder={'이슈를 작성해주세요'}
      onChange={e => props.onChange(e.target.value)}
    />
  )
}

export default Editor

const EditorTextBox = styled.textarea`
  font-size: 20px;
  height: 100%;
  overflow: auto;
  width: 50%;
  outline: none;
  border: none;
  resize: none;
  padding: 10px;
`
