import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../apis';

export const useQueryPosts = () => useQuery(['posts'], fetchPosts);
