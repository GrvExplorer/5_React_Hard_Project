import styled from "styled-components";
import { login_logo } from "../utils/constant";

const handelLogin = (e) => {
  e.preventDefault()
  const client_id = '7f97b2cc559042fca9d3a248b1aaec01'
  const redirect_uri = 'http://localhost:8000'
  const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
  ]
  window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
    " "
  )}&response_type=token&show_dialog=true`;
}

function Login() {


  return (
    <Container>
        <div>
          <img src={login_logo} alt="Spotify" />
        </div>
        <div>
        <button onClick={e => handelLogin(e)} type="button">Connect Spotify</button>
        </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #1cc71c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  img {
    height: 120px;
  }
  button {
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    padding: 12px 28px;
    border: none;
    border-radius: 40px;
    color: #1cc71c;
    background-color: #000;
  }
`;

export default Login;
