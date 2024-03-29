export type Gender = 'male' | 'female'
export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  gender: Gender
  image: string
  username: string
}
export interface FetchUsersResponse {
  users: User[]
  limit: number
  skip: number
  total: number
}
