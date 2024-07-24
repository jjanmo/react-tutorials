import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div>
      {/* @TODO 조건에 따라 Header 랜더링 */}
      {/* <Header /> */}

      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </div>
  ),
})
