import AppRouter from 'components/AppRouter';
import { AuthProvider } from 'context/auth';
import GlobalStyles from 'style/GlobalStyles';
function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
