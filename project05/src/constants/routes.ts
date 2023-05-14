type RouteType = {
  title: string
  path: string
}
type RouteKey = 'home' | 'contact' | 'todos' | 'kanban' | 'quiz' | 'interactive'

const routesMap: Record<RouteKey, RouteType> = {
  home: {
    title: 'Home',
    path: '/',
  },
  contact: {
    title: 'Contact List',
    path: '/contactlist',
  },
  todos: {
    title: 'Todo App',
    path: '/todos',
  },
  kanban: {
    title: 'Kanban Board',
    path: '/kanbanboard',
  },
  quiz: {
    title: 'Quiz App',
    path: '/quiz',
  },
  interactive: {
    title: 'Interactive UI',
    path: '/interactive',
  },
}

const routes = Object.values(routesMap)

export { routesMap, routes }
