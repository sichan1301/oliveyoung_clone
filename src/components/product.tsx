import styled from "styled-components"

interface ProductProps {
  flexRow?:boolean,
  imgWidth?:string,
  productWidth?:string
}

const Product = ({flexRow,imgWidth,productWidth}:ProductProps) => {
  return (
    <ProductDiv flexRow ={flexRow} imgWidth = {imgWidth}>
      <img src = "/imgs/cost.jpg" />
      <ProductTitle>아토팜</ProductTitle>
      <ProductSubTitle>아토팜 세탁세제 1000ml</ProductSubTitle>

      <PriceDiv>
        <TagPrice>13,000원</TagPrice>
        <DiscountPrice>9,360원</DiscountPrice>
      </PriceDiv>

      <div>
        <Keyword color="rgb(254, 101, 101)">세일</Keyword>
        <Keyword color="rgb(154, 236, 67)">쿠폰</Keyword>
        <Keyword color="rgb(121, 190, 243)">증정</Keyword>
        <Keyword color="rgb(255, 159, 218)">오늘드림</Keyword>
      </div>
    </ProductDiv>
  )
}


export default Product

interface ProductDivProps {
  flexRow ?: boolean,
  productWidth?: string,
  imgWidth ?:string
}

export const ProductDiv = styled.div<ProductDivProps>`
  width:${props => props.productWidth ? props.productWidth : `100%`};
  display:flex;
  flex-direction:${props => props.flexRow ? `row` : `column`};
  justify-content: center;
  align-items: center;
  cursor:pointer;
  img{
    width:${props => props.imgWidth ? props.imgWidth : `100%`};
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
  color:string
}

export const Keyword = styled.span<KeywordProps>`
  color:#fff;
  font-size:12px;
  border-radius:10px;
  padding:1px 10px;
  background-color:${props => props.color};
`


