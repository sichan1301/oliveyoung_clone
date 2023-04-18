import styled from "styled-components"

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
    </Navigation>
  )
}

export default Navbar 


const Navigation = styled.nav`
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
    line-height:50px;
    text-align:center;
    height:100%;
    :first-child{
      width:160px;
      border-left:0.5px solid rgb(190, 190, 190);
      border-right:0.5px solid rgb(190, 190, 190);
    }
  }
`