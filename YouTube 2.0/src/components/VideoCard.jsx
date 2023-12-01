import React from "react";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoProfilePicture,
  demoVideoUrl,
  demoChannelUrl,
  demoVideoTitle,
} from "../utils/constants";
import { Link } from "react-router-dom";
// import { demoProfilePicture } from '../utils/constants'

function VideoCard({ video: {id: {videoId}, snippet} }) {
  return (
    <div className="flex w-fit flex-col ">
      <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt="" className="h-[200px] w-[400px]" />

      <div className="flex pb-4 gap-3 pl-3 pt-4 bg-[#1e1e1e] rounded-md shadow-sm">
        <Link to={demoChannelUrl}>
          <img
            src={demoProfilePicture}
            alt=""
            className="h-10 w-10 rounded-full "
          />
        </Link>
        <div className="">
          <p className="w-[300px] text-2xl font-semibold">{demoVideoTitle}</p>
          <p className="text-lg font-medium">{demoChannelTitle}</p>
        </div>
      </div>

    </div>
  );

}

export default VideoCard;
