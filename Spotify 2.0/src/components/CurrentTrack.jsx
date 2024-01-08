import styled from "styled-components";

import axios from "axios";
import { useEffect } from "react";
import { actionTypes } from "../action/action.type";
import { useStateProvider } from "../context/useState";
import { baseURL } from "../utils/constant";
import PlayerControl from "./PlayerControl";
import Volume from "./Volume";

function CurrentTrack() {
  const [{ token, currentPlaying}, dispatch] = useStateProvider();

  useEffect(() => {
    async function getCurrentPlaying() {
      const { data } = await axios.get(
        `${baseURL}/me/player/currently-playing`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const currentPlaying = {
        id: data.item.id,
        name: data.item.name,
        image: data.item.album.images[0].url,
        artists: data.item.artists,
        context_uri: data.context.uri
      };
      const playerState = data.is_playing;
      dispatch({ type: actionTypes.SET_PLAYER_STATE, playerState });
      dispatch({ type: actionTypes.SET_PLAYING, currentPlaying });
    }
    getCurrentPlaying();
  }, [token, currentPlaying, dispatch]);


  return (
    <Container>
      <div className="display">
        <div className="track_image">
          <img src={currentPlaying?.image} alt="track image" />
        </div>
        <div className="title">
          <p className="name">{currentPlaying?.name}</p>
          <p className="artist">
            {currentPlaying?.artists.map(({name}, i) => (
              <p key={`${name}-${i}`}>{name}</p>
            ))}
          </p>
        </div>
      </div>
     <PlayerControl />
     <Volume />
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
    color: white;
    display: flex;
    align-items: center;
    gap: 28px;
    .main {
    font-size: 36px;
      gap: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default CurrentTrack;
