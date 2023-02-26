import styled from "styled-components";

export const DataWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  input {
    width: 130px;
    padding: 10px 20px;
    margin-bottom: 20px;
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
`;
export const Error = styled.p`
  position: absolute;
  bottom: 40px;
  left: 40px;
  font-style: italic;
  color: red;
  font-size: 0.9rem !important;
  border: unset !important;
`;
export const PartingWrapper = styled.div`
  margin-bottom: 30px;
  position: relative;

  h2 {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 40px;
  }
  span {
    margin-left: 15px;
    font-size: 1.5rem;
  }
`;
