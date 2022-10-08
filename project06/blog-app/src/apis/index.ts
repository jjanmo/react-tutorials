import axios from 'axios';
import { Post } from '../types/posts';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () =>
  await axios
    .get<Post[]>(`${BASE_URL}/posts?_limit=10&_page=0`)
    .then((res) => res.data);
