import React from "react";
import { Wrapper } from "./Menu.style";

function Menu({ selectedTab, setSelectedTab }) {
  return (
    <Wrapper>
      <div>
        <p
          onClick={() => setSelectedTab('1')}
          className={`${selectedTab === "1" ? "markCategory" : ""}`}
        >
          Find your location
        </p>
        <p
          onClick={() => setSelectedTab('2')}
          className={`${selectedTab === "2" ? "markCategory" : ""}`}
        >
          Enter desired location
        </p>
        <p
          onClick={() => setSelectedTab('3')}
          className={`${selectedTab === "3" ? "markCategory" : ""}`}
        >
          History
        </p>
      </div>
    </Wrapper>
  );
}

export default Menu;
