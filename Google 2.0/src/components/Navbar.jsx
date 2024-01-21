import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-wrap p-5 pb-0 sm:justify-center">
      <div className="flex items-center justify-center">
        <Link to="/" className="bg-blue-400">
          <p className="text-2xl ">Google 2.0 🔍</p>
        </Link>
      </div>
    
    </div>
  );
}

export default Navbar;
