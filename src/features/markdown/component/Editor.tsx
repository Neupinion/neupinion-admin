import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface EditorProps {
  onChange: (content: string) => void
}

export const Editor = (props: EditorProps) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  useEffect(() => {
    props.onChange(`# ${title}\n` + content)
  }, [title, content])

  return (
    <EditorWrapper>
      <EditorTitleBox
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <EditorDivider />
      <EditorTextBox onChange={e => setContent(e.target.value)} />
    </EditorWrapper>
  )
}

const EditorWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  border-right: grey 1px solid;
`

const EditorDivider = styled.hr`
  height: 2px;
  margin: 5px;
  background: darkgray;
  border: none;
`

const EditorTitleBox = styled.textarea`
  background: #ffffff;
  font-size: 24px;
  height: 5%;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  outline: none;
  border: none;
  resize: none;
  padding: 15px;
  font-weight: bold;
`

const EditorTextBox = styled.textarea`
  background: #ffffff;
  font-size: 20px;
  height: 95%;
  width: 100%;
  overflow: auto;
  scrollbar-color: #c4c4c4 #ffffff;
  outline: none;
  border: none;
  resize: none;
  padding: 10px;
`
