import { useState } from 'react';
import { useQueryPosts, usePrefetchQueryPosts } from '@hooks/queries';
import { Post as PostType } from '@apis/types';
import Post from '../post/Post';
import Title from '../title';
import * as S from './Posts.style';

const MAX_PAGE_NUMBER = 10;

function Posts() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedPost, setSelectedPost] = useState<PostType>();

  const {
    data: posts,
    isError,
    isLoading,
    error,
  } = useQueryPosts({ pageNumber: currentPage });

  usePrefetchQueryPosts({
    pageNumber: currentPage >= MAX_PAGE_NUMBER ? currentPage : currentPage + 1,
  });

  const handleClickPrev = () => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleClickNext = () => {
    if (currentPage >= MAX_PAGE_NUMBER) return;
    setCurrentPage(currentPage + 1);
  };

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
      <S.Left>
        <Title />
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
          <button onClick={handleClickPrev} disabled={currentPage <= 1}>
            Prev
          </button>
          <div>{`Page ${currentPage}`}</div>
          <button
            onClick={handleClickNext}
            disabled={currentPage >= MAX_PAGE_NUMBER}
          >
            Next
          </button>
        </S.ButtonContainer>
      </S.Left>

      <S.Right>{selectedPost && <Post {...selectedPost} />}</S.Right>
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
