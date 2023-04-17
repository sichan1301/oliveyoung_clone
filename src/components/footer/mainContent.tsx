import styled from "styled-components"

const MainContent = () => {
  return(
    <Container>
      <LeftMenuDiv>
        <Img src ={require('../../imgs/cost.jpg')} />
        <LeftMenuUl>
          <StrongText>씨제이올리브영 주식회사</StrongText>
          <li>대표이사 : 이선정 | 사업자등록번호 : 809-81-01574</li>
          <li>주소 : (04323) 서울특별시 용산구 한강대로 372, 24층 <br />(동자동, KDB타워)</li>
          <li>호스팅사업자 : CJ 올리브네트웍스</li>
          <li>통신판매업신고번호 : 2019-서울용산-1428</li>
          <li>이메일 : oliveweb@cj.net</li>
          <a href ="">사업자 정보확인</a>
        </LeftMenuUl>
      </LeftMenuDiv>

      <PolicyUl>
        <li>이용약관법적고지</li>
        <StrongText>개인정보처리방침</StrongText>
        <li>청소년보호방침</li>
        <li>영상정보처리기기 운영/관리 방침</li>
        <li>이메일무단수집거부</li>
      </PolicyUl>

      <HanaBankDiv>
        <StrongText>하나은행 구매안전 서비스</StrongText>
        <li>올리브영은 현금 결제한 금액에 대해 하나은행과 채무지급보증 계약을체결하여 안전한 거래를 보장하고 있습니다</li>
        <a href="">서비스 가입사실 확인</a>
      </HanaBankDiv>

    </Container>
  )
}

export default MainContent

const Container = styled.footer`
  padding:0 20%;
  display:flex;
`

const LeftMenuDiv = styled.div`
  display:flex;
  width:50%;
`

const Img = styled.img`
  width:30%;
  height:100%;
`
const LeftMenuUl = styled.ul`
  padding:20px;
  width:70%;
  font-size:13px;
  margin:30px 0 0 0;
  li{
    margin-bottom:5px;
    color:rgb(139, 138, 138);
  }
  a{
    padding-left:10px;
  }
`


const PolicyUl = styled(LeftMenuUl)`
  padding:0 0 0 20px;
  width:25%;
  height:120px;
  border-left:0.5px solid rgb(231, 229, 229);
  border-right:0.5px solid rgb(231, 229, 229);
`

const HanaBankDiv = styled(LeftMenuUl)`
  width:25%;
  li{
    margin-bottom:5px;
    color:rgb(139, 138, 138);
  }
  a{
    padding:0;
  }
`

const StrongText = styled.p`
  font-weight:700;
  margin: 0 0 4px 0;
`