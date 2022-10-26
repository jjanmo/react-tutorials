import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/Home';
import People from '@pages/People';
import Starship from '@pages/Starship';
import Coins from '@pages/Coins';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/people',
      element: <People />,
    },
    {
      path: '/starship',
      element: <Starship />,
    },
    {
      path: '/coins',
      element: <Coins />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
