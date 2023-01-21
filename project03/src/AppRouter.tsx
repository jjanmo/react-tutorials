import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '@pages/Home'
import SignIn from '@pages/SignIn'
import SignUp from '@pages/SignUp'
import Layout from '@components/Layout'

function AppRouter() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {loggedIn ? (
            <>로그아웃 </>
          ) : (
            <>
              <Route path="signup" element={<SignUp />} />
              <Route path="signin" element={<SignIn />} />
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
