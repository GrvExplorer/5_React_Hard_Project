import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="relative  text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 w-80 rounded-full focus:outline-none text-md "
        type="search"
        name="search"
        placeholder="Search..."
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <FaSearch className="text-red-500" />
      </button>
    </div>
  );
};

export default SearchBar;
