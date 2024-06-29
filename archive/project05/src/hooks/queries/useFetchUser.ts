import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../../apis'
import { userKeys } from './keyFactory'

export default function useFetchUser(id: number) {
  return useQuery(userKeys.user(id), () => fetchUser(id))
}
