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

function VideoCard({ video:{ snippet, statistics, id } }) {
  return (
<>
<div className="flex w-fit flex-col ">
      <img src={snippet?.thumbnails?.default?.url || demoThumbnailUrl} alt="" className={`h-[${snippet?.thumbnails?.default?.height || 200}px] w-[${snippet?.thumbnails?.default?.width || 400} px] h-60`}  />

      <div className="flex pb-4 pl-3 pt-4 justify-between bg-[#1e1e1e] rounded-md shadow-sm">
{/* // channel  */}
        <Link  to={`/channel/${snippet?.channelId}` || demoChannelUrl } >
          <img
            src={snippet?.thumbnails?.high?.url ||demoProfilePicture}
            alt=""
            className="rounded-full h-10 w-10 border p-1"
          />
        </Link>

        <div>

{/* // video play */}
          <Link to={`/video/${id?.videoId}` || demoVideoUrl} onClick={scrollTo(0, 0)}>
          <p className="w-[366px] pl-2 cursor-pointer text-lg font-semibold">{snippet?.title || demoVideoTitle}</p>
          </Link>

          <div className="flex justify-between px-2">

{/* // channel */}
          <Link to={`/channel/${snippet?.channelId}` || demoChannelUrl} >
          <p className="text-md text-gray-400 font-medium">{snippet?.channelTitle ||demoChannelTitle}</p>
          </Link>

            <p className="text-md text-gray-400 font-medium flex justify-center items-center gap-2  ">{
              statistics?.likeCount || '63k'
            }
            <span className="text-xl text-gray-400 "><AiTwotoneLike /></span>
            </p>
          </div>
        </div>
      </div>

    </div>
 
</>
  );

}

export default VideoCard;
