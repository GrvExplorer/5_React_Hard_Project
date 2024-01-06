import axios from "axios";
import styled from "styled-components";
import { Playlist } from "../Components";
import { spotify_categories } from "../utils/constant";

function Sidebar() {
  return (
    <Container>
      <div className="spotify__logo">
        <a href="">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify logo"
          />
        </a>
      </div>

      <div className="spotify__categories">
        {spotify_categories.map((category, i) => (
          <div className="category" key={`${category.name + i}`}>
            <div className="category__logo">{category.logo}</div>
            <p> {category.name} </p>
          </div>
        ))}
      </div>
      <div className="spotify__playlist">
        <hr className="horizontal_line" />
        <Playlist />
      </div>
    </Container>
  );
}

const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .spotify__logo {
    margin-left: 16px;

    padding-top: 20px;
    img {
      color: white;
      max-inline-size: 80%;
    }
  }
  .spotify__categories {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 16px;

  }
  .category {
 
      display: flex;
      font-size: 19px;
      gap: 8px;
      color: #b3b3b3;
      transition: 0.3s ease-in-out;
      &:hover {
        color: white;
        cursor: pointer;
    
        .category__logo {
          color: white;
          cursor: pointer;
    
        }
    }
  }
  .spotify__playlist {
    hr {
      height: 1px;
      background-color: #b3b3b3;
    }
  }
`;

export default Sidebar;
