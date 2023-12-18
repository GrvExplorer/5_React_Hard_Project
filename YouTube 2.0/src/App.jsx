import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./components/Feed";

import { Authentication, ChannelDetail, SearchDetail, VideoDetail, Videos } from "./components";
import { useState } from "react";

// : hover one div, icons, 
// : channels, Like and views in feed, [title, likes, views, channel = VideosDetails and SearchDetails ] fetch search endpoint, UI 


// TODO: feed - searchChannel, videoChannel = channelPage recommendation, 

// TODO: SectionWapperComponent 
// TODO: API call for feed 
// TODO: Redirect to video player and recommendation 
// TODO: API call for channel View 

function App() {
  const [loading, setLoading] = useState(true);

  const setupVideos = (data) => <Videos loading={data.loading} videos={data.videos} />

  const setupPlayer = (data) => <VideoDetail loading={data.loading} setLoading={data.setLoading} />

  const setupSearch = (data) => <SearchDetail 
  loading={data.loading} setLoading={data.setLoading}
  />


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Authentication  />} />
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
          <Route path="/channel/:id" element={<ChannelDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
