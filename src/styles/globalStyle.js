import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    text-decoration: none;
    background-color: #f5f5f5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *{
    box-sizing: border-box;
    list-style-type: none;
    margin:0;
    padding:0;
    font-family: 'Montserrat', sans-serif;
  }
  input:focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #e6e6e6;
    border-radius: 100px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #b6c2c9;
    border-radius: 100px;
  }
`;
