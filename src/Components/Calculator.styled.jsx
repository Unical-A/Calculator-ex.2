import styled from "styled-components"

const Root=styled.div`
width: 300px;
border: 1px solid red;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 20px;
`;

const But=styled.button`
width: 60px;
  height: 60px;
  border: 1px solid green;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 22px;
  
`;
const Total=styled.div`
border: 1px solid gray;
  width: 300px;
  padding: 20px;
  height: 100px;
  margin-bottom: 30px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content:center;
 text-align: right;

 

   
`;



export const Styled={Root, But, Total}