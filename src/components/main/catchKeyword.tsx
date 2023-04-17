import styled from "styled-components"

const CatchKeyword = () => {
  return(
    <Section>
      <h2>Catch Keyword</h2>

      <ContentDiv>
        <Content>
          <Box1 />
          <Title>검색량 급상승, 기름기 제거</Title>
          <SubTitle>유분이 올라오는 계절이 왔어요</SubTitle>
        </Content>

        <Content>
          <Box2 />
          <Title>하루 2천 번 검색, 승모근</Title>
          <SubTitle>다양한 괄사로 솟은 승모근 풀어요</SubTitle>
        </Content>
      </ContentDiv>

      <AnotherKeyword>다른 키워드 더보기 1 | 5</AnotherKeyword>
    </Section>
  )
}



export default CatchKeyword


const Section = styled.section`
  width:60%;
  margin: 0 auto;
  margin-bottom:100px;
`

const ContentDiv = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:50px;
  `

const Content = styled.div`
  width:49%;  
`
  
const Box1 = styled.div`
  background-color:rgb(177, 239, 254);
  height:300px;
  border-radius:10px;
`


const Box2 = styled(Box1)`
  background-color:rgb(254, 233, 177);
`

const Title = styled.p`
  font-weight:800;
  font-size:18px;
  margin:8px 0;
`

const SubTitle = styled.p`
  font-size:16px;
  margin:0;
`

const AnotherKeyword = styled.button`
  display:block;
  width:400px;
  height:40px;
  margin:0 auto;
  border:1px solid rgb(194, 194, 194);
`