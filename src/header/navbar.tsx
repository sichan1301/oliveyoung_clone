import styled from "styled-components"
import CategoryList from "./categoryList"


const Navbar = () => {
  return(
    <Navigation>
      <ul>
        <li>
          <>
            <p>카테고리</p> 
            <CategoryList />
          </>
        </li>
        <li>오특</li>
        <li>신상</li>
        <li>랭킹</li>
        <li>프리미엄관</li>
        <li>기획전</li>
        <li>세일</li>
        <li>기프트카드</li>
        <li>멤버십/쿠폰</li>
        <li>이벤트</li>
      </ul>
    </Navigation>
  )
}


export default Navbar 


const Navigation = styled.nav`
  width:100%;
  border-top:0.5px solid grey;
  border-bottom:0.5px solid grey;
  ul{
    padding:0;
    margin:0 auto;
    width:70%;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:space-around;
  }
  li{
    list-style:none;
    font-weight:600;
    font-size:18px;
    text-align:center;
    cursor:pointer;
    :first-child{
      width:200px;
      position:relative;
      display:flex;
      flex-direction:column;
    }
  }
`