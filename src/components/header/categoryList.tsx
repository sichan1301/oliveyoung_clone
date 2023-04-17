import styled from "styled-components"

const CategoryList = () => {
  return(
    <CategoryUl>
      <li><a href="">기초화장품</a></li>
      <li><a href="">더모 코스메틱</a></li>
      <li><a href="">메이크업·네일</a></li>
      <li><a href="">바디케어</a></li>
      <li><a href="">헤어케어</a></li>
      <li><a href="">향수/디퓨저</a></li>
      <li><a href="">미용소품</a></li>
      <li><a href="">남성</a></li>
      <li><a href="">구강/건강용품</a></li>
      <li><a href="">여성/위생용품</a></li>
      <li><a href="">건강식품</a></li>
      <li><a href="">푸드</a></li>
      <li><a href="">라이프/홈</a></li>
      <li><a href="">반려동물</a></li>
      <li><a href="">AWARDS</a></li>
    </CategoryUl>
  )
}

export default CategoryList
const CategoryUl = styled.ul`
  background-color: rgba(78, 78, 78, 0.5);
  position:absolute;
  top:50px; //navbar height
  left:20%; //navbar padding value
  right:calc(80%-130px);
  margin:0;
  width:130px;
  padding:10px;
  li{
    font-size:14px;
    margin-bottom:10px;
  }
  a{
    color:#fff;
  }
`