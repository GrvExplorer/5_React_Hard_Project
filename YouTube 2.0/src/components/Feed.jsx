import { useEffect, useState } from "react";

import { fetchYoutubeSearch } from "../utils/fetchFromAPI";
import { NavBar, SideBar, Videos } from "./index";

function Feed({ loading, setLoading }) {
  const [selectedCategory, setSelectedCategory] = useState("new");
  const [videos, setVideos] = useState([1, 2, 3, 4, 5, 8]);

  useEffect(() => {
    setLoading(true);
    fetchYoutubeSearch(`search/`).then(
      // this is async function so use .then
      (res) => {
        setVideos(res.items);
        setLoading(false);
        console.log(videos);
      },
    ).catch(err => {console.log(err) 
      setLoading(false)})

  }, [selectedCategory]);

  return (
    <div className="">
      <NavBar />
      <div className="flex">
        <div className="fixed flex">
          <SideBar />
          <div className="h-screen w-[1px] bg-gray-500"></div>
          <div className="fixed left-52 top-16 ml-8 flex h-20 w-full items-center bg-Neutral  text-white ">
            <p className="text-4xl font-bold ">
              New <span className="text-Active">Video</span>
            </p>
          </div>
        </div>
        <Videos videos={videos} loading={loading} />
      </div>
    </div>
  );
}

export default Feed;
