import { useQuery } from '@tanstack/react-query';
import { fetchComments, fetchPosts } from '../../apis';

export const useQueryPosts = () =>
  useQuery(['posts'], fetchPosts, { staleTime: 2000 });

export const useQueryComments = ({ postId }: { postId: number }) =>
  useQuery(['comment', postId], () => fetchComments(postId));
