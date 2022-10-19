import { useQueryComments } from '@hooks/queries';
import { Post as PostType } from '@apis/types';
import * as S from './Post.style';

function Post({ body, id: postId, title, userId }: PostType) {
  const { data, isLoading } = useQueryComments({ postId });

  return (
    <S.PostContainer>
      <h3>{title}</h3>
      <div className="control-buttons">
        <button>Delete</button>
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
