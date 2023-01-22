import useAuthContext from '@context/auth'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Form from '@pages/Form'
import Home from '@pages/Home'
import Profile from '@pages/Profile'
import Talk from '@pages/Talk'
import Todo from '@pages/Todo'
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
          <Route path="talk" element={<Talk />} />
          <Route path="todo" element={<Todo />} />
          <Route path="me" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
