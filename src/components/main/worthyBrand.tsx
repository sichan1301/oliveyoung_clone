import styled from "styled-components"
import { Section } from "./weeklySpecial"
import Product from "../product"
import { ProductDiv ,ProductSubTitle,PriceDiv,TagPrice,DiscountPrice,Keyword } from "../product"

const WorthyBrand = () => {
  return(
    <Section>
      <h2>주목해야 할 브랜드</h2>
      <CategoryUl>
        <CategoryLi>크리니크</CategoryLi>
        <CategoryLi>코링코</CategoryLi>
        <CategoryLi>롬앤</CategoryLi>
        <CategoryLi>에뛰드</CategoryLi>
        <CategoryLi>라로슈포제</CategoryLi>
        <CategoryLi>듀이트리</CategoryLi>
        <CategoryLi>비플레인</CategoryLi>
        <CategoryLi>코스알엑스</CategoryLi>
        <CategoryLi>아이소리</CategoryLi>
      </CategoryUl>

      <Carousel />

      <ProductContent>
        <Product flexRow imgWidth="50%"/>
        <Product flexRow imgWidth="50%"/>
      </ProductContent>
    </Section>
  )
}


export default WorthyBrand

const CategoryUl = styled.ul`
  text-align:center;
  padding:0;
  margin-bottom:40px;
`

const CategoryLi = styled.li`
  display:inline;
  padding:5px 15px;
  margin:5px;
  border:0.5px solid rgb(184, 182, 182);
  border-radius:20px;
  font-size:12px;
  color:rgb(152, 152, 152);
`

const Carousel = styled.div`
  height:400px;
  background-color: rgb(200, 233, 253);
`

const ProductContent = styled.div`
  display:flex;
  padding:10px;
`

const NewProductDiv = styled(ProductDiv)`
  width:50%;
  flex-direction: row;
  justify-content: start;
  img{
    width:30%;
  }
`

export const TextDiv =styled.div`
  margin-left:10px;
`