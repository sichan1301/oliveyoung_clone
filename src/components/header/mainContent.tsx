import styled from "styled-components"

const Main = () => {
  return(
    <MainDiv>
      <a href =""><Img src="/imgs/cost.jpg" /></a>
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

const Img = styled.img`
  width:250px;
  height:100px;
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
    font-size:16px;
    margin-left:15px;
  }
`