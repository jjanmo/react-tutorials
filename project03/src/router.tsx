import { createBrowserRouter } from 'react-router-dom'
import Form from '@pages/Form'
import Home from '@pages/Home'
import Profile from '@pages/Profile'
import Talk from '@pages/Talk'
import Root from './Root'
import useAuthContext from '@context/auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signup',
        element: <Form key="signup" />,
      },
      {
        path: 'signin',
        element: <Form key="signin" />,
      },
      {
        path: 'talk',
        element: <PrivateRoute element={<Talk />} />,
      },
      {
        path: 'profile',
        element: <PrivateRoute element={<Profile />} />,
      },
    ],
  },
])

function PrivateRoute({ element }: { element: React.ReactNode }) {
  const { user } = useAuthContext()

  return user ? <>{element}</> : <Home />
}
