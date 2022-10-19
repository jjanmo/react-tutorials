import { useQueryComments, useMutationDeletePost } from '@hooks/queries';
import { Post as PostType } from '@apis/types';
import * as S from './Post.style';

function Post({ body, id: postId, title, userId }: PostType) {
  const { data, isLoading } = useQueryComments({ postId });
  const {
    mutate: deletePostById,
    isLoading: isDeleting,
    isError,
    isSuccess,
  } = useMutationDeletePost({ postId });

  const handleClickDelete = () => {
    const result = window.confirm('Really delete this?');

    if (result) deletePostById();
  };

  const deletedResult = {
    isDeleting: {
      style: {
        color: 'green',
      },
      text: 'Post deleting',
    },
    isError: {
      style: {
        color: 'red',
      },
      text: 'Error on deleting post',
    },
    isSuccess: {
      style: {
        color: 'dodgerblue',
      },
      text: 'This post deleted',
    },
  };

  return (
    <S.PostContainer>
      <h3>{title}</h3>
      <div className="control-buttons">
        <button onClick={handleClickDelete}>Delete</button>
        {isDeleting && (
          <S.Message style={deletedResult.isDeleting.style}>
            {deletedResult.isDeleting.text}
          </S.Message>
        )}
        {isError && (
          <S.Message style={deletedResult.isError.style}>
            {deletedResult.isError.text}
          </S.Message>
        )}
        {isSuccess && (
          <S.Message style={deletedResult.isSuccess.style}>
            {deletedResult.isSuccess.text}
          </S.Message>
        )}
        <button>Update Title</button>
      </div>
      <div className="user">USER {userId}</div>
      <p>{body}</p>
      <S.CommentContainer>
        <h3>Comments</h3>

        <ul>
          {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            <>
              {data?.map((comment) => (
                <S.Comment key={comment.id}>
                  <S.Writer>{comment.email}</S.Writer>
                  <S.Text>{comment.body}</S.Text>
                </S.Comment>
              ))}
            </>
          )}
        </ul>
      </S.CommentContainer>
    </S.PostContainer>
  );
}

export default Post;
