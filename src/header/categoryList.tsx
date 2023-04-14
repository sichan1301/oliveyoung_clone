import styled from "styled-components"

const CategoryList = () => {
  return(
    <CategoryUl>
      <li>기초화장품</li>
      <li>더모 코스메틱</li>
      <li>메이크업·네일</li>
      <li>바디케어</li>
      <li>헤어케어</li>
      <li>향수/디퓨저</li>
      <li>미용소품</li>
      <li>남성</li>
      <li>구강/건강용품</li>
      <li>여성/위생용품</li>
      <li>건강식품</li>
      <li>푸드</li>
      <li>라이프/홈</li>
      <li>반려동물</li>
      <li>AWARDS</li>
    </CategoryUl>
  )
}

export default CategoryList
const CategoryUl = styled.ul`
  position:absolute;
  padding:0;
  display:flex;
  flex-direction:column;
  top:50px;
  left:0;
  right:0;
  li{
    margin-bottom:14px;
  }
`