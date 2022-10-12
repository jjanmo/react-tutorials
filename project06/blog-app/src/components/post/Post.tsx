import { useQueryComments } from '../../hooks/queries/posts';
import { Post as PostType } from '../../types/posts';
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
        <h3>Coments</h3>

        <ul>
          {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            <>
              {data?.map((comment) => (
                <li key={comment.id}>{comment.body}</li>
              ))}
            </>
          )}
        </ul>
      </S.CommentContainer>
    </S.PostContainer>
  );
}

export default Post;
