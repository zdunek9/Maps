import React, { useEffect } from "react";
import { Wrapper } from "./History.style";

function History({ historyData, setSelectedTab }) {
  useEffect(() => {
    setSelectedTab("4");
  }, []);
  return (
    <Wrapper>
      <h1>History</h1>
      {historyData.map((item, i) => (
        <p key={i}>
          {i + 1}. From: "{item[0].address}" to "{item[1].address}"
        </p>
      ))}
    </Wrapper>
  );
}

export default History;
