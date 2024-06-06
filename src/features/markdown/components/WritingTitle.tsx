import styled from 'styled-components'
import React, { useCallback, useEffect, useRef } from 'react'

interface TitleProps {
  onChange: (title: string) => void
}

const WritingTitle = (props: TitleProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleInput = useCallback(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto' // Reset height to auto to calculate new height correctly
      textarea.style.height = `${textarea.scrollHeight}px` // Set new height based on scrollHeight
    }
  }, [])

  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.addEventListener('input', handleInput)
      return () => {
        textarea.removeEventListener('input', handleInput)
      }
    }
  }, [handleInput])

  return (
    <Title
      ref={textareaRef}
      placeholder={'제목을 입력하세요'}
      onChange={e => props.onChange(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  )
}

export default WritingTitle

const Title = styled.textarea`
  font-size: 24px;
  min-height: 50px;
  padding-top: 15px;
  padding-inline: 15px;
  width: 100%;
  outline: none;
  border: none;
  resize: none;
  font-weight: bold;
  margin: 0;
  white-space: pre-wrap;
  overflow: hidden;
`
