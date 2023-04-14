import styled from "styled-components"

const TopMenu = () => {
  return(
    <Ul>
      <li><a href="">회원가입</a></li>
      <li><a href="">로그인</a></li>
      <li><a href="">장바구니</a></li>
      <li><a href="">주문배송</a></li>
      <li><a href="">고객센터</a></li>
      <li><a href="">매장안내</a></li>
      <li><a href="">Global</a></li>
    </Ul>
  )
}

export default TopMenu


const Ul = styled.ul`
  background-color:#fff;
  padding:10px 20%;
  margin:0;
  text-align:right;
  li{
    font-size:14px;
    display:inline;
    margin-right:10px;
  }
`