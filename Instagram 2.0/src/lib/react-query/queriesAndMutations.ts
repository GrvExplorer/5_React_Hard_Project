import { INewPost, INewUser } from "@/types";
import {
  // useInfiniteQuery,
  useMutation,
  useQueries,
  useQuery,
} from "@tanstack/react-query";
import { Models } from "appwrite";
import {
  createPost,
  createUserAccount,
  getRecentPosts,
  setPostLikes,
  signInAccount,
  signOutAccount,
} from "../appwrite/api";
import { QUERY_KEYS } from "./queryKeys";

// User
export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};
export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: () => signOutAccount(),
  });
};

export const useGetUserPosts = () => {
  return;
};

export const useGetUserDetails = () => {
  return;
};

export const useSetUserDetails = () => {
  return;
};

export const useGetUserSaves = () => {
  return;
};

export const useGetUserLikes = () => {
  return;
};

// Posts
export const useCreatePost = () => {
  return useMutation({
    mutationFn: (details: INewPost) => createPost(details),
  });
};

export const useGetRecentPosts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
    queryFn: getRecentPosts,
  });
};

export const useGetPopularPosts = () => {
  return;
};
export const useSetPostLikes = () => {
  return useMutation({
    mutationFn: (post: Models.Document, userId: string) => setPostLikes(post, userId),
  });
};
export const useSetPostSaves = () => {
  return;
};
