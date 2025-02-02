/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TimetableImport } from './routes/timetable'
import { Route as FormImport } from './routes/form'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as TodosIndexImport } from './routes/todos/index'
import { Route as TodosTodoIdIndexImport } from './routes/todos/$todoId/index'
import { Route as TodosTodoIdEditImport } from './routes/todos/$todoId/edit'

// Create/Update Routes

const TimetableRoute = TimetableImport.update({
  path: '/timetable',
  getParentRoute: () => rootRoute,
} as any)

const FormRoute = FormImport.update({
  path: '/form',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TodosIndexRoute = TodosIndexImport.update({
  path: '/todos/',
  getParentRoute: () => rootRoute,
} as any)

const TodosTodoIdIndexRoute = TodosTodoIdIndexImport.update({
  path: '/todos/$todoId/',
  getParentRoute: () => rootRoute,
} as any)

const TodosTodoIdEditRoute = TodosTodoIdEditImport.update({
  path: '/todos/$todoId/edit',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/form': {
      id: '/form'
      path: '/form'
      fullPath: '/form'
      preLoaderRoute: typeof FormImport
      parentRoute: typeof rootRoute
    }
    '/timetable': {
      id: '/timetable'
      path: '/timetable'
      fullPath: '/timetable'
      preLoaderRoute: typeof TimetableImport
      parentRoute: typeof rootRoute
    }
    '/todos/': {
      id: '/todos/'
      path: '/todos'
      fullPath: '/todos'
      preLoaderRoute: typeof TodosIndexImport
      parentRoute: typeof rootRoute
    }
    '/todos/$todoId/edit': {
      id: '/todos/$todoId/edit'
      path: '/todos/$todoId/edit'
      fullPath: '/todos/$todoId/edit'
      preLoaderRoute: typeof TodosTodoIdEditImport
      parentRoute: typeof rootRoute
    }
    '/todos/$todoId/': {
      id: '/todos/$todoId/'
      path: '/todos/$todoId'
      fullPath: '/todos/$todoId'
      preLoaderRoute: typeof TodosTodoIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutRoute,
  FormRoute,
  TimetableRoute,
  TodosIndexRoute,
  TodosTodoIdEditRoute,
  TodosTodoIdIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/form",
        "/timetable",
        "/todos/",
        "/todos/$todoId/edit",
        "/todos/$todoId/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/form": {
      "filePath": "form.tsx"
    },
    "/timetable": {
      "filePath": "timetable.tsx"
    },
    "/todos/": {
      "filePath": "todos/index.tsx"
    },
    "/todos/$todoId/edit": {
      "filePath": "todos/$todoId/edit.tsx"
    },
    "/todos/$todoId/": {
      "filePath": "todos/$todoId/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
