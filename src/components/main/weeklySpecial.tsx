import styled from "styled-components"


const WeeklySpecial = () => {
  return(
    <Section>
      <h2>Weekly Special</h2>
      <ContentDiv>
        <Content1></Content1>
        <Content2></Content2>
      </ContentDiv>
    </Section>
  )
}

export default WeeklySpecial

const Section = styled.section`
  padding:0 20%;
  margin:0;
`

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
const Content1 = styled.div`
  width:49%;
  height:200px;
  background-color: rgb(201, 190, 250);
  padding:0;
  cursor:pointer;
`

const Content2 = styled(Content1)`
  background-color: rgb(254, 196, 198);
`