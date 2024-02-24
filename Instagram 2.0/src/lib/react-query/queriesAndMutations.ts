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
  setPostSaves,
  signInAccount,
  signOutAccount,
} from "../appwrite/api";
import { QUERY_KEYS } from "./queryKeys";
import { string } from "zod";

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
    mutationFn: ({postId, likesArray}: {
      postId: string;
      likesArray: string[];
    }) => setPostLikes(postId, likesArray),
  });
};
export const useSetPostSaves = () => {
  return useMutation({
    mutationFn: (
      {postId, savesArray}: {
        postId: string;
        savesArray: string[];
      }
    ) => setPostSaves(postId, savesArray)
  })
};
