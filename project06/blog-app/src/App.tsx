import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Posts from './components/posts';

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <h1>
        Post App with <b>ReactQuery</b>
      </h1>
      <Posts />
    </QueryClientProvider>
  );
}

export default App;
