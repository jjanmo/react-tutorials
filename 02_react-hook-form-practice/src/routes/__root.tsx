import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => {
  return (
    <>
      <div>@Todo: Navigation 영역</div>
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
