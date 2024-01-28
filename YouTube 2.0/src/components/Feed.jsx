import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../api/api.config";
import { fetchYoutubeSearch } from "../utils/fetchFromAPI";
import { NavBar, SideBar } from "./index";

function Feed({ loading, setLoading, Videos }) {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([1, 2, 2, 4, 5, 5, 8, 9, 9]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    // fetchYoutubeSearch(`search/`)
    request("/search", {
      params: {
        part: "snippet",
        regionCode: "IN",
        maxResults: 20,
        q: selectedCategory,
        type: "video",
        //  pageToken: getState().homeVideos.nextPageToken,
      },
    })
      .then(
        // this is async function so use .then
        (res) => {
          console.log(res);
          setVideos(res.data.items);
          setLoading(false);
          console.log(videos);
        },
      )
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="fixed flex">
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="h-screen w-[1px] bg-gray-500"></div>
          <div className="fixed left-52 top-16 z-50 ml-8 flex h-20 w-full items-center bg-Neutral pl-8 pt-2 text-white ">
            <p className="text-4xl font-bold ">
              {selectedCategory} <span className="text-Active">Video</span>
            </p>
          </div>
        </div>
        <div className="w-full bg-Neutral pb-4 pl-64 pt-36">
          {Videos({ loading, videos, setLoading })}
        </div>
      </div>
    </div>
  );
}

export default Feed;
