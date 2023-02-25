import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function LoadingElement({ error }) {
  return (
    <Wrapper>
      {error ? (
        <p>
          We have problem loading element, try later <br /> Error : {error}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
}

export default LoadingElement;
