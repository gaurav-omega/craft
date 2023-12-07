import React, { useState } from "react";
import { Homeicon } from "./svg/Homeicon";
import { Ordericon } from "./svg/Ordericon";
import { Createorder } from "./svg/Createorder";
import { Vieworder } from "./svg/Vieworder";
import CreateOrder from "./CreateOrder";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: <Homeicon /> },
  {
    id: "manageOrders",
    label: "Manage Orders",
    icon: <Ordericon />,
    subTabs: [
      { id: "createOrder", label: "Create Order", icon: <Createorder/> },
      { id: "viewOrders", label: "View Orders", icon: <Vieworder/> },
    ],
  },
];

const DashLeft = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeSubTab, setActiveSubTab] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setActiveSubTab(null);
  };

  const handleSubTabClick = (subTabId) => {
    setActiveSubTab(subTabId);
   
  };

  return (
    <div className="bg_secondary w-[20%] h-[calc(100vh-2em)] text-white flex flex-col ml-[1rem] my-[1rem] rounded-[1rem]">
      <div className="my-6 text-2xl font-semibold text-center txt_prime">
        Craftlooms
      </div>
      <hr className="w-full"/>
      <div className=" flex flex-col text-lg font-semibold mt-6 px-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center gap-x-2  list py-3 px-2 active_b ${
                activeTab === tab.id ? "button_active" : ""
              }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <div className="mx-2">{tab.icon}</div>
            <div>{tab.label}</div>
          </div>
        ))}

        {activeTab === "manageOrders" && (

<div className="flex flex-col text-base font-semibold mt-2">
            {tabs
              .find((tab) => tab.id === "manageOrders")
              .subTabs.map((subTab) => (
                <div
                  key={subTab.id}
                  className={`flex items-center gap-x-2 list py-3 pl-2 px-8 active_b mx-auto w-full ${
                    activeSubTab === subTab.id ? "subtab_active" : ""
                  } `}
                  onClick={() => handleSubTabClick(subTab.id)}
                >
                  <div className="mx-2">{subTab.icon}</div>
                  <div className="text-[.9rem]">{subTab.label}</div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashLeft;
