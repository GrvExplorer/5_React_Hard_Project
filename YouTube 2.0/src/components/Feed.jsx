import { useEffect, useState } from "react";
import {fetchYoutubeSearch} from '../utils/fetchFromAPI'
import NavBar from "./NavBar";



function Feed() {

  const [selectedCategory, setSelectedCategory] = useState("new");

  // useEffect(() => {
  //   fetchYoutubeSearch(`q=${selectedCategory}`);
  // }, [selectedCategory]);


  return (
    <div className=" ">
      <NavBar />
    </div>
  )
}

export default Feed