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

        {/* <img src ={require('../imgs/free.jpg')} /> */}
    
    </Section>
  )
}

export default Coupon


const Section = styled.section`
  padding:0 20%;
  display:flex; 
  justify-content:space-between;
  margin:30px 0;
`

const CouponDiv1 = styled.div`
    background-color:pink;
    width:49.9%;
    padding:10px 0;
    cursor:pointer;
  p{
    font-size:28px;
    font-weight:700;
    text-align:center;
  }
`

const CouponDiv2 = styled(CouponDiv1)`
  background-color:rgb(206, 224, 250);
`
