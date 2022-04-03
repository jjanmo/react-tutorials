import { createContext, useEffect, useState } from 'react';
import firebaseApp from 'config/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
