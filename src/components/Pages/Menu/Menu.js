import React from "react";
import { Wrapper } from "./Menu.style";

function Menu({ selectedTab, setSelectedTab, setShowResult }) {
  const switchTab = (selectedTab) => {
    setShowResult(false);
    setSelectedTab(selectedTab);
  };
  return (
    <Wrapper>
      <div>
        <p
          onClick={() => switchTab("1")}
          className={`${selectedTab === "1" ? "markCategory" : ""}`}
        >
          Find your location
        </p>
        <p
          onClick={() => switchTab("2")}
          className={`${selectedTab === "2" ? "markCategory" : ""}`}
        >
          Enter desired location
        </p>
        <p
          onClick={() => switchTab("3")}
          className={`${selectedTab === "3" ? "markCategory" : ""}`}
        >
          History
        </p>
      </div>
    </Wrapper>
  );
}

export default Menu;
