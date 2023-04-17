import styled from "styled-components"
import Product from "../product"

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

        <ProductDiv>
          <img src = {require('../../imgs/cost.jpg')} />
          <TextDiv>
            <SubTitle>아토팜 세탁세제 1000ml</SubTitle>

            <PriceDiv>
              <TagPrice>13,000원</TagPrice>
              <DiscountPrice>9,360원</DiscountPrice>
            </PriceDiv>

            <div>
              <Keyword type="세일">세일</Keyword>
              <Keyword type="쿠폰">쿠폰</Keyword>
              <Keyword type="증정">증정</Keyword>
              <Keyword type="오늘드림">오늘드림</Keyword>
            </div>
          </TextDiv>
        </ProductDiv>

        <ProductDiv>
          <img src = {require('../../imgs/cost.jpg')} />
          <TextDiv>
            <SubTitle>아토팜 세탁세제 1000ml</SubTitle>

            <PriceDiv>
              <TagPrice>13,000원</TagPrice>
              <DiscountPrice>9,360원</DiscountPrice>
            </PriceDiv>

            <div>
              <Keyword type="세일">세일</Keyword>
              <Keyword type="쿠폰">쿠폰</Keyword>
              <Keyword type="증정">증정</Keyword>
              <Keyword type="오늘드림">오늘드림</Keyword>
            </div>
          </TextDiv>
        </ProductDiv>

      </ProductContent>
    </Section>
  )
}


export default WorthyBrand

const Section = styled.section`
  padding:0 20%;
  margin-bottom:100px;
`

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

const ProductDiv = styled.div`
  width:50%;
  display:flex;
  align-items:center;
  cursor:pointer;
  img{
    width:30%;
    height:100%;
    border:0.5px solid grey;
  }
`

const TextDiv =styled.div`
  margin-left:10px;
`
const SubTitle = styled.p`
  font-size:12px;
  margin: 0 0 4px 0;
`

const PriceDiv = styled.div`
  margin: 0 0px 4px 0;   
`

const TagPrice = styled.del`
  font-size:12px;
  margin:0 2px 0 0;

`
const DiscountPrice = styled.span`
  font-size:16px;
  color:red;
`

interface KeywordProps {
  type:string
}

const Keyword = styled.span<KeywordProps>`
  color:#fff;
  font-size:12px;
  border-radius:10px;
  padding:1px 10px;
  background-color:${props => {
    switch(props.type) {
      case "세일":
        return `rgb(254, 101, 101)`;
      case "쿠폰":
        return `rgb(154, 236, 67)`;
      case "증정":
        return `rgb(121, 190, 243)`;
      case "오늘드림":
        return `rgb(255, 159, 218)`;
    }
  }}
`