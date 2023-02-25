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
  form {
    margin-top: 60px;
    margin-bottom: 60px;
    text-align: center;
  }
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
  button {
    margin-top: 20px;
    font-size: 1.1rem;
    height: 40px;
    width: 120px;
    background-color: rgb(61, 48, 41);
    border: 0;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;
export const WarningModal = styled.div`
  position: absolute;
  width: 160px;
  right: 50px;
  background-color: red;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  transition: 1s;
  padding: 10px;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 15px;
`;
