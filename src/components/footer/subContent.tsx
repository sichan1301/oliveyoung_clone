import styled from "styled-components"

const SubContent = () => {
  return(
    <Container>
      <ContentDiv>
        <Img src = {require('../../imgs/free.jpg')} />
        <Text>정보보호 관리체계 ISMS 인증획득 인증범위 : 온라인 쇼핑몰 운영(CJ올리브영) 유효기간 : 2020.12.02 - 2023.12.01 </Text>
      </ContentDiv>

      <ContentDiv>
        <Img src = {require('../../imgs/free.jpg')} />
        <Text>2017~2022 국가고객만족도(NCSI) 헬스앤뷰티전문점 업계 최초 6년 연속 1위</Text>
      </ContentDiv>
    </Container>
  )
}

export default SubContent

const Container = styled.div`
  display:flex;
  justify-content:space-between;
  width:60%;
  margin: 0 auto;
  height:40px;
  border-top:0.5px solid rgb(182, 179, 179);
`

const ContentDiv = styled.div`
  padding:20px;
  display:flex;
  align-items:center;
`
const Img = styled.img`
  width:30px;
  height:30px;
`

const Text = styled.p`
  font-size:10px;
  margin-left:10px;
`