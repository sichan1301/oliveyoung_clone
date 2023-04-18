import styled from "styled-components"
import { ProductDiv,ProductSubTitle,PriceDiv,TagPrice,DiscountPrice,Keyword } from "../product"
import { TextDiv } from "./worthyBrand"
import { TopDiv,TabDiv } from "./onlyOvlieyoung"

const LiveViewRanking = () => {
  return(
    <Section>
      <TopDiv>
        <h2>실시간 View 랭킹</h2>
        <TabDiv>
          <span>1</span>
          <span>2</span>
        </TabDiv>
      </TopDiv>

      <ContentDiv>
        
        <NewProductDiv>
          <img src = {require('../../imgs/cost.jpg')} />
          <TextDiv>
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
          </TextDiv>
        </NewProductDiv>
        

        <Ul>
          <Li><span>1</span><p>[4월 올영PICK/립펜슬기획] 페리페리 잉크무드글로이틴트</p></Li>  
          <Li><span>2</span><p>더툴랩 롱래스팅 텐션 퍼프 3종 (쫀쫀밀착)</p></Li>  
          <Li><span>3</span><p>더샘 커버 퍼펙션 트리플 팟 컨실러 2colors</p></Li>  
          <Li><span>4</span><p>[4월 올영PICK]롬앤 쥬시 래스팅 틴트(단품/기획)</p></Li>  
          <Li><span>5</span><p>[미노이 Pick] 마녀공장 갈락 나이아신 에센스 300ml + 12ml</p></Li>  
        </Ul>        
      </ContentDiv>
    </Section>
  )

}


export default LiveViewRanking


const Section = styled.section`
  padding:0 20%;
  margin-bottom:100px;
`



const ContentDiv = styled.div`
  display:flex;
  padding:20px;
  justify-content:space-between;
  border-top:1px solid rgb(201, 197, 197);
  border-bottom:1px solid rgb(201, 197, 197);
`

const NewProductDiv = styled(ProductDiv)`
  width:50%;
  flex-direction:row;
  justify-content:start;
  img{
    width:40%;
    height:80%;
  }
`

const Ul = styled.ul`
  width:50%;
`

const Li = styled.li`
  color:rgb(138, 137, 137);
  font-size:18px;
  display:flex;
  align-items:center;
  p{
    margin:10px;
  }
`