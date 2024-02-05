import { useGetPosts } from "@/lib/react-query/queriesAndMutations";
import { IPost } from "@/types";
import { Models } from "appwrite";
import { useEffect, useState } from "react";


function PostCard() {
  const [posts, setPosts] = useState();
  const { mutateAsync: getPosts, isLoading: isGettingPosts } = useGetPosts();

  useEffect(() => {
    // const Response = async () => await getPosts()
    // setPosts(Response)
  }, [getPosts]);

  return (
    <div>
{ posts.}
    </div>
  );
}

export default PostCard;
