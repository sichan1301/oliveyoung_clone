import styled from "styled-components"


const WeeklySpecial = () => {
  return(
    <Section>
      <CouponDiv>
        <p>포토리뷰 작성하고 10% 쿠폰받기!</p>
        <p>탑리뷰어 대상 할인쿠폰 지급!</p>
        {/* <img src ={require('../imgs/free.jpg')} /> */}
      </CouponDiv>
    </Section>
  )
}

export default WeeklySpecial

const Section = styled.section`
  padding:0 20%;
`

const CouponDiv = styled.div`
  display:flex;
  width:100%;
  justify-content:space-between;
  margin:30px 0;
  p{
    width:49.5%;
    font-size:28px;
    padding:40px 20px;
    font-weight:800;
    text-align:center;
    cursor:pointer;
    :first-child{
      background-color:pink;
    }
    :last-child{
      background-color:rgb(224, 222, 248);
    }
  }
`