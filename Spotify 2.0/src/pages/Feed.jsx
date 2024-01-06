import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { Footer, Navbar, Sidebar, SpotifyBody } from "../Components";
import { useStateProvider } from "../Context/useState";
import { actionTypes } from "../action/action.type";
import { baseURL } from "../utils/constant";

// TODO: style the feed component + fun
// TODO: UI + fun
// TODO: Deploy error fix

// Endpoint: https://api.spotify.com/v1/me;
// Endpoint: https://api.spotify.com/v1/me/player;

function Feed() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const getUserInfo = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/me`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });     
      console.log(data);
      const { display_name, id } = data;
      const userInfo = {
        userId: id,
        userName: display_name,
      };
      dispatch({ type: actionTypes.SET_USER, userInfo });
    } catch (error) {
      console.log(error);
    }
    };
    getUserInfo();
  }, [token, dispatch]);

  return (
    <Container>
      <div className="spotify__sidebar">
        <Sidebar />
      </div>
      <div className="body">
        <Navbar />
        <div className="body__contents">
          <SpotifyBody />
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 25vh;
  grid-template-areas:
    "sidebar body body"
    "sidebar body body"
    "footer footer footer";
  .body {
    grid-area: body;
    background: linear-gradient(transparent, rgb(0, 0, 0));
    height: 85vh;
    background-color: #163d46;
  }
  .spotify__sidebar {
    background-color: #000000;
    grid-area: sidebar;
    height: 85vh;
  }
  .spotify__footer {
    grid-area: footer;
    background-color: #181818;
    opacity: 90%;
    width: 100%;
    height: 15vh;
  }
`;

export default Feed;
