import useAuthContext from '@context/auth'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Form from '@pages/Form'
import Home from '@pages/Home'
import Profile from '@pages/Profile'
import Talk from '@pages/Talk'
import Layout from '@components/Layout'

function AppRouter() {
  const { loggedIn } = useAuthContext()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {loggedIn ? (
            <>로그아웃 </>
          ) : (
            <>
              <Route path="signup" element={<Form key="signup" />} />
              <Route path="signin" element={<Form key="signin" />} />
            </>
          )}
          <Route path="talk" element={<Talk />} />
          <Route path="me" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
