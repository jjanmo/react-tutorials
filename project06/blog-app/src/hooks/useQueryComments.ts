import { useQuery } from '@tanstack/react-query';
import { fetchComments } from '../apis';

const useQueryComments = ({ postId }: { postId: number }) =>
  useQuery(['comment', postId], () => fetchComments(postId));

export default useQueryComments;
