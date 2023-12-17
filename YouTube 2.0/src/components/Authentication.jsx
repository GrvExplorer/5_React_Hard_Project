import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase/firebase.config";
import logo from "/favicon.ico";

function Authentication() {
  const navigate = useNavigate();

  const login = () => {
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate('/feed')
        const accessToken = res.user.accessToken

        const profile = {
           name: res.user.displayName,
           photoURL: res.user.photoURL,
        }
  console.log(accessToken, profile);

        sessionStorage.setItem('ytc-access-token', accessToken)
        sessionStorage.setItem('ytc-user', JSON.stringify(profile))
      })
 
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white ">
      <img src={logo} alt="logo" className="mb-10" />
      <Link className="flex gap-4 ">
        <button
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
          className="flex items-center justify-center rounded-full border p-2 px-8 text-xl font-medium hover:bg-white hover:text-black"
        >
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
