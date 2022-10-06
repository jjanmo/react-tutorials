import { useEffect, useState } from 'react';

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function Posts() {
  const [posts, setPosts] = useState<Post[]>();

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
    <div>
      <ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
    </div>
  );
}

export default Posts;

function Post({ body, id, title, userId }: Post) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
