import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import router from './pages/routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
