import axios from "axios";
import { IoVolumeHigh } from "react-icons/io5";
import styled from "styled-components";
import { useStateProvider } from "../context/useState";
import { baseURL } from "../utils/constant";

function Volume() {
  const [{ token }] = useStateProvider();

  const changeVolume = async (e) => {
    await axios.put(
      `${baseURL}/me/player/volume`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        params: {
          volume_percent: parseInt(e.target.value),
        },
      }
    );
  };

  return (
    <Container>
      <IoVolumeHigh />
      <input type="range" min={0} max={100} onMouseUp={changeVolume} />
    </Container>
  );
}

const Container = styled.div`
  color: white;
  font-size: 22px;
  padding-right: 34px;
  gap: 20px;
  width: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Volume;
