import styled from "styled-components";

export const DataWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
input {
    width: 330px;
    padding: 10px 20px;
    margin: 20px;
    border-radius: 5px;
    border: 1px solid #9ca0ac;
    background-color: #f6f4f4;
    font-size: 16px;
    opacity: 0.7;
  }
  input:focus {
    outline: unset;
    border: 1px solid #747b8b;
    opacity: 1;
  }
`