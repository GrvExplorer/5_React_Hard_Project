import { Navigate } from "react-router-dom";

function Home() {
  const Authenticated = false;
  return <div>{Authenticated ? <Navigate to="/sign-up" /> : <>Home</>}</div>;
}

export default Home;
