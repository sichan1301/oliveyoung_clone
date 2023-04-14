import styled from "styled-components"

const Main = () => {
  return(
    <MainDiv>
      <MainLogo>
        <a href =""><img src={require('../imgs/cost.jpg')} /></a>
      </MainLogo>
   
      <SearchBar />

      <MenuListUl>
        <li><a href ="">오늘드림</a></li>
        <li><a href ="">관심 매장소식</a></li>
        <li><a href ="">최근 본 상품</a></li>
      </MenuListUl>
    </MainDiv>
  )
}

export default Main

const MainDiv = styled.div`
  background-color:#fff;
  padding: 0 20%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const MainLogo = styled.div`
  padding-bottom:15px;
  width:300px;
  height:100px;
  img{
    width:100%;
    height:100%;
  }
  `

const SearchBar = styled.input`
  width:300px;
  height:40px;
  border-radius:20px;
  border: 2px solid rgb(88, 218, 110);
`

const MenuListUl = styled.ul`
  padding:0;
  li{
    display:inline;
    font-size:18px;
    margin-left:15px;
  }
`