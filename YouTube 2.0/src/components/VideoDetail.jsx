import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { request } from "../api/api.config";

function VideoDetail({ loading, setLoading }) {
  const { id } = useParams();
  const [videos, setVideos] = useState([1, 2])

  console.log(id);

  useEffect(() => {
    setLoading(true);
    request("/videos", {
      params: {
        part: 'snippet',
        id: id,
        maxResults: 15,
        type: 'video',
      },
    })
      .then((res) => {
        setLoading(false);
        console.log(res);
        setVideos(res.data.items);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);
  
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
