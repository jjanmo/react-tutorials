import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import GlobalStyle from '@/styles/Global'

export const Route = createRootRoute({
  component: () => (
    <>
      <GlobalStyle />
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
})
