import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../api/api.config";
import Videos from "./Videos";

function ChannelDetail({ loading, setLoading }) {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [channelVideos, setChannelVideos] = useState([1, 2]);

  useEffect(() => {
    const handelChannel = async () => {
      setLoading(true)
      try {
        const { data } = await request("/channels", {
          params: {
            part: "snippet,contentDetails,statistics",
            id: id,
          },
        });
        setChannel(data.items[0].snippet);
        console.log(data.items[0].snippet);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    };

    const handelChannelVideos = async () => {
      setLoading(true)
      try {
        const {data} = await request("/search", {
          params: {
            part: "snippet,id",
            channelId: id,
            order: 'date',
            maxResults: 20,
          },
        });
        setChannelVideos(data.items)
        console.log(data.items);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    };

    handelChannelVideos()
    handelChannel();
  }, []);
console.log(channel);
  return (
    <div>
      <div className="mb-20 flex flex-col justify-center items-center">
        <div className="h-24 w-24 mb-8 p-1 flex items-center justify-center rounded-full border border-white">
          <img className="rounded-full" src={channel?.thumbnails?.default?.url} alt="channelLogo" />
        </div>
        <p className="text-4xl text-white font-semibold ">{channel?.title}</p>
      </div>

      <div>
        <Videos loading={loading} videos={channelVideos} />
      </div>
    </div>
  );
}

export default ChannelDetail;
