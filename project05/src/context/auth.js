import { createContext, useEffect, useState } from 'react';
import firebaseApp from 'config/firebase';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = getAuth(firebaseApp);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, [auth]);

  const createUserByEmailAndPassword = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        createUserByEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
