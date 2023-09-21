import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/Errors'
import { DefaultDetail, Detail } from './components/Detail'
import { routesMap } from './constants/routes'
// import Home from '../pages/Home'
import { ContactList, Home, Interactive, KanbanBoard, Quiz, Todos } from './pages'

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
    path: routesMap['home'].path,
    element: <Home />,
    children: [
      {
        path: routesMap['contact'].path,
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
        path: routesMap['todos'].path,
        element: <Todos />,
      },
      {
        path: routesMap['kanban'].path,
        element: <KanbanBoard />,
      },
      {
        path: routesMap['quiz'].path,
        element: <Quiz />,
      },
      {
        path: routesMap['interactive'].path,
        element: <Interactive />,
      },
    ],
    errorElement: <ErrorPage />,
  },
])

export default router
