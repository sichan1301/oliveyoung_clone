import styled from "styled-components"

const CopyRight = () => {
  return(
    <Container>
      <ContentDiv>
        <MainTxt>Copyright ⓒ CJ OliveYoung. All Rights Reserved.</MainTxt>
        <Ul>
          <p>Olive Young SNS</p>
          <li>facebook</li>
          <li>instagram</li>
          <li>youtube</li>
          <li>kakaotalk</li>
        </Ul>
      </ContentDiv>
    </Container>
  )
}


export default CopyRight

const Container = styled.div`
  border-top:0.5px solid rgb(231, 229, 229);
`
const ContentDiv = styled.div`
  padding: 0 20%;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const MainTxt = styled.p`
  margin:0;
  font-size:12px;
  color:rgb(157, 156, 156)
`

const Ul = styled.ul`
  display:flex;
  align-items:center;
  padding:0;
  margin:0;
  p{
    font-size:12px;
    color:rgb(157, 156, 156);
  }
  li{
    font-size:12px;
    margin-left:10px;
    color:rgb(157, 156, 156);
  }

`