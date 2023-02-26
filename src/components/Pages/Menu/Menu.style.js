import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  margin-left: 15px;
  width: 350px;
  display: flex;
  align-items: center;
  display: ${(props) => (props.hideMenu ? "none" : "")};
  .markCategory {
    background-color: var(--button1);
    color: #f5f5f5;
    border-radius: 10px;
  }
  .markCategory:hover {
    background-color: var(--button-hover1);
  }
  p {
    padding: 20px;
    margin: 40px 0;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: 600;
  }
`;
