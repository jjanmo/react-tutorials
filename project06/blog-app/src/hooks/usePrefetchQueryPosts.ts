import { useQueryClient } from '@tanstack/react-query';
import { fetchPosts } from '../apis';

const usePrefetchQueryPosts = ({ pageNumber }: { pageNumber: number }) => {
  const queryClient = useQueryClient();
  return queryClient.prefetchQuery(['posts', pageNumber], () =>
    fetchPosts(pageNumber)
  );
};

export default usePrefetchQueryPosts;
