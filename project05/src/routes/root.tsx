import { createBrowserRouter } from 'react-router-dom'
import Detail from '../components/Detail'
import DefaultDetail from './default-detail'
import ErrorPage from './error-page'
import Home from './home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DefaultDetail />,
      },
      {
        path: 'user/:userId',
        element: <Detail />,
      },
    ],
  },
])
