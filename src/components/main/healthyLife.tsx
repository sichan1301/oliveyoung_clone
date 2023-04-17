import styled from "styled-components"

const HealthyLife = () => {
  return(
    <Section>
      <h2>Helathy Life</h2>
      <ContentDiv>
        <Content1></Content1>
        <Content2></Content2>
        <Content3></Content3>
      </ContentDiv>
    </Section>
  )
}

export default HealthyLife

const Section = styled.section`
  padding:0 20%;
  margin-bottom:100px;
`

const ContentDiv = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap:20px;
`


const Content1 = styled.div`
  height:400px;
  border-radius:20px;
  background-color:rgb(255, 203, 203);
`

const Content2 = styled(Content1)`
  background-color:rgb(190, 224, 255);

`
const Content3 = styled(Content1)`
  background-color:rgb(161, 210, 168);
  `