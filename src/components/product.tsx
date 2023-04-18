import styled from "styled-components"

const Product = () => {
  return (
    <ProductDiv>
      <img src = "/imgs/cost.jpg" />
      <ProductTitle>아토팜</ProductTitle>
      <ProductSubTitle>아토팜 세탁세제 1000ml</ProductSubTitle>

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
    </ProductDiv>
  )
}


export default Product

export const ProductDiv = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  img{
    width:100%;
    height:100%;
    border:0.5px solid grey;
  }
`

export const ProductTitle = styled.p`
  font-size:14px;
  font-weight:700;
  color:grey;
  margin: 4px 0;
`

export const ProductSubTitle = styled.p`
  font-size:12px;
  margin: 0 0 4px 0;
`

export const PriceDiv = styled.div`
  margin: 0 0px 4px 0;   
`

export const TagPrice = styled.del`
  font-size:12px;
  margin:0 2px 0 0;

`
export const DiscountPrice = styled.span`
  font-size:16px;
  color:red;
`

interface KeywordProps {
  type:string
}

export const Keyword = styled.span<KeywordProps>`
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


