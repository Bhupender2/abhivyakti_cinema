import React, { useState } from "react";
import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);  //left property of movingBg we are changing here dynamically as both movingBg and tabItem has 100px width (specifically for this only)

  function activeTab(tab, index) {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  }
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }} /> {/*here we are overriding the left property by dynamically changing it and on changing the left property transition will happen in 0.4 secs (as we mentioned in movingBg*/}
      </div>
    </div>
  );
};

export default SwitchTabs;
