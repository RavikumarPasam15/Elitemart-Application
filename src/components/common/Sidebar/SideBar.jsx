import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaTag,
  FaStar,
  FaHeadset,
  FaDownload,
  FaBars,
} from "react-icons/fa";

const Sidebar = ({ handlePageChange, activeSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const items = [
    { icon: <FaHome />, text: "Home" },
    { icon: <FaInfoCircle />, text: "AboutUs" },
    { icon: <FaTag />, text: "Offers" },
    { icon: <FaStar />, text: "Reviews" },
    { icon: <FaHeadset />, text: "Helpdesk" },
    { icon: <FaDownload />, text: "DownloadApp" },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-56"
      } h-screen bg-gradient-to-b from-gray-800 to-black shadow-2xl border-r border-gray-900 flex flex-col sticky top-0 transition-all duration-300`}
    >
      {/* Sidebar Header */}
      <div
        className={`flex items-center justify-between  text-white border-b border-gray-700 ${
          isCollapsed ? "justify-center" : ""
        }`}
      >
        {!isCollapsed && <h1 className="text-xl font-bold">EliteMart</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white hover:text-yellow-400 transition-colors duration-300"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Sidebar Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {items.map((item) => {
          const isActive = activeSection === item.text;
          return (
            <div
              key={item.text}
              onClick={() => handlePageChange(item.text)}
              className={`flex items-center ${
                isCollapsed ? "justify-center" : "space-x-4"
              } px-4 py-3 rounded-none cursor-pointer transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg"
                    : "hover:bg-gradient-to-r from-gray-700 to-black hover:shadow-md"
                }`}
            >
              <div
                className={`text-lg flex-shrink-0 ${
                  isActive ? "text-yellow-400" : "text-white"
                } transition-all duration-300`}
              >
                {item.icon}
              </div>
              {!isCollapsed && (
                <span
                  className={`font-medium ${
                    isActive ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {item.text.replace(/App$/, "")}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 text-center text-gray-400 text-sm border-t border-gray-700">
          © 2025 EliteMart
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
