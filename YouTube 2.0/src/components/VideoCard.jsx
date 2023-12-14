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
import { AiTwotoneLike } from 'react-icons/ai'


// import { demoProfilePicture } from '../utils/constants'

function VideoCard({ video:{ snippet, statistics, id } }) {


  return (
    <div className="flex w-fit flex-col ">
      <img src={snippet?.thumbnails?.default?.url || demoThumbnailUrl} alt="" className={`h-[${snippet?.thumbnails?.default?.height || 200}px] w-[${snippet?.thumbnails?.default?.width || 400} px]`} />

      <div className="flex pb-4 gap-3 pl-3 pt-4 bg-[#1e1e1e] rounded-md shadow-sm">
{/* // channel  */}
        <Link to={demoChannelUrl}>
          <img
            src={demoProfilePicture}
            alt=""
            className="h-10 w-10 rounded-full "
          />
        </Link>

        <div>

{/* // video play */}
          <Link to={`/video/${id?.videoId}` || demoVideoUrl} onClick={scrollTo(0, 0)}>
          <p className="w-[300px] cursor-pointer text-2xl font-semibold">{snippet?.title || demoVideoTitle}</p>
          </Link>

          <div className="flex justify-between">

{/* // channel */}
          <Link to >
          <p className="text-lg font-medium">{snippet?.channelTitle ||demoChannelTitle}</p>
          </Link>

            <p className="text-md text-gray-400 font-medium flex justify-center items-center gap-2 ">{
              statistics?.likeCount || 12
            }
            <span className="text-xl text-gray-400 "><AiTwotoneLike /></span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );

}

export default VideoCard;
