import app from '@config/firebaseSetup'
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
import { createContext, useEffect, useState } from 'react'
import { AuthContextType, AuthProviderProps } from './types'

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = getAuth(app)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [auth])

  const signUpByEmailAndPassword = async (email: string, password: string) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
    } catch (error: any) {
      const errorCode = error.code
      const errorMessage = error.message
    }
  }

  const signInByEmailAndPassword = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log(user)
    } catch (error: any) {
      const errorCode = error.code
      const errorMessage = error.message
    }
  }

  const signInWithProvider = async (type: string) => {
    try {
      let result: Promise<UserCredential>
      if (type === 'google') {
        const provider = new GoogleAuthProvider()
        // result = await signInWithPopup(auth, provider)
      } else if (type === 'github') {
        const provider = new GithubAuthProvider()
        // result = await signInWithPopup(auth, provider)
      }

      // const user = result.user as User
      // console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = () => {
    try {
      signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: currentUser as User,
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
