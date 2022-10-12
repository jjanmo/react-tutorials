import { useState } from 'react';
import { useQueryPosts } from '../../hooks/queries/posts';
import { Post as PostType } from '../../types/posts';
import Post from '../post/Post';
import * as S from './Posts.style';

function Posts() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedPost, setSelectedPost] = useState<PostType>();

  const { data: posts, isError, isLoading, error } = useQueryPosts();

  const handleClickPost = (id: number) => () => {
    const selected = posts?.find((post) => post.id === Number(id));
    setSelectedPost(selected);
  };

  if (isLoading)
    return (
      <S.Container>
        <h2>Loading...</h2>
      </S.Container>
    );

  if (isError)
    return (
      <S.Container>
        <h2>Opps Something wrong 😵</h2>
        <div>{error?.toString()}</div>
      </S.Container>
    );

  return (
    <S.Container>
      <S.PostList>
        {posts &&
          posts.map((post) => (
            <PostItem
              key={post.id}
              {...post}
              onClick={handleClickPost(post.id)}
            />
          ))}
      </S.PostList>
      <S.ButtonContainer>
        <button>Prev</button>
        <div>{`Page ${currentPage + 1}`}</div>
        <button>Next</button>
      </S.ButtonContainer>

      <S.Line />

      {selectedPost && <Post {...selectedPost} />}
    </S.Container>
  );
}

export default Posts;

function PostItem({
  title,
  id,
  onClick,
}: {
  title: string;
  id: number;
  onClick: () => void;
}) {
  return (
    <S.PostItem onClick={onClick}>
      <div>{title}</div>
    </S.PostItem>
  );
}
