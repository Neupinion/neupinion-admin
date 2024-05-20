import { Header } from './Header'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}

export default Layout

const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  padding-top: ${({ theme }) => theme.headerHeight};
  color: ${({ theme: { colors } }) => colors.black};
  background-color: ${({ theme: { colors } }) => colors.white};
`
