import AppRouter from 'components/AppRouter';
import { AuthProvider } from 'context/auth';
function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
