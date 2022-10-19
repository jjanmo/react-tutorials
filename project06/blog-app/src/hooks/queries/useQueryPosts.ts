import { Post } from '@apis/types';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '@apis/index';

const useQueryPosts = ({ pageNumber }: { pageNumber: number }) =>
  useQuery<Post[]>(['posts', pageNumber], () => fetchPosts(pageNumber), {
    staleTime: 2000,
    keepPreviousData: true,
  });

export default useQueryPosts;
