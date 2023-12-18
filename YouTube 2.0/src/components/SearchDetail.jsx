import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChannelCard, Loader, NavBar, SideBar, Videos } from ".";
import { request } from "../api/api.config";

function SearchDetail({ loading, setLoading }) {
  const [videos, setVideos] = useState([1,2]);
  const [channels, setChannels] = useState([1]);
  const { keyword } = useParams();

  useEffect(() => {
    setLoading(true);
    request("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        q: keyword,
        type: "video,channel",
      },
    })
      .then((res) => {
        setLoading(false);
        console.log(res);
        setVideos(res.data.items);
        setChannels(res)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [keyword]);

  return (
    <>
      <div className="flex">
        <ChannelCard channel={videos} />
        <Videos videos={videos} loading={loading} />
      </div>
    </>
  );
}

export default SearchDetail;
