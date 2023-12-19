import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./components/Feed";

import { Authentication, ChannelDetail, SearchDetail, VideoDetail, Videos } from "./components";
import { useState } from "react";

// TODO: Search channelAvatar display 

function App() {
  const [loading, setLoading] = useState(true);

  const setupVideos = (data) => <Videos loading={data.loading} videos={data.videos} />

  const setupPlayer = (data) => <VideoDetail loading={data.loading} setLoading={data.setLoading} />

  const setupSearch = (data) => <SearchDetail 
  loading={data.loading} setLoading={data.setLoading}
  />

  const setupChannel = (data) => <ChannelDetail loading={data.loading} setLoading={data.setLoading} videos={data.videos} />


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/auth" element={<Authentication  />} />
          <Route
            path="/feed"
            element={<Feed loading={loading} Videos={setupVideos} setLoading={setLoading} />}
          />
          <Route
            path="/video/:id"
            element={<Feed setLoading={setLoading} Videos={setupPlayer}/>}
          />
          <Route path="/search/:keyword" element={<Feed 
          setLoading={setLoading} Videos={setupSearch}
          />} /> 
          <Route path="/channel/:id" element={<Feed 
          setLoading={setLoading} Videos={setupChannel}
          />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
