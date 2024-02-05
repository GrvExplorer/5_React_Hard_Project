import { INewPost, INewUser } from "@/types";
import {
  // useInfiniteQuery,
  useMutation,
  // useQuery,
  // useQueryClient,
} from "@tanstack/react-query";
import { createPost, createUserAccount, getPosts, signInAccount, signOutAccount } from "../appwrite/api";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) => signInAccount(user),
  })
}
export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: () => signOutAccount(),
  })
}

export const useCreatePost = () => {
  return useMutation({
    mutationFn: (details: INewPost) => createPost(details),
  })
}

export const useGetPosts = () => {
  return useMutation({
    mutationFn: () => getPosts(),
  })
}