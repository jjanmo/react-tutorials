import { useEffect, useState } from 'react';
import { useQueryPosts } from '../../hooks/queries/posts';
import { Post as PostType } from '../../types/posts';
import * as S from './Posts.style';

function Posts() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedPost, setSelectedPost] = useState<PostType>();

  const { data: posts } = useQueryPosts();

  if (!posts) return null;

  const handleClickPost = (id: number) => () => {
    const selected = posts?.find((post) => post.id === Number(id));
    setSelectedPost(selected);
  };

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

function Post({ body, id, title, userId }: PostType) {
  return (
    <S.PostContainer>
      <h3>{title}</h3>
      <div className="control-buttons">
        <button>Delete</button>
        <button>Update Title</button>
      </div>
      <div className="user">USER {userId}</div>
      <p>{body}</p>
    </S.PostContainer>
  );
}
