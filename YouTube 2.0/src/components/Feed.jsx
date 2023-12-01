import { useEffect, useState } from "react";

import { fetchYoutubeSearch } from "../utils/fetchFromAPI";
import { NavBar, SideBar, Videos } from "./index";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("new");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchYoutubeSearch(`search?part=snippet&q=${selectedCategory}`).then(
      (res) => setVideos(res.items),
    );
  }, [selectedCategory]);

  return (
    <div className="">
      <NavBar />
      <div className="flex">
        <div className="flex w-[25%]">
          <SideBar />
          <div className="opacity-2 sidebarH w-[1px] bg-gray-600"></div>
        </div>
        <Videos videos={videos} />
      </div>
    </div>
  );
}

export default Feed;
