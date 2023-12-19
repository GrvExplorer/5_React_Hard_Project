import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { request } from "../api/api.config";

function VideoDetail({ loading, setLoading }) {
  const { id } = useParams();
  const [videos, setVideos] = useState([1, 2])

  useEffect(() => {
    setLoading(true);
    request("/search", {
      params: {
        part: 'snippet',
        relatedToVideo: id,
        regionCode: 'IN',
        maxResults: 15,
        type: 'video',
      },
    })
      .then((res) => {
        setVideos(res.data.items);
        setLoading(false);

      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });

  }, []);
  
  return (
    <>
      <div className=" px-4 flex flex-col gap-10">
        <div>
           <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width={'full'}
            height={'100vh'}
            controls
          /> 
        </div>
        <div>
          <Videos videos={videos} loading={loading} />
        </div>
      </div>
    </>
  );
}

export default VideoDetail;
