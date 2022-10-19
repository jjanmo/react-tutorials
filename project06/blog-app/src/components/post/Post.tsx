import { useQueryComments, useMutationDeletePost } from '@hooks/queries';
import { Post as PostType } from '@apis/types';
import * as S from './Post.style';
import useMutationTitle from '@hooks/queries/useMutationTitle';
import React, { useState } from 'react';

const actionResultsMap = (action = '') => ({
  isLoading: {
    style: {
      color: 'green',
    },
    text: action,
  },
  isError: {
    style: {
      color: 'red',
    },
    text: action,
  },
  isSuccess: {
    style: {
      color: 'dodgerblue',
    },
    text: action,
  },
});

function Post({ body, id: postId, title, userId }: PostType) {
  const [newTitle, setNewTitle] = useState(title);
  const setTitle = (title: string) => setNewTitle(title);
  const [hidden, setHidden] = useState(true);
  const [value, setValue] = useState('');

  const { data, isLoading } = useQueryComments({ postId });
  const {
    mutate: deletePostById,
    isLoading: isDeleting,
    isError,
    isSuccess,
  } = useMutationDeletePost();
  const { mutate: updateTitle, isLoading: isUpdating } = useMutationTitle({
    setTitle,
  });

  const handleClickDelete = () => {
    const result = window.confirm('Really delete this?');

    if (result) deletePostById({ postId });
  };

  const handleClickToggle = () => {
    setHidden(!hidden);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateTitle({
      postId,
      title: 'Hello World',
    });
    setValue('');
    setHidden(!hidden);
  };

  return (
    <S.PostContainer>
      <h3>{newTitle}</h3>
      <div className="control-buttons">
        <button onClick={handleClickDelete}>Delete</button>

        <button onClick={handleClickToggle}>Update Title</button>
      </div>
      <S.MessageWrapper>
        {isDeleting && (
          <S.Message style={actionResultsMap().isLoading.style}>
            {actionResultsMap('Post deleting').isLoading.text}
          </S.Message>
        )}
        {isError && (
          <S.Message style={actionResultsMap().isError.style}>
            {actionResultsMap('Error on deleting post').isError.text}
          </S.Message>
        )}
        {isSuccess && (
          <S.Message style={actionResultsMap().isSuccess.style}>
            {actionResultsMap('Post deleted').isSuccess.text}
          </S.Message>
        )}
        {isUpdating && (
          <S.Message style={actionResultsMap().isLoading.style}>
            {actionResultsMap('Title updating').isLoading.text}
          </S.Message>
        )}
      </S.MessageWrapper>
      <S.Form hidden={hidden} onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value} />
      </S.Form>
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
