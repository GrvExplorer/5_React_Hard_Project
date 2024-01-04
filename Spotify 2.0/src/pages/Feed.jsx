import styled from "styled-components";
import { Footer, Navbar, Sidebar, SpotifyBody } from "../Components";

// TODO: style the feed component + fun
// TODO: UI + fun
// TODO: Deploy error fix

// Endpoint: https://api.spotify.com/v1/me;
// Endpoint: https://api.spotify.com/v1/me/player;

function Feed() {
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
  grid-template-columns: 20vh;
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
