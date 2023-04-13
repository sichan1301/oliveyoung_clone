import styled from "styled-components"


const Recommend = () => {
  return(
    <Section>
      <Content>
        <p>유사한 고객님이 <br />많이 구매했어요</p>
        <img src ={require('../imgs/cost.jpg')} />
        <button>
          다른상품 추천해드릴게요 1 | 5 
        </button>
      </Content>

      <Content>
        <p>고객님을 위한 추천 상품</p>
        <img src ={require('../imgs/cost.jpg')} />
      </Content>
    </Section>
  )
}


export default Recommend

const Section = styled.section`
  padding: 0 20%;
  display:flex;

`
  
const Content = styled.div`  
  width:50%;
  p{
    font-size:24px;
    font-weight:800;
    padding-left:20px;
    height:50px;
  }
  img{
    width:100%;
  }


  button{
    border:1px solid grey;
    border-radius:10px;
    background:none;
    width:60%;
    padding:10px 0;
    
  }
`
 