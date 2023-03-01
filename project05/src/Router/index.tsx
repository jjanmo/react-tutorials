import { createBrowserRouter } from 'react-router-dom'
import { Detail, DefaultDetail } from '../components/Detail'
import About from '../pages/About'
import DragNDrop from '../pages/DragNDrop'
import Home from '../pages/Home'
import RRDTutorial from '../pages/RRDTutorial'

import Root from '../Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/rrd-tutorial',
        element: <RRDTutorial />,
        children: [
          {
            path: '',
            element: <DefaultDetail />,
          },
          {
            path: 'user/:userId',
            element: <Detail />,
          },
        ],
      },
      {
        path: '/dragndrop',
        element: <DragNDrop />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])

export default router
