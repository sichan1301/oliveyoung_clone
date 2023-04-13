import styled from "styled-components"

const TopMenu = () => {
  return(
    <TopMenuUl>
      <li>회원가입</li>
      <li>로그인</li>
      <li>장바구니</li>
      <li>주문배송</li>
      <li>고객센터</li>
      <li>매장안내</li>
      <li>Global</li>
    </TopMenuUl>
  )
}

export default TopMenu


const TopMenuUl = styled.ul`
  padding:0 20%;
  text-align:right;
  li{
    display:inline;
    margin-right:10px;
    cursor:pointer;
  }
`