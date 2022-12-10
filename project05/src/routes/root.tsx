import { createBrowserRouter } from 'react-router-dom'
import Detail from '../components/Detail'
import DefaultDetail from '../pages/react-router/default-detail'
import ErrorPage from './error-page'
import Home from '../pages/home/home'
import ReactRouter from '../pages/react-router'
import D3Chart from '../pages/d3-chart'
import DndBoard from '../pages/dnd-board'
import HookForm from '../pages/hook-form'
import GNB from '../components/GNB'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/react-router',
        element: <ReactRouter />,
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
      {
        path: '/hook-form',
        element: <HookForm />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/dnd-board',
        element: <DndBoard />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/d3-chart',
        element: <D3Chart />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])
