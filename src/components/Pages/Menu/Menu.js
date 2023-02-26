import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./Menu.style";

function Menu({ selectedTab, setSelectedTab }) {
  const [hideMenu, setHideMenu] = useState(false);
  const navigate = useNavigate();
  const switchTab = (selectedTab) => {
    setSelectedTab(selectedTab);
    if (selectedTab === "1") {
      navigate("/index");
    } else if (selectedTab === "2") {
      navigate("/desired-address");
    } else if (selectedTab === "4") {
      navigate("/history");
    }
  };
  useEffect(() => {
    if (selectedTab === "3") {
      setHideMenu(true);
    }
  }, [selectedTab]);
  return (
    <Wrapper hideMenu={hideMenu}>
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
          onClick={() => switchTab("4")}
          className={`${selectedTab === "4" ? "markCategory" : ""}`}
        >
          History
        </p>
      </div>
    </Wrapper>
  );
}

export default Menu;
