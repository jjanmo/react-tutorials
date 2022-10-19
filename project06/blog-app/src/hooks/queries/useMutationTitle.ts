import { updatePostTitle } from '@apis/index';
import { useMutation } from '@tanstack/react-query';

interface Params {
  postId: number;
  title: string;
}

const useMutationTitle = ({
  setTitle,
}: {
  setTitle: (title: string) => void;
}) =>
  useMutation(
    ({ postId, title }: Params) => updatePostTitle({ postId, title }),
    {
      onSuccess: (data) => {
        setTitle(data.title);
      },
    }
  );

export default useMutationTitle;
