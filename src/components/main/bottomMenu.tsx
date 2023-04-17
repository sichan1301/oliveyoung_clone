import styled from "styled-components"

const BottomMenu = () => {
  return(
    <Article>
      <Content>
        <Ul>
          <li><a href="">회사소개</a></li>
          <li><a href="">채용안내</a></li>
          <li><a href="">가맹점 개설문의</a></li>
          <li><a href="">상품입점 및 제휴문의</a></li>
          <li><a href="">사이버 검사실</a></li>
          <li><a href="">고객센터</a></li>
        </Ul>
        <Select></Select>
      </Content>
    </Article>
  )
}


export default BottomMenu

const Article = styled.article`
  border-top:1px solid black;
  border-bottom:0.5px solid black;  
  background-color:rgb(254, 254, 254);
`

const Content = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 20%;
  height:60px;
`

const Ul = styled.ul`
  padding:0;
  li{
    font-size:12px;
    display:inline;
    margin:0 10px;
  }
`


const Select = styled.select`
  width:250px;
  height:25px;
`