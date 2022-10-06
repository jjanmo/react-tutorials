import { useEffect, useState } from 'react';
import * as S from './Posts.style';

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function Posts() {
  const [posts, setPosts] = useState<Post[]>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedPost, setSelectedPost] = useState<Post>();

  const fetchPosts = async () => {
    return await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0'
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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

function Post({ body, id, title, userId }: Post) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{userId}</div>
      <p>{body}</p>
    </div>
  );
}
