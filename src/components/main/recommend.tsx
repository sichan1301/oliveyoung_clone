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

        <AnotherRecmmend>다른상품 추천해드릴게요 1 | 5</AnotherRecmmend>
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

        <AnotherRecmmend>다른상품 추천해드릴게요 1 | 5</AnotherRecmmend>

      </Content>

    </Section>
  )
}


export default Recommend

const Section = styled.section`
  width:60%;
  margin: 0 auto 100px;
  display:flex;
  gap:1px;
  background-color: rgb(212, 212, 212);
`

const Content = styled.div`  
  width:50%;
  padding:10px;
  background-color:#fff;
`

const TextDiv = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:end;
  background-color: #fff;
  padding:10px;
  margin:0 0 18px 0;
  h2{
    font-size:24px;
    font-weight:800;
    padding-left:10px;
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
  flex-wrap:nowrap;
  height:400px;
  gap:10px;
  margin: 0 0 60px 0;
 `

 const AnotherRecmmend = styled.button`
    display:block;
    width:300px;
    height:40px;
    margin:0 auto;
 `