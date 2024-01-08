import { useQuery } from 'react-query';

export const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

export const getComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();
  return data;
};

export const usePosts = () => {
  return useQuery('posts', getPosts);
};

export const useComments = () => {
  return useQuery('comments', getComments);
};