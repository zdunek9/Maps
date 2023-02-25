import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
  text-align: center;
margin-top: 40px;
  span {
    font-weight: 600;
  }
  p {
    font-weight: 600;
    margin-top: 10px;
    font-size: 1.6rem;
    border-bottom: 1px solid black;
  }
`;

export const ErrorMsg = styled.p`
font-size: 1.1rem !important;
font-style: italic;
color: red;

`