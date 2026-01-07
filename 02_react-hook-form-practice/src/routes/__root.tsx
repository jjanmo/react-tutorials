import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import styles from '@/styles/root.module.css';

const RootLayout = () => {
  return (
    <>
      <main className={styles.main}>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
