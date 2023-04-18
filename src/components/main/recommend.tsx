import styled from "styled-components"
import Product from "../product"


const Recommend = () => {
  return(
    <Section>
      <Content>
        <TextDiv>
          <h2>유사한 고객님이 <br />많이 구매했어요</h2>
          <span><a href="">더보기</a></span>
        </TextDiv>

        <ProductDiv>
          <Product />
          <Product />
        </ProductDiv>

        <AnotherRecmmend>다른상품 추천해드릴게요 1 | 5</AnotherRecmmend>
      </Content>

      <Content>
        <TextDiv>
          <h2>고객님을 위한 추천 상품</h2>
          <span><a href="">더보기</a></span>
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
  display:flex;
  gap:1px;
  margin: 0 auto 100px;
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
  background-color: #fff;
  padding:10px;
  margin:0 0 18px 0;
  height:84px;
  h2{
    padding-left:10px;
    margin:0;
  }
  span{
    padding-top:40px;
    font-size:14px;
    font-weight:800;
    cursor:pointer;
    a{
      color:rgb(179, 179, 179);
    }
  }
`
 export const ProductDiv = styled.div`
  display:flex;
  flex-wrap:nowrap;
  height:400px;
  gap:20px;
  margin: 0 0 60px 0;
 `

 export const AnotherRecmmend = styled.button`
  display:block;
  width:300px;
  height:40px;
  margin:0 auto;
 `