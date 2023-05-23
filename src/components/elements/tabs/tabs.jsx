import React, { useState } from "react";

import { TabContent, TabRow, TabButton, TabTitle } from "./styled";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  // console.log("На вкладке Tabs.jsx пришли табы: ", tabs);
  return (
    <>
      <TabRow>
        {tabs &&
          tabs.length &&
          tabs.map((tab, index) => {
            if (index === activeTab) {
              return (
                <TabButton
                  $current
                  onClick={() => setActiveTab(index)}
                  key={index}
                >
                  <TabTitle $current level={3}>
                    {tab.title}
                  </TabTitle>
                </TabButton>
              );
            }
            return (
              <TabButton onClick={() => setActiveTab(index)} key={index}>
                <TabTitle level={3}>{tab.title}</TabTitle>
              </TabButton>
            );
          })}
      </TabRow>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </>
  );
}
