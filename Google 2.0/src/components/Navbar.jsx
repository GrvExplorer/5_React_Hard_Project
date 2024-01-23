import { Link } from "react-router-dom";
import Search from './Search'
import useStateProvider from '../context/useStateProvider'
import { useState } from "react";
import Navigation from "./Navigation";

function Navbar() {
const [mode, setMode] = useState(true)
  // const [state, dispatch] = useStateProvider()

  return (
    <div className="">
      <div className="flex items-center justify-between p-3 px-8">
      <div className="bg-blue-400 rounded-md px-2 py-1 text-2xl font-bold text-white">
        <Link to="/" >
          <p className="text-2xl ">Google 2.0 🔍</p>
        </Link>
      </div>
      <div className="">
        <Search />
      </div>
      <div className="rounded-full px-2 py-1 w-[140px]">
        <button className="text-3xl" onClick={() => setMode(!mode)}>
          {mode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </div>
    <Navigation />
    </div>
  );
}

export default Navbar;
