import { AuthProvider } from '@context/auth'
import GlobalStyles from '@style/GlobalStyles'
import AppRouter from './AppRouter'

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <AppRouter />
    </AuthProvider>
  )
}

export default App
