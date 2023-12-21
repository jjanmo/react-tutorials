import { Outlet } from 'react-router-dom'
import styled from 'styled-components/macro'
import Header from '@components/Header'
import GlobalStyles from '@style/GlobalStyles'
import { AuthProvider } from '@context/auth'

function Layout() {
  return (
    <>
      <GlobalStyles />

      <AuthProvider>
        <Container>
          <Header />

          <Outlet />
        </Container>
      </AuthProvider>
    </>
  )
}

export default Layout

const Container = styled.div`
  width: 100%;
`
