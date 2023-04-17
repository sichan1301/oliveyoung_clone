import styled from "styled-components"
import Product from "../product"

const HowIsThis = () => {
  return(
    <Section>
      <TopDiv>
        <h2>이 상품 어때요?</h2>
        <TabDiv>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </TabDiv>
      </TopDiv>

      <ProductDiv>
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductDiv>
    </Section>
  )
}


export default HowIsThis

const Section = styled.section`
  position:relative;
  padding: 0 20%;
  margin-bottom:100px;
`

const TopDiv = styled.div`
  position:relative;
  height:40px;
  border-bottom:0.5px solid rgb(216, 214, 214);
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
const ProductDiv = styled.div`
  display:flex;
  justify-content:space-around;
  height:400px;
  gap:20px;
  padding:10px;
`


