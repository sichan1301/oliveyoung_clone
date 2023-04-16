import styled from "styled-components"
import Product from "../product"


const Recommend = () => {
  return(
    <Section>
      <Content>
        <TextDiv>
          <h2>유사한 고객님이 <br />많이 구매했어요</h2>
          <span>더보기</span>
        </TextDiv>

        <ProductDiv>
          <Product />
          <Product />
        </ProductDiv>

        <button>
          다른상품 추천해드릴게요 1 | 5 
        </button>
      </Content>

      <Content>
        <TextDiv>
          <h2>유사한 고객님이 <br />많이 구매했어요</h2>
          <span>더보기</span>
        </TextDiv>

        <ProductDiv>
          <Product />
          <Product />
        </ProductDiv>

        <button>다른상품 추천해드릴게요 1 | 5</button>

      </Content>

    </Section>
  )
}


export default Recommend

const Section = styled.section`
  width:60%;
  margin: 0 auto;
  display:flex;
  /* background-color: rgb(116, 114, 114); */
`

const Content = styled.div`  
  width:49.9%;
  padding:10px;

  button{
    display:block;
    width:300px;
    height:40px;
    margin:0 auto;
  }
`

const TextDiv = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:end;
  background-color: #fff;
  padding:10px;
  margin:0 0 18px 0;
  h2{
    font-size:20px;
    font-weight:800;
    padding-left:20px;
    height:50px;
    padding:0;
    margin:0;
  }
  span{
    color:rgb(179, 179, 179);
    font-size:14px;
    font-weight:800;
    cursor:pointer;
  }
`
 export const ProductDiv = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 0 0 16px 0;
 `