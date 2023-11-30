import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./components/Feed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
