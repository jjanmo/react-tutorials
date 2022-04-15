import { User, UserCredential } from 'firebase/auth'

export interface AuthContextType {
  user: User
  signUpByEmailAndPassword: (email: string, password: string) => Promise<void>
  signInByEmailAndPassword: (email: string, password: string) => Promise<void>
  signInWithProvider: (type: string) => Promise<void>
  logOut: () => void
}

export interface AuthProviderProps {
  children: React.ReactNode
}
