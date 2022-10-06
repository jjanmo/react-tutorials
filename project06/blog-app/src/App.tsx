import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Posts from './components/posts';
import Title from './components/title';

function App() {
  return (
    <>
      <Title />
      <Posts />
    </>
  );
}

export default App;
