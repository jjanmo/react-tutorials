import { useQuery } from '@tanstack/react-query';
import { fetchComments, fetchPosts } from '../../apis';

export const useQueryPosts = ({ pageNumber }: { pageNumber: number }) =>
  useQuery(['posts', pageNumber], () => fetchPosts(pageNumber), {
    staleTime: 2000,
  });

export const useQueryComments = ({ postId }: { postId: number }) =>
  useQuery(['comment', postId], () => fetchComments(postId));
