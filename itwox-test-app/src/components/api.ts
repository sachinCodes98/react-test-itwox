import { useQuery } from "react-query";

export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("err: ", err);
  }
};

export const getComments = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
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
