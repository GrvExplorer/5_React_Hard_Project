import { Navigate, Route, Routes } from "react-router-dom";
import Results from "./Results";
import NotFound from "./not-found";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/search' />}></Route>
      <Route path="/images" element={<Results />}></Route>
      <Route path="/news" element={<Results />}></Route>
      <Route path="/videos" element={<Results />}></Route>
      <Route path="/search" element={<Results />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
