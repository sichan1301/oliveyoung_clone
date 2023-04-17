import styled from "styled-components"
import Product from "../product"

const PopularEvent = () => {
  return(
    <Section>
      <h2>인기 행사만 모았어요!</h2>

      <ContentDiv>
        <div>
          <Box1 />
          <ProductDiv>
            <Product />
            <Product />
          </ProductDiv>
        </div>

        <div>
          <Box2 />
          <ProductDiv>
            <Product />
            <Product />
          </ProductDiv>
        </div>
      </ContentDiv>

    </Section>
  )
}


export default PopularEvent

const Section = styled.section`
  padding:0 20%;
  margin-bottom:100px;
`

const ContentDiv = styled.div`
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap:20px;
`

const Box1 = styled.div`
  background-color:rgb(222, 223, 210);
  height:300px;
`

const Box2 = styled.div`
  background-color:rgb(251, 215, 196);
  height:300px;
`

const ProductDiv = styled.div`
  transform:translateY(-10%);
  width:90%;
  background-color:#fff;
  display:grid;
  margin:0 auto;
  padding:20px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap:20px;
`
