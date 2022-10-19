import { useMutation } from '@tanstack/react-query';
import { deletePost } from '../../apis';

const useMutationDeletePost = () =>
  useMutation(({ postId }: { postId: number }) => deletePost(postId));

export default useMutationDeletePost;
