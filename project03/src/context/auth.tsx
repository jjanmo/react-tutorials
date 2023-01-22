import fbApp from '@config/firebase'
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
  signUpByEmailAndPassword: (email: string, password: string) => Promise<void>
  signInByEmailAndPassword: (email: string, password: string) => Promise<void>
  signInWithProvider: (type: string) => Promise<void>
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
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const signInByEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const signInWithProvider = async (type: string) => {
    try {
      let result: UserCredential
      if (type === 'google') {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        console.log(result)
      } else if (type === 'github') {
        const provider = new GithubAuthProvider()
        const result = await signInWithPopup(auth, provider)
        console.log(result)
      }

      if (result) setCurrentUser(result.user)
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
