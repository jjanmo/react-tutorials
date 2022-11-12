import { FetchUsersResponse, User } from './types'
import axios from 'axios'

const BASE_URL = 'https://dummyjson.com/'
const API = axios.create({
  baseURL: BASE_URL,
})

const fetchUsers = async () => await API.get<FetchUsersResponse>('/users').then((res) => res.data)
const fetchUser = (id: number) => API.get<User>(`/users/${id}`).then((res) => res.data)

export { fetchUsers, fetchUser }
