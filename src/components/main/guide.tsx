import styled from "styled-components"

const Guide = () => {
  return(
    <Section>
      <TextDiv>
        <NoticeDiv>
          <h3>공지사항</h3>
          <News>새로운 소식이 없어요</News>
          <More href="">더보기</More>
        </NoticeDiv>

        <ServiceCenter>
          <h3>고객센터 이용안내</h3>

          <ServiceCall>
            <Center>온라인물 고객센터</Center>
            <CenterCall>1522 - 0882</CenterCall>
            <Center>매장 고객센터</Center>
            <CenterCall>1577 - 4887</CenterCall>
          </ServiceCall>

          <QnATimeDiv>
            <QnATime>고객센터 운영시간 [평일 09:00 ~ 18:00]</QnATime>
            <QnAText>주말 및 공휴일은 1:1문의하기를 이용해주세요.<br />업무가 시작되면 바로 처리해드립니다.</QnAText>
            <ButtonDiv>
              <QnAButton>1:1문의하기</QnAButton>
              <QnAButton>자주하는 질문</QnAButton>
            </ButtonDiv>
          </QnATimeDiv>
        </ServiceCenter>

      </TextDiv>

      <ImgDiv>
        <Img src ={require('../../imgs/cost.jpg')} />
      </ImgDiv>
    </Section>
  )
}

export default Guide

const Section = styled.section`
  width:60%;
  margin:0 auto 50px;
  display:flex;
  border-top:2px solid grey;
`

// 공지사항 & 고객센터
const TextDiv = styled.div`
  width:70%;
`

// 공지사항
const NoticeDiv =styled.div`
  display:flex;
  align-items:center;
  height:60px;
  border-bottom:0.5px solid rgb(150,150,150);
`
const News =styled.p`
  font-size:14px;
  margin: 0 60% 0 40px;
  color:rgb(147, 147, 147);
`

const More =styled.a`
  font-size:16px;
  color:rgb(185, 185, 185);
`

// 고객센터 이용안내
const ServiceCenter = styled.div`
  padding-top:20px;
  display:flex;
  h3{
    width:80px;
    margin:0 20px 0 0;
  }
`

const ServiceCall = styled.div`
  margin-right:150px;
`

const Center = styled.p`
  font-size:16px;
  color:rgb(139, 139, 139);
  font-weight:600;
  margin: 0 0 4px 0;
`

const CenterCall = styled.p`
  font-size:28px;
  color:rgb(169, 199, 159);
  font-weight:600;
  margin: 0 0 4px 0;
`

const QnATimeDiv = styled.div`
  width:40%;
`

const QnATime = styled.p`
  font-weight:600;
  font-size:14px;
`
const QnAText = styled.p`
  font-weight:600;
  font-size:14px;
  color:rgb(169, 168, 168);
`

const ButtonDiv = styled.div`
  display:flex;
  justify-content:space-between;
`
const QnAButton = styled.button`
  width:48%;
  color:#fff;
  background-color:rgb(184, 182, 182);
  padding:20px;
  border-radius:0;
  font-weight:600;
  font-size:16px;
  border:none;
`

// 이미지
const ImgDiv = styled.div`
  width:30%;
  height:100%;
  margin-left:50px;
`
const Img = styled.img`
  width:100%;
  height:100%;

`