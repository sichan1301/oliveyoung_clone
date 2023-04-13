import styled from "styled-components"

const Main = () => {
  return(
    <MainDiv>
      <MainLogo>
        <img src={require('../imgs/cost.jpg')} />
      </MainLogo>
   
      <SearchBar />

      <MenuListUl>
        <li>오늘드림</li>
        <li>관심 매장소식</li>
        <li>최근 본 상품</li>
      </MenuListUl>
    </MainDiv>
  )
}

export default Main

const MainDiv = styled.div`
  padding: 0 20%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const MainLogo = styled.div`
  width:300px;
  height:100px;
  img{
    width:100%;
    height:100%;
  }
  `

const SearchBar = styled.input`
  width:320px;
  height:30px;
  border-radius:20px;
  border: 2px solid rgb(69, 188, 88);
`

const MenuListUl = styled.ul`
  padding:0;
  li{
    display:inline;
    font-size:18px;
    margin-left:15px;
    cursor:pointer;
  }
`