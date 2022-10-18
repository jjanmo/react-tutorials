import { useMutation } from '@tanstack/react-query';
import { deletePost } from '../apis';

const useMutationDeletePost = ({ postId }: { postId: number }) =>
  useMutation(() => deletePost(postId), {
    onSuccess: () => {
      console.log('success');
    },
    onError: () => {
      console.log('error');
    },
    onSettled: () => {
      console.log('settled');
    },
  });

export default useMutationDeletePost;
