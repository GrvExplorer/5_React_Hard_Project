import { Link } from "react-router-dom";
import logo from "/favicon.ico";

function Authentication() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white ">
      <img src={logo} alt="logo" className="mb-10" />
      <Link to="/" className="flex gap-4 ">
        <button className="flex items-center justify-center rounded-full border p-2 px-8 text-xl font-medium hover:bg-white hover:text-black">
          Login
        </button>

        <button className="flex items-center justify-center rounded-full border p-4 px-6 text-xl font-medium hover:bg-white hover:text-black">
          Sign up
        </button>
      </Link>
    </div>
  );
}

export default Authentication;
