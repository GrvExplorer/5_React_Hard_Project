import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStateProvider } from "../context/useStateProvider";
import { BASE_URL } from "../utils/constants";

function Results() {
  const { pathname } = useLocation();
  const [state, dispatch] = useStateProvider();

  useEffect(() => {
    const getResults = async () => {
      fetch(
        `${BASE_URL}?key=${import.meta.env.VITE_GOOGLE_SEARCH_API_KEY}&cx=${import.meta.env.VITE_GOOGLE_SEARCH_ENGINE_ID}&q=${state.searchQ || "coding"}`,
      )
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: "RESULTS", payload: res });
        })
        .catch((err) => console.log(err));
    };

    getResults();
  }, [state.searchQ, dispatch]);

  const items = state.results?.items;

  

  switch (pathname) {
    case "/search":
      return (
        <div className="flex gap-8 flex-col">
          {items?.map((item) => (
            <div className="px-8 py-3" key={item?.cacheId}>
              <a href={item?.link} >
                <div className="flex gap-2">
                  <div className="">
                    <img
                      src={item?.pagemap?.cse_image === undefined ? "" : item?.pagemap?.cse_image[0]?.src}
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <p className="text-2xl">
                    {item?.displayLink
                      .split(".")
                      .filter((item) => item !== "www")
                      .join(" ")}
                  </p>
                </div>
                <p className="text-xl text-blue-400">{item?.htmlTitle}</p>
                <p className="text-lg text-gray-500">{item?.snippet}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return <div>Images</div>;
    case "/news":
      return <div>News</div>;
    case "/videos":
      return <div>Videos</div>;
    default:
      break;
  }
}

export default Results;
