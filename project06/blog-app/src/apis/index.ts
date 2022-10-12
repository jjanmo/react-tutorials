import axios from 'axios';
import { Comment, Post } from '../types/posts';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () =>
  await axios
    .get<Post[]>(`${BASE_URL}/posts?_limit=12&_page=0`)
    .then((res) => res.data);

export const fetchComments = async (id: number) =>
  await axios
    .get<Comment[]>(`${BASE_URL}/comments?postId=${id}`)
    .then((res) => res.data);
