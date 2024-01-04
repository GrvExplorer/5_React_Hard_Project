import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../Context/useState";
import { actionTypes } from "../action/action.type";
import { baseURL } from "../utils/constant";

function Playlist() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const {data} = await axios.get(
          `${baseURL}/artists/4Z8W4fKeB5YxbusRsdQVPb`,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data);
        // const {items} = data
        // const playlists = items.map(({name, id}) => {
        //   return {name, id}
        // })
        // dispatch({ type: actionTypes.SET_PLAYLISTS, playlists });
        // console.log(playlists);

      } catch (error) {
        console.log(error);
      }
    };
    getPlaylist()
  }, [token, dispatch]);

  return <Container>Playlist</Container>;
}

const Container = styled.div``;

export default Playlist;
