import styled from "styled-components"
import Main from "./mainContent"
import Navbar from "./navbar"
import TopMenu from "./topMenu"

const Header = () => {
  return(
    <Container>
      <TopMenu />
      <Main />
      <Navbar />
    </Container>
  )
}


export default Header 

const Container = styled.header`
  background-color:black;
  padding-bottom:0.5px;
`

