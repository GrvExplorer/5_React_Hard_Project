import React from "react";

import { Link } from "react-router-dom";

import {SearchBar} from "./index";
import { logo } from "../utils/constants";

function NavBar() {
  return (
    <div className="flex w-full justify-between bg-black p-4 px-8 text-white ">
      <Link to="/">
        <img src={logo} alt="" className="h-10 w-10" />
      </Link>
        <SearchBar /> 
    </div>
  );
}

export default NavBar;
