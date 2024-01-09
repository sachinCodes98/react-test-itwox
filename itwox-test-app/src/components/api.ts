// api.ts
import { useQuery } from "react-query";

const postsApi = process.env.REACT_APP_POSTS_API;
const commentsApi = process.env.REACT_APP_COMMENTS_API;

if (!postsApi || !commentsApi) {
  throw new Error("API URLs are not defined in the environment variables.");
}

export const getPosts = async () => {
  try {
    const response = await fetch(postsApi);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("err: ", err);
  }
};

export const getComments = async () => {
  try {
    const response = await fetch(commentsApi);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("err: ", err);
  }
};

export const usePosts = () => {
  return useQuery("posts", getPosts);
};

export const useComments = () => {
  return useQuery("comments", getComments);
};
