import styled from 'styled-components'
import React from 'react'

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>뉴피니언 에디터 페이지 ✏️</Title>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${({ theme }) => theme.headerHeight};

  background-color: ${({ theme: { colors } }) => colors.white};

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
  user-select: none;
  font-size: 24px;
  width: fit-content;
`
