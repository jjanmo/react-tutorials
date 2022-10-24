import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/Home';
import PeopleScroll from '@pages/PeopleScroll';
import StarshipScroll from '@pages/StarshipScroll';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/people',
      element: <PeopleScroll />,
    },
    {
      path: '/starship',
      element: <StarshipScroll />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
