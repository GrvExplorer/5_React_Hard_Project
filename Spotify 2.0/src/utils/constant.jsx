
import login_logo from '../assets/login_Spotify.png' 
import logo from '../assets/spotify_logo.png'

import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdLibraryMusic } from "react-icons/md";

export const spotify_categories = [
  {logo: <IoMdHome />, name: 'Home'},
  {logo: <IoIosSearch />, name: 'Search'},
  {logo: <MdLibraryMusic />, name: 'Your Library'},
]

export const baseURL =  'https://api.spotify.com/v1'


export {login_logo, logo}