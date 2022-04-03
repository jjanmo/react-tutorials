import { useState } from 'react';
import AppRouter from './components/AppRouter';
import { AuthService } from './config/firebase';
function App() {
  const currentUser = AuthService.currentUser;

  const [isLoggedIn, setIsLoggedIn] = useState(!!currentUser);

  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
