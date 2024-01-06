import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../Context/useState";
import { actionTypes } from "../action/action.type";
import { baseURL } from "../utils/constant";

function Playlist() {
  const [{ token, playlists }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const { data } = await axios.get(`${baseURL}/me/playlists`, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
        console.log(data);
        const { items } = data;
        const playlists = items.map(({ name, id }) => {
          return { name, id };
        });
        dispatch({ type: actionTypes.SET_PLAYLISTS, playlists });
        console.log(playlists);
      } catch (error) {
        console.log(error);
      }
    };
    getPlaylist();
  }, [token, dispatch]);

  return (
    <Container>
      <ul>
        {playlists.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 16px;
  height: 100%;
  overflow: hidden;
  margin-right: 4px;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    height: 52vh;
    max-height: 100%;
    overflow: auto;

    /* for scroll bar  */
    &::-webkit-scrollbar {
      width: 11.2px;
      &.thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
      }
    }
    :hover {
      color: white;
      cursor: pointer;
    }
    li {
      transition: 0.3s ease-in-out;
      color: #b3b3b3;
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

export default Playlist;
