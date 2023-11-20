import React, { useState } from "react";
import { Homeicon } from "./svg/Homeicon";
import { Ordericon } from "./svg/Ordericon";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: <Homeicon /> },
  {
    id: "manageOrders",
    label: "Manage Orders",
    icon: <Ordericon />,
    subTabs: [
      { id: "createOrder", label: "Create Order" },
      { id: "viewOrders", label: "View Orders" },
    ],
  },
];

const Dashboard = () => {
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
    <div className="bg_secondary w-72 h-screen text-white flex flex-col">
      <div className="my-6 text-2xl font-semibold text-center txt_prime">
        Craftlooms
      </div>
      <hr className="w-full" />
      <div className="gap-1 flex flex-col text-lg font-semibold mt-6 px-4">
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
          <div className="flex flex-col text-lg font-semibold mt-3 px-4">
            {tabs
              .find((tab) => tab.id === "manageOrders")
              .subTabs.map((subTab) => (
                <div
                  key={subTab.id}
                  className={`flex items-center gap-x-2 list py-3 px-2 ml-4 active_b ${
                    activeSubTab === subTab.id ? "button_active" : ""
                  } `}
                  onClick={() => handleSubTabClick(subTab.id)}
                >
                  <div className="mx-2">{/* Optionally add subTab.icon */}</div>
                  <div>{subTab.label}</div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
