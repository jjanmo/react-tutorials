import Home from './pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import Treatments from './pages/Treatments';
import Staff from './pages/Staff';
import Calendar from './pages/Calendar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/treatments',
    element: <Treatments />,
  },
  {
    path: '/staff',
    element: <Staff />,
  },
  {
    path: '/calendar',
    element: <Calendar />,
  },
]);

export default router;
