"use client";

import ResumeDashboard from "@/components/ResumeDashboard";

const Dashboard = () => {
  const stats = [
    { label: "Total Users", value: "12,345", change: "+12%" },
    { label: "Revenue", value: "$45,678", change: "+8%" },
    { label: "Active Projects", value: "48", change: "+15%" },
    { label: "Conversion Rate", value: "2.4%", change: "+5%" },
  ];
  return (
    <main className="pt-20 p-4 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <ResumeDashboard/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-2xl font-bold">{stat.value}</p>
                <span className="text-green-500 text-sm">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                    <p className="text-sm">User activity {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {["Add User", "Create Project", "View Reports", "Settings"].map(
                (action) => (
                  <button
                    key={action}
                    className="p-4 rounded-lg text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    {action}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;