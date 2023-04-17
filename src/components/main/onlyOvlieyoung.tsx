import styled from "styled-components"

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
        <Content1 />
        <Content2 />
        <Content3 />
      </ContentDiv>
    </Section>
  )
}

export default OnlyOliveYoung

const Section = styled.section`
  position:relative;
  padding: 0 20%;
  margin-bottom:100px;
`

const TopDiv = styled.div`
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

const TabDiv = styled.div`
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
  gap:10px;
  height:150px;
`
const Content1 = styled.div`
  background-color:rgb(251, 190, 221);
`
const Content2 = styled.div`
  background-color:rgb(208, 207, 207);
`
const Content3 = styled.div`
  background-color:rgb(164, 191, 215);
`
