import React from "react";

import { Link } from "react-router-dom";

import {SearchBar} from "./index";
import { logo } from "../utils/constants";

function NavBar({ setSelectedCategory }) {
  return (
    <div className="flex fixed w-full justify-between bg-Neutral  p-4 px-8 text-white z-10 ">
      <Link to="/feed">
        <img src={logo} alt="" className="h-10 w-10" />
      </Link>
        <SearchBar setSelectedCategory={setSelectedCategory} /> 
    </div>
  );
}

export default NavBar;
