import styled from "styled-components"
import { Section } from "./weeklySpecial"

const HealthyLife = () => {
  return(
    <Section>
      <h2>Helathy Life</h2>
      <ContentDiv>
        <Content type="first" />
        <Content type="second"/>
        <Content type="third" />
      </ContentDiv>
    </Section>
  )
}

export default HealthyLife


const ContentDiv = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap:20px;
`

interface ContentProps {
  type:string
}

const Content = styled.div<ContentProps>`
  height:400px;
  border-radius:20px;
  background-color:${props => {
    switch(props.type) {
      case "first":
        return `rgb(255, 203, 203)`;
      case "second":
        return `rgb(190, 224, 255)`;
      case "third":
        return `rgb(161, 210, 168)`;
    }
  }}
`