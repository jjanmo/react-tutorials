import useAuthContext from '@context/auth'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Form from '@pages/Form'
import Home from '@pages/Home'
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
              <Route path="signup" element={<Form />} />
              <Route path="signin" element={<Form />} />
            </>
          )}

          {/* <Route path="talk" element={<SignIn />} />
          <Route path="todos" element={<SignIn />} />
          <Route path="profile" element={<SignIn />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
