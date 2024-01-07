import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { IoMdPlayCircle } from "react-icons/io";

import { actionTypes } from "../action/action.type";
import { useStateProvider } from "../context/useState";
import { baseURL } from "../utils/constant";


function SpotifyBody() {
  const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const { data } = await axios.get(
        `${baseURL}/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);

      const selectedPlaylist = {
        id: data.id,
        name: data.name,
        description: data.description,
        image: data.images[0].url,
        tracks: data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name == undefined ? "" : track.name,
          artists: track.artists.map(({ name }) => name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album_name: track.album.name,
          album: track.album.uri,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };

      console.log(selectedPlaylist);
      dispatch({ type: actionTypes.SET_SELECTED_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, selectedPlaylistId, dispatch]);

  function msToMin(ms) {
    var min = Math.floor((ms / 1000 / 60) << 0);
    var sec = Math.floor((ms / 1000) % 60);
    return min + ":" + sec;
  }

  return (
    <Container id={selectedPlaylist?.id}>
      <div className="playlist_head">
        <img src={selectedPlaylist?.image} alt="songs_photo" />
        <h1>{selectedPlaylist?.name}</h1>
      </div>
      <div className="playlist">
        <ul className="playlist_table_head">
          <li>#</li>
          <li>Title</li>
          <li>Album</li>
          <li><IoMdPlayCircle /></li>
        </ul>
        <div className="playlist_content">
          {selectedPlaylist?.tracks?.map((track, i) => (
            <ul className="playlist_table_content" key={track.id}>
              <li>{i+1}</li>
              <div className="title">
                <li>
                  <img src={track.image} alt="track_image" />
                </li>
                <div className="name">
                  <li>{track.name}</li>
                  <li>
                    {track.artists.map((name) => (
                      <p key={`${name}${track.id}`}>{name}</p>
                    ))}
                  </li>
                </div>
              </div>
              <li>{track.album_name}</li>
              <li>{msToMin(track.duration)}</li>
            </ul>
          ))}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  color: white;
  width: 100%;
  ul {
    list-style: none;
    display: grid;
    width: 100%;
    align-items: center;
      justify-content: center;
    grid-template-columns: 8% 45% 30% 10%;
  }
  .playlist_head {
    display: flex;
    margin-top: 210px;
    gap: 40px;
    text-align: center;
    align-items: center;
    margin-bottom: 40px;
  padding-left: 40px;

  }
  .playlist {
    width: 100%;
    .playlist_table_head {
    padding-left: 40px;
      margin-bottom: 42px;
      background-color: #00000096;
      height: 80px;
    }
   .playlist_content {
    display: flex;
  padding-left: 40px;

    flex-direction: column;
    gap: 20px;
    .playlist_table_content {
      &:hover {
        background-color: #00000060;
        transition: 0.4s ease-in-out;
      }
      padding: 8px 4px;
      transition: 0.4s ease-in-out;
      border-radius: 10px;
      .title {
        display: flex;
        gap: 12px;
        .name {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
      }
    }
   }
  }
`;

export default SpotifyBody;
