"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Settings,
  BarChart3,
  Bell,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const drawerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const stats = [
    { label: "Total Users", value: "12,345", change: "+12%" },
    { label: "Revenue", value: "$45,678", change: "+8%" },
    { label: "Active Projects", value: "48", change: "+15%" },
    { label: "Conversion Rate", value: "2.4%", change: "+5%" },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Sidebar */}
      <aside
        ref={drawerRef}
        className={`
          fixed top-0 left-0 z-40 h-screen transition-transform
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 w-64 
          ${isDarkMode ? "bg-gray-800" : "bg-white"}
          border-r ${isDarkMode ? "border-gray-700" : "border-gray-200"}
        `}
      >
        <div className="flex items-center justify-between h-16 px-4">
          <Link href={`/`}>
            <div className="flex items-center gap-2">
              {/* <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-3xl"
                > */}
              ⚡{/* </motion.span> */}
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Forge Ai
              </h1>
            </div>
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            <X
              className={`w-6 h-6 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            />
          </button>
        </div>

        <nav className="px-4 mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`
                  flex items-center w-full px-4 py-3 mb-2 rounded-lg
                  ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-white"
                      : `${
                          isDarkMode
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-600 hover:bg-gray-100"
                        }`
                  }
                `}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Top Navigation */}
        <header
          className={`
          fixed top-0 right-0 z-30 w-full md:w-[calc(100%-16rem)]
          ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }
          border-b h-16
        `}
        >
          <div className="flex items-center justify-between h-full px-4">
            <button className="md:hidden" onClick={toggleMenu}>
              <Menu
                className={`w-6 h-6 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              />
            </button>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <Bell
                  className={`w-6 h-6 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? (
                  <Sun className="w-6 h-6 text-white" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-800" />
                )}
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500" />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main
          className={`pt-20 p-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } shadow-lg`}
                >
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {stat.label}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <span className="text-green-500 text-sm">
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div
                className={`p-6 rounded-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className={`p-4 rounded-lg ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                        <p className="text-sm">User activity {item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`p-6 rounded-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg`}
              >
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Add User",
                    "Create Project",
                    "View Reports",
                    "Settings",
                  ].map((action) => (
                    <button
                      key={action}
                      className={`
                        p-4 rounded-lg text-left
                        ${
                          isDarkMode
                            ? "bg-gray-700 hover:bg-gray-600"
                            : "bg-gray-50 hover:bg-gray-100"
                        }
                        transition-colors duration-200
                      `}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
