import { MdClear } from "react-icons/md";
import { useStateProvider } from "../context/useStateProvider";
function Search() {
  const [state, dispatch] = useStateProvider();

  return (
    <div className="rounded-full bg-white">
      <label htmlFor="search" className="flex items-center pr-4">
        <input
          type="text"
          id="search"
          value={state.searchQ}
          onChange={(e) => {
            dispatch({
              type: "SEARCH_Q",
              payload: e.target.value,
            })
          }}
          className="cursor-pointer rounded-full px-4 py-1 text-2xl focus:outline-none"
        />
        <MdClear
          className="text-xl font-semibold"
          onClick={() =>
            dispatch({
              type: "SEARCH_Q",
              payload: "",
            })
          }
        />
      </label>
    </div>
  );
}

export default Search;
