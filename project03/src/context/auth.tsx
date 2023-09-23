import fbApp from '@config/firebase'
import { FirebaseError } from 'firebase/app'
import {
  User,
  UserCredential,
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'

export interface AuthContextType {
  user: User
  loggedIn: boolean
  signUpByEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential | FirebaseError>
  signInByEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential | FirebaseError>
  signInWithProvider: (type: string) => Promise<UserCredential | FirebaseError>
  logOut: () => void
}

export interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

const useAuthContext = () => useContext(AuthContext)
export default useAuthContext

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = getAuth(fbApp)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [auth])

  const signUpByEmailAndPassword = async (email: string, password: string) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      if (error instanceof FirebaseError) {
        return error
      }
    }
  }
  const signInByEmailAndPassword = async (email: string, password: string) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      if (error instanceof FirebaseError) {
        return error
      }
    }
  }

  const signInWithProvider = async (type: string) => {
    try {
      const provider = type === 'google' ? new GoogleAuthProvider() : new GithubAuthProvider()
      return await signInWithPopup(auth, provider)
    } catch (error) {
      if (error instanceof FirebaseError) {
        return error
      }
    }
  }

  const logOut = () => {
    try {
      signOut(auth)
    } catch (error) {
      if (error instanceof FirebaseError) {
        return error
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: currentUser as User,
        loggedIn: !!currentUser,
        signUpByEmailAndPassword,
        signInByEmailAndPassword,
        logOut,
        signInWithProvider,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
