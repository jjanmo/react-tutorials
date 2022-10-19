import axios from 'axios';
import { Comment, Post, UpdatePostPayload } from './types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (pageNumber: number) =>
  await axios
    .get<Post[]>(`${BASE_URL}/posts?_limit=10&_page=${pageNumber}`)
    .then((res) => res.data);

export const fetchComments = async (id: number) =>
  await axios
    .get<Comment[]>(`${BASE_URL}/comments?postId=${id}`)
    .then((res) => res.data);

export const deletePost = async (postId: number) =>
  await axios.delete(`${BASE_URL}/posts/${postId}`).then((res) => res.data);

export const updatePostTitle = async ({ postId, title }: UpdatePostPayload) =>
  await axios
    .patch<Post>(`${BASE_URL}/posts/${postId}`, {
      title,
    })
    .then((res) => res.data);
