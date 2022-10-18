import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../apis';

const useQueryPosts = ({ pageNumber }: { pageNumber: number }) =>
  useQuery(['posts', pageNumber], () => fetchPosts(pageNumber), {
    staleTime: 2000,
    keepPreviousData: true,
  });

export default useQueryPosts;
