import { Outlet } from 'react-router-dom'
import styled from 'styled-components/macro'
import Header from '@components/Header'
import Navigation from '@components/Navigation'

function Layout() {
  return (
    <Container>
      <Header />
      <Navigation />

      <Outlet />
    </Container>
  )
}

export default Layout

const Container = styled.div`
  width: 100%;
`
