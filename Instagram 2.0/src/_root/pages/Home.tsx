import PostCard from "@/components/shared/PostCard";
import { useUserContext } from "@/context/AuthContext";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Home() {
  const { isAuthenticated } = useUserContext()

  return <div>{isAuthenticated ? (
    <>
    <PostCard />
    </>
  ) : <Navigate to="/sign-up" />}</div>;
}

export default Home;
