import styled from "styled-components"

const Coupon = () => {
  return(
    <Section>
      <CouponDiv1>
        <p>포토리뷰 작성하고 10% 쿠폰받기!</p>
      </CouponDiv1>
      <CouponDiv2>
        <p>탑리뷰어 대상 할인쿠폰 지급!</p>
      </CouponDiv2>
    </Section>
  )
}

export default Coupon


const Section = styled.section`
  position:relative;
  padding:0 20%;
  margin:50px 0;
  height:100px;
`

const CouponDiv1 = styled.div`
  position:absolute;
  top:0;
  left:20%;
  right:50.5%;
  bottom:0;
  background-color:pink;
  cursor:pointer;
p{
  margin:0;
  line-height:100px;
  font-size:28px;
  font-weight:700;
  text-align:center;
}
`

const CouponDiv2 = styled(CouponDiv1)`
  right:20%;
  left:50.5%;
  background-color:rgb(206, 224, 250);
`
