import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
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
          name: track.name == undefined ? '': track.name,
          artists: track.artists.map(({ name }) => {
            name;
          }),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.uri,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };

      dispatch({ type: actionTypes.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, selectedPlaylistId, dispatch]);

console.log(selectedPlaylist);

  return <Container></Container>;
}

const Container = styled.div``;

export default SpotifyBody;
