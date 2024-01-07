import styled from "styled-components";
import CurrentTrack from "./CurrentTrack";

function Footer() {
  return (
    <Container>
      <CurrentTrack />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export default Footer;
