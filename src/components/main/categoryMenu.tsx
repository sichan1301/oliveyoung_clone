import styled from "styled-components"

const Category = () => { 
  return(
    <BackgroundDiv>
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
    </BackgroundDiv>
  ) 
}

export default Category 

const BackgroundDiv = styled.div`
  position:relative;
  background-color:rgb(251, 233, 246);
  margin:0;
  height:450px;
`

const CategoryUl = styled.ul`
  background-color: rgba(78, 78, 78, 0.5);
  position:absolute;
  top:0; 
  bottom:0;
  left:20%;
  right:calc(80%-200px); // 카테고리 width 값
  width:200px;
  padding:10px;
  margin:0;
  li{
    padding-left:20px;
    font-size:15px;
    margin-bottom:10px;
  }
  a{
    color:#fff;
  }
`
