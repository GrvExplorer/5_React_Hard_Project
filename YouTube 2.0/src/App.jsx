import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./components/Feed";
import { SearchDetail, VideoDetail } from "./components";
import { useState } from "react";


// TODO~ hover one div, icons, channels, Like and views in feed, [title, likes, views, channel = VideosDetails and SearchDetails ] fetch search endpoint, UI 

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Feed loading={loading} setLoading={setLoading} />}
          />
          <Route
            path="/video/:id"
            element={<VideoDetail loading={loading} setLoading={setLoading} />}
          />
          <Route path="/search/:q" element={<SearchDetail 
          loading={loading} setLoading={setLoading}
          />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
