import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import { CgPlayTrackNext } from "react-icons/cg";
import { FiRepeat } from 'react-icons/fi'
import { MdSkipPrevious } from "react-icons/md";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import styled from "styled-components";


import axios from "axios";
import { useEffect } from "react";
import { actionTypes } from "../action/action.type";
import { useStateProvider } from "../context/useState";
import { baseURL } from "../utils/constant";

function CurrentTrack() {
  const [{ token, currentPlaying, playerState }, dispatch] = useStateProvider();

  useEffect(() => {
    async function getCurrentPlaying() {
      const res = await axios.get(
        `${baseURL}/me/player/currently-playing`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      const currentPlaying = {
        name: res.name,
        image: res,
        artists: res,
      };
      const playerState = res.is_playing;
      dispatch({ type: actionTypes.SET_PLAYER_STATE, playerState });
      dispatch({ type: actionTypes.SET_PLAYING, currentPlaying });
    }
    getCurrentPlaying()
  }, []);

  return (
    <Container>
      <div className="display">
        <div className="track_image">
          <img src={currentPlaying.image} alt="track image" />
        </div>
        <div className="title">
          <p className="name">{currentPlaying?.name}</p>
          <p className="artist">{currentPlaying?.artist}</p>
        </div>
      </div>
      <div className="player_control">
       <div className="main">
       <div className="previous">
        <MdSkipPrevious />
        </div>
        <div className="state">
          {playerState ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
        </div>
        <div className="next">
          <CgPlayTrackNext />
        </div>
       </div>
        <div className="repeat">
          <FiRepeat />
        </div>
      </div>
      <div className="player_volume">
        volume
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .display {
    height: 100%;
    padding-left: 34px;
    display: flex;
    gap: 20px;
    align-items: center;
    .track_image {
      img {
        width: 80px;
        height: 80px;
      }
    }
    .title {
      color: white;
      font-size: 20px;
      font-weight: 800;
      .artist {
        font-size: 16px;
        color: #ffffff9c;
        font-weight: 600;
      }
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
  .player_control {
    padding: 0px 20px;
    .main {
gap: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    color: white;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
  }
  .player_volume {
    padding-right: 34px;

    display: flex;
      justify-content: center;
      align-items: center;
  }
`;

export default CurrentTrack;
