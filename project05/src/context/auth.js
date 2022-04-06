import { createContext, useEffect, useState } from 'react';
import firebaseApp from 'config/firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
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

  const signUpByEmailAndPassword = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const signInByEmailAndPassword = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  const signInWithProvider = async (type) => {
    try {
      let result;
      if (type === 'google') {
        const provider = new GoogleAuthProvider();
        result = await signInWithPopup(auth, provider);
      } else if (type === 'github') {
        const provider = new GithubAuthProvider();
        result = await signInWithPopup(auth, provider);
      }

      const user = result.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        signUpByEmailAndPassword,
        signInByEmailAndPassword,
        logOut,
        signInWithProvider,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
