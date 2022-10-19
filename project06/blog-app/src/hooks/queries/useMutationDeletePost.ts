import { useMutation } from '@tanstack/react-query';
import { deletePost } from '../../apis';

const useMutationDeletePost = ({ postId }: { postId: number }) =>
  useMutation(() => deletePost(postId));

export default useMutationDeletePost;
