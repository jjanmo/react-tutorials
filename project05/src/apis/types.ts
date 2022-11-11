import { User } from '../domain'

export interface FetchUsersResponse {
  users: User[]
  limit: number
  skip: number
  total: number
}
export interface FetchUserResponse {
  users: User
}
