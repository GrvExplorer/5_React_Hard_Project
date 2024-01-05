import styled from "styled-components"
import { FaSearch} from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { useStateProvider } from "../Context/useState"

function Navbar() {

  const [{userInfo}, dispatch] = useStateProvider()

  return (
    <Container>
<div className="search_bar">
  <FaSearch />
  <input type="text" placeholder="Artists, sonys or podcasts" />
</div>
<div className="avatar">
  <a href="a">
    <CgProfile />
    <span>{userInfo.name}</span>
  </a>
</div>
    </Container>
  )
}

const Container = styled.div``

export default Navbar