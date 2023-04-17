import styled from "styled-components"

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

export const TopDiv = styled.div`
  position:relative;
  height:40px;
  margin-bottom:20px;
  h2{
    margin:0;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  }
`

export const TabDiv = styled.div`
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

const ContentDiv = styled.div`
  display:flex;
  padding:20px;
  justify-content:space-between;
  border-top:1px solid rgb(201, 197, 197);
  border-bottom:1px solid rgb(201, 197, 197);
`


const ProductDiv = styled.div`
  width:50%;
  display:flex;
  align-items:center;
  cursor:pointer;
  img{
    width:40%;
    height:80%;
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