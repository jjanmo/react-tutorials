import { createBrowserRouter } from 'react-router-dom'
import Form from '@pages/Form'
import Home from '@pages/Home'
import Profile from '@pages/Profile'
import Talk from '@pages/Talk'
import Root from './Root'

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
        element: <Talk />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
])
