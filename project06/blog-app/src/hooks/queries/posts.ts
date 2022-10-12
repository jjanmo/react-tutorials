import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchComments, fetchPosts } from '../../apis';

export const useQueryPosts = ({ pageNumber }: { pageNumber: number }) =>
  useQuery(['posts', pageNumber], () => fetchPosts(pageNumber), {
    staleTime: 2000,
    keepPreviousData: true,
  });

export const usePrefetchQueryPosts = ({
  pageNumber,
}: {
  pageNumber: number;
}) => {
  const queryClient = useQueryClient();
  return queryClient.prefetchQuery(['posts', pageNumber], () =>
    fetchPosts(pageNumber)
  );
};

export const useQueryComments = ({ postId }: { postId: number }) =>
  useQuery(['comment', postId], () => fetchComments(postId));
