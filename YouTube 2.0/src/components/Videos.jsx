import React from "react";
import { VideosCard } from ".";

function Videos({videos}) {
  return (
    <div className=" w-full bg-red-300 p-10 text-white ">
      {videos.map((video, i)=> {
        <div key={i}>
          {video.id.videoId && <VideosCard video={video} />}
        </div>
      })}
    </div>
  );
}

export default Videos;
