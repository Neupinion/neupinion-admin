import React from 'react'
import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  body {
    margin: 0;
  }
  width: 100vw;
  height: 100vh;
`

const Tabs = styled.div`
  flex-basis: 20%;
  background-color: #f0f0f0;
`

const PageContainer = styled.div`
  padding: 20px;
`

const TabLink = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #ddd;
  }
`

function MainPage() {
  return (
    <Container>
      <Tabs>
        <TabLink to="/home">Home</TabLink>
        <TabLink to="/issue">이슈 작성하기</TabLink>
        <TabLink to="/issue-list">이슈 리스트</TabLink>
      </Tabs>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </Container>
  )
}

export default MainPage
