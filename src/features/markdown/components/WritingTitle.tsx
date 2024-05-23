import styled from 'styled-components'
import React, { useState } from 'react'

const WritingTitle = () => {
  const [title, setTitle] = useState('')

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  return (
    <Title
      placeholder={'제목을 입력하세요'}
      onChange={e => setTitle(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  )
}

export default WritingTitle

const Title = styled.textarea`
  background: #ffffff;
  font-size: 24px;
  height: 50px;
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
