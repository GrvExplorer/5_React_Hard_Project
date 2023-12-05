import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <div className="relative  text-gray-600">
      <form
        onSubmit={(e) => {
          navigate(`/search/${e.target.value}`)
          console.log(e.target.input);
          ;
        }}
      >
        <input
          className="text-md h-10 w-80 rounded-full border-2 border-gray-300 bg-white px-5 pr-16 font-medium focus:outline-none "
          type="search"
          name="search"
          placeholder="Search..."
        />
        <button type="submit" className="absolute right-0 top-0 mr-4 mt-3">
          <FaSearch className="text-red-500" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
