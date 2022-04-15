import { Outlet } from 'react-router-dom'
import Header from '@components/Header'
import Navigation from '@components/Navigation'

function Layout() {
  return (
    <div>
      <Header />
      <Navigation />
      <div></div>
      <Outlet />
    </div>
  )
}

export default Layout
