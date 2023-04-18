import styled from "styled-components"

const CopyRight = () => {
  return(
    <Container>
      <ContentDiv>
        <MainTxt>Copyright ⓒ CJ OliveYoung. All Rights Reserved.</MainTxt>
        <Ul>
          <p>Olive Young SNS</p>
          <li><img src ={require('../../imgs/free.jpg')} /></li>
          <li><img src ={require('../../imgs/free.jpg')} /></li>
          <li><img src ={require('../../imgs/free.jpg')} /></li>
          <li><img src ={require('../../imgs/free.jpg')} /></li>
        </Ul>
      </ContentDiv>
    </Container>
  )
}


export default CopyRight

const Container = styled.div`
  padding:5px;
  border-top:0.5px solid rgb(195, 193, 193);
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
  color:rgb(157, 156, 156);
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
  img{
    width:25px;
    height:25px;
    margin-left:12px;
  }

`