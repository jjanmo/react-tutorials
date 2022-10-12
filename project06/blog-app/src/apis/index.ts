import axios from 'axios';
import { Comment, Post } from '../types/posts';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (pageNumber: number) =>
  await axios
    .get<Post[]>(`${BASE_URL}/posts?_limit=10&_page=${pageNumber}`)
    .then((res) => res.data);

export const fetchComments = async (id: number) =>
  await axios
    .get<Comment[]>(`${BASE_URL}/comments?postId=${id}`)
    .then((res) => res.data);