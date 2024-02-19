import PostCards from "@/components/shared/PostCards";
import { useUserContext } from "@/context/AuthContext";
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Navigate } from "react-router-dom";

function Home() {
  const { isAuthenticated } = useUserContext();
  const { data: posts, isLoading: isPostLoading } = useGetRecentPosts();

  return (
    <div>
      {isAuthenticated ? (
        <>
        <h1 className="text-3xl font-bold mb-10">Home Feed</h1>
          <PostCards posts={posts} />
        </>
      ) : (
        <Navigate to="/sign-up" />
      )}
    </div>
  );
}

export default Home;
