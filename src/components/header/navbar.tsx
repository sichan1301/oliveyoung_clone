import styled from "styled-components"
import CategoryList from "./categoryList"


const Navbar = () => {
  return(
    <Navigation>
      <Ul>
        <li><a href="">카테고리</a></li>
        <li><a href="">오특</a></li>
        <li><a href="">신상</a></li>
        <li><a href="">랭킹</a></li>
        <li><a href="">프리미엄관</a></li>
        <li><a href="">기획전</a></li>
        <li><a href="">세일</a></li>
        <li><a href="">기프트카드</a></li>
        <li><a href="">멤버십/쿠폰</a></li>
        <li><a href="">이벤트</a></li>
      </Ul>
      <CategoryList />
    </Navigation>
  )
}

export default Navbar 


const Navigation = styled.nav`
  position:relative;
  padding: 0 20%;
  background-color:#fff;
  margin:0.5px auto;
  height:50px;
`

const Ul = styled.ul`
  height:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0;
  margin:0;

  li{
    font-weight:600;
    font-size:18px;
    text-align:center;
    :first-child{
      width:130px;
    }
  }
`