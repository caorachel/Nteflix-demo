import style from "styled-components";

export const Button = style.button`
border: none;
padding: 0;
padding-left: 5px;
cursor: pointer;
display: none;
background-color: transparent;
${(props) => (props.buttonInfo ? "color: red;" : "color: white;")}
:hover{
  ${(props) => (props.buttonInfo ? "color: white;" : "color: red;")}
  display: block;
}
`;
export const ListItem = style.li`
box-sizing: border-box;
display: flex;
flex-direction: column;
position: relative;
margin-right: 0.2rem;
padding-top: 0;
width: 15%;
height: 40%;
list-style-type: none;
align-items: center;

img {
width: 95%;
height: auto;
position: relative;
border:1px solid black;
border-radius:5px;
}
.titleRow {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
}
:hover{
.btn{
  display:block
}
 }
`;
