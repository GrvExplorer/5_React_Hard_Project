import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchYoutubeSearch } from "../utils/fetchFromAPI";
import Videos from "./Videos";

function VideoDetail({ loading, setLoading }) {
  const { id } = useParams();
  const [videos, setVideos] = useState([])

  useEffect(() => {
    setLoading(true);
    fetchYoutubeSearch("search/")
      .then((res) => {
        setLoading(false);
        setVideos(res.items)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      });
  }, []);

  return (
    <div>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
      <Videos videos={videos} loading={loading} />
    </div>
  );
}

export default VideoDetail;
