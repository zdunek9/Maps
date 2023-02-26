import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
  text-align: center;
  span {
    font-weight: 600;
  }
  p {
    font-weight: 600;
    margin-top: 10px;
    font-size: 1.6rem;
    border-bottom: 1px solid black;
  }
  button {
    padding: 20px 50px;
    margin: 30px 0;
    background-color: var(--button1);
    border: 0;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--button-hover1);
  }
`;

export const ErrorMsg = styled.p`
  font-size: 1.1rem !important;
  font-style: italic;
  color: red;
`;

export const NoDataModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
