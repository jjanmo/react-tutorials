import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import Home from './home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
])
