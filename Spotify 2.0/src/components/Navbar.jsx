import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useStateProvider } from "../Context/useState";

function Navbar() {
  const [{ userInfo }, dispatch] = useStateProvider();

  return (
    <Container>
      <div className="search_bar">
        <FaSearch />
        <input type="text"
        placeholder="Artists, sony's or podcasts" />
      </div>
      <div className="avatar">
        <a href="a">
          <CgProfile className="profile" />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4rem 2rem;
  .search_bar {
    background-color: #fff;
    width: 18rem;
    height: 2.2rem;
    border-radius: 9rem;
    padding: 0.3rem;
    display: flex;
    padding-left: 0.5rem;
    gap: 8px;
    align-items: center;
    input {
      padding: 4px;
      width: 90%;
      border: none;
      font-weight: 500;
      font-size: 16px;
      &:focus {
        outline: none;
      }
    }
  }
  .avatar {
    background-color: #000;
    border-radius: 28px;
    width: 10rem;
    text-align: center;
    a {
      outline: none;
      border: none;
      color: #b3b3b3;
      font-size: 20px;
      font-weight: 500;
      span {
        color: #fff;
        text-align: center;
      }
      .profile {
        font-size: 32px;
        outline: none;
      }
    }
  }
`;

export default Navbar;
