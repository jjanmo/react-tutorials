import { useQuery } from '@tanstack/react-query'
import { userKeys } from './keyFactory'
import { fetchUsers } from '../../apis'

export default function useFetchUsers() {
  return useQuery([userKeys.users], fetchUsers, { staleTime: 1000 * 60 * 10 })
}
