import { useEffect, useState } from 'react';
import { useQueryPosts } from '../../hooks/queries/posts';
import { Post as PostType } from '../../types/posts';
import * as S from './Posts.style';

function Posts() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedPost, setSelectedPost] = useState<PostType>();

  const { data: posts } = useQueryPosts();

  return (
    <S.Container>
      <S.PostList>
        {posts && posts.map((post) => <PostItem key={post.id} {...post} />)}
      </S.PostList>

      <S.ButtonContainer>
        <button>Prev</button>
        <div>{`Page ${currentPage + 1}`}</div>
        <button>Next</button>
      </S.ButtonContainer>

      <hr />

      {selectedPost && <Post {...selectedPost} />}
    </S.Container>
  );
}

export default Posts;

function PostItem({ title, id }: { title: string; id: number }) {
  return (
    <S.PostItem>
      <div>{title}</div>
    </S.PostItem>
  );
}

function Post({ body, id, title, userId }: PostType) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{userId}</div>
      <p>{body}</p>
    </div>
  );
}
