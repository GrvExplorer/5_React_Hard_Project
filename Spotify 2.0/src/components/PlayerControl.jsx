import axios from "axios";
import { actionTypes } from "../action/action.type";
import { BsFillPauseCircleFill, BsFillPlayCircleFill, BsShuffle } from "react-icons/bs";
import { CgPlayTrackNext } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { MdSkipPrevious } from "react-icons/md";
import { useStateProvider } from "../context/useState";
import { baseURL } from "../utils/constant";

function PlayerControl() {

const [{token, currentPlaying, playerState}, dispatch] = useStateProvider()
  
const changeState = async () => {
  const state = playerState ? "pause" : "play"
  const response = await axios.put(`${baseURL}/me/player/${state}`,{
    "context_uri": currentPlaying.context_uri,
    "offset": {
        "position": 5
    },
    "position_ms": 0
  }, 
  {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  }
  )
  dispatch({ type: actionTypes.SET_PLAYER_STATE, playerState: !playerState});
  console.log(playerState);
  console.log(response);
}

const skipTrack = async (type) => {
 const response =await axios.post(`${baseURL}/me/player/${type}`,{}
  , 
  {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  }
  )
  console.log(response);
}

const shuffleTrack = async () => {
 const response = await axios.put(`${baseURL}/me/player/shuffle`,{}
  , 
  {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    params: {
      state: !false
    }
  }
  )
  console.log(response);
}

const repeatTrack = async () => {
 const response = await axios.put(`${baseURL}/me/player/repeat`,{}
  , 
  {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  }
  )
  console.log(response);
}


  return (
      <div className="player_control">
    <div className="shuffle" onClick={shuffleTrack}>
<BsShuffle />
    </div>
    <div className="main">
      <div className="previous" onClick={() => skipTrack('previous')}>
        <MdSkipPrevious />
      </div>
      <div className="state" onClick={changeState}>
        {playerState ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
      </div>
      <div className="next" onClick={() => skipTrack('next')}>
        <CgPlayTrackNext />
      </div>
    </div>
    <div className="repeat" onClick={repeatTrack}>
      <FiRepeat />
    </div>
  </div>
  )
}

export default PlayerControl
