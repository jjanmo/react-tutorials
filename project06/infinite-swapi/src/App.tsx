import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import InfiniteScroll from './pages/InfiniteScroll';
import LoadMoreScroll from './pages/LoadMoreScroll';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/infinite-scroll',
      element: <InfiniteScroll />,
    },
    {
      path: '/loadmore-scroll',
      element: <LoadMoreScroll />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
