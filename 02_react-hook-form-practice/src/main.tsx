import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/reset.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import 'dayjs/locale/ko';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen'; // import the generated route tree

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <RouterProvider router={router} />
    </LocalizationProvider>
  </StrictMode>
);
