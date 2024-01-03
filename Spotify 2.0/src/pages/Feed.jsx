import styled from "styled-components";
import { Body, Footer, Navbar, Sidebar } from "../Components";

// Endpoint: https://api.spotify.com/v1/me;
// Endpoint: https://api.spotify.com/v1/me/player;

function Feed() {
  return (
    <Container>
      <div className="spotify__body">
        <Sidebar />
        <div className="body">
          <Navbar />
          <div className="body__contents">
            <Body />
          </div>
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
  grid-template-areas: 
  '';
  .spotify__body {

  }
  .body {
    background-color: ;
    grid-area: body;
  }
  .spotify__footer {
    background-color: #181818;
    opacity: 90%;
    width: 100%;
    height: 20vh;
  }
`;

export default Feed;
