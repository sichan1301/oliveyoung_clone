import styled from "styled-components"
import Category from "./category"
import Coupon from "./coupon"
import Recommend from "./recommend"
import WeeklySpecial from "./weeklySpecial"
import PopularEvent from "./popularEvent"

const Main = () => {
  return(
    <>
      <Category />
      <Coupon />
      <Recommend />
      <WeeklySpecial />
      <PopularEvent />
    </>
  )
}


export default Main