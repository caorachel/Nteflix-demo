import style from "styled-components";

export const Main = style.div`
text-align: center;
  background: rgb(25, 25, 25);
  color: azure;
  font-family: "Helvetica Neue", "Helvetica", "Arial", "sans-serif";
  font-size: 16px;
  margin:0;
  padding:0;
  
  .NavigationBar {
    width: 90%;
    height: 20%;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    padding-top: 15px;
    padding-left: 10px;
  }
  
  .logo {
    width: 16%;
  }
  .lists {
    width: 100%;
  }`;
