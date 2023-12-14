import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchYoutubeSearch } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import { NavBar, SideBar } from '.'

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
    <>
    <NavBar />
    <div className="bg-Neutral flex flex-col gap-8 ">
      <div className="">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width={'100%'} height={'80vh'} controls />
      </div>
     <div className="flex">
     <SideBar />
      <Videos videos={videos} loading={loading} />
     </div>
    </div>
    </>
  );
}

export default VideoDetail;
