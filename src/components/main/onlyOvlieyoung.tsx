import styled from "styled-components"
import { Section } from "./weeklySpecial"

const OnlyOliveYoung = () => {
  return(
    <Section>
      <TopDiv>
        <h2>오직 올리브영에서만</h2>
        <TabDiv>
          <span>1</span>
          <span>2</span>
        </TabDiv>
      </TopDiv>

      <ContentDiv>
        <Content type="first" />
        <Content type="second"/>
        <Content type="third" />
      </ContentDiv>
    </Section>
  )
}

export default OnlyOliveYoung


export const TopDiv = styled.div`
  position:relative;
  height:40px;
  margin-bottom:20px;
  h2{
    margin:0;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  }
`

export const TabDiv = styled.div`
  position:absolute;
  top:50%;
  right:0;
  transform:translate(0,-50%);
  span{
    border-radius:50%;  
    padding:5px 10px;
    cursor:pointer;
    :first-child{
      background-color:black;
      color:#fff;
    }
  }
`
const ContentDiv = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap:10px;
  height:150px;
`

interface ContentProps {
  type:string
}
const Content = styled.div<ContentProps>`
  background-color:${props => {
    switch(props.type) {
      case "first":
        return `rgb(251, 190, 221)`;
      case "second":
        return `rgb(208, 207, 207)`;
      case "third":
        return `rgb(164, 191, 215)`;
    }
  }}
`