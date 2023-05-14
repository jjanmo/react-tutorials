import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/Errors'
import Root from '../Root'
import { DefaultDetail, Detail } from '../components/Detail'
import { Home, Todos, Quiz, ContactList, KanbanBoard, Interactive } from '../pages'

/**
 * Home
 * Contact List -> react router dom
 * TodoApp  -> recoil
 * KanbanBoard -> drag&drop 1
 * QuizApp -> drag&drop 2
 * Interactive Framer -> framer motion
 */

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
        path: '/contactlist',
        element: <ContactList />,
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
        path: '/todos',
        element: <Todos />,
      },
      {
        path: '/kanbanboard',
        element: <KanbanBoard />,
      },
      {
        path: '/quiz',
        element: <Quiz />,
      },
      {
        path: '/interactive',
        element: <Interactive />,
      },
    ],
    errorElement: <ErrorPage />,
  },
])

export default router
