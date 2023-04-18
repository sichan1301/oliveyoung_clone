import styled from "styled-components"
import Product from "../product"
import { TopDiv,TabDiv } from "./onlyOvlieyoung"

const HowIsThis = () => {
  return(
    <Section>
      <NewTopDiv>
        <h2>이 상품 어때요?</h2>
        <TabDiv>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </TabDiv>
      </NewTopDiv>

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
  padding: 0 20%;
  margin-bottom:100px;
`

const NewTopDiv = styled(TopDiv)`
  border-bottom:0.5px solid rgb(216, 214, 214);
  margin-bottom:20px;
`

const ProductDiv = styled.div`
  display:flex;
  justify-content:space-around;
  height:400px;
  gap:20px;
  padding:10px;
`


