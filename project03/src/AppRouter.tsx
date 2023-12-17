import useAuthContext from '@context/auth'
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import Form from '@pages/Form'
import Home from '@pages/Home'
import Profile from '@pages/Profile'
import Talk from '@pages/Talk'
import Layout from '@components/Layout'
import { PropsWithChildren } from 'react'
import { User } from 'firebase/auth'

function AppRouter() {
  const { user } = useAuthContext()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Form key="signup" />} />
          <Route path="signin" element={<Form key="signin" />} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="talk" element={<Talk />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

type ProtectedProps = {
  user: User
  redirectPath?: string
}

function ProtectedRoute({
  user,
  redirectPath = '/signin',
  children,
}: PropsWithChildren<ProtectedProps>) {
  if (!user) return <Navigate to={redirectPath} replace />

  return children ? <>{children}</> : <Outlet />
}

export default AppRouter
