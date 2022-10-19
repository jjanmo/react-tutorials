import { useQueryClient } from '@tanstack/react-query';
import { fetchPosts } from '@apis/index';

const usePrefetchQueryPosts = ({ pageNumber }: { pageNumber: number }) => {
  const queryClient = useQueryClient();
  return queryClient.prefetchQuery(['posts', pageNumber], () =>
    fetchPosts(pageNumber)
  );
};

export default usePrefetchQueryPosts;
