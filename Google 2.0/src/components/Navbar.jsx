import { Link } from "react-router-dom";
import { useStateProvider } from "../context/useStateProvider";
import Navigation from "./Navigation";
import Search from "./Search";

function Navbar() {
  const [state, dispatch] = useStateProvider();

  return (
    <div className="">
      <div className="flex items-center justify-between p-3 px-8">
        <div className="rounded-md bg-blue-400 px-2 py-1 text-2xl font-bold text-white">
          <Link to="/">
            <p className="text-2xl ">Google 2.0 🔍</p>
          </Link>
        </div>
        <div className="">
          <Search />
        </div>
        <div className="w-[140px] rounded-full px-2 py-1">
          <button
            className="text-3xl"
            onClick={() =>
              dispatch({
                type: "TOGGLE",
                payload: state.theme === "light" ? "dark" : "light",
              })
            }
          >
            {state.theme === "light" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
      <Navigation />
      <div className="flex justify-center">
        <p className="text-xl text-gray-400  p-3 px-8">About {state.results?.queries?.request[0]?.totalResults} results ({state.results?.searchInformation?.formattedSearchTime} seconds for {state.results?.queries?.request[0]?.searchTerms})</p>
      </div>
    </div>
  );
}

export default Navbar;
