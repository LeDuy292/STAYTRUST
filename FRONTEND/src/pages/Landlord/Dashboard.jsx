import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaCalendarAlt,
  FaArrowUp,
  FaArrowDown,
  FaTools,
  FaBolt,
  FaChevronRight,
  FaPlus,
} from "react-icons/fa";

const LandlordDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);

  const stats = {
    totalRooms: 124,
    occupiedRooms: 118,
    monthlyRevenue: 42.5,
    occupancyRate: 95.1,
  };

  const priorityIssues = [
    {
      id: 1,
      title: "Water Leak - Suite 402",
      reporter: "Sarah Jenkins",
      time: "2 hours ago",
      priority: "High Priority",
      priorityColor: "orange",
      icon: FaTools,
    },
    {
      id: 2,
      title: "AC Malfunction - Penthouse B",
      reporter: "Marcus Thorne",
      time: "5 hours ago",
      priority: "Medium",
      priorityColor: "blue",
      icon: FaBolt,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(at 0% 0%, rgba(19, 91, 236, 0.15) 0px, transparent 50%),
                       radial-gradient(at 100% 100%, rgba(19, 91, 236, 0.1) 0px, transparent 50%),
                       radial-gradient(at 50% 50%, rgba(10, 10, 10, 1) 0px, transparent 100%)`,
          }}
        ></div>
      </div>

      {/* Navigation Bar - Same as LandlordHome */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/landlord/home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                <FaHome className="text-2xl" />
              </div>
              <div>
                <div className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  STAYTRUST
                </div>
                <div className="text-xs text-cyan-500 font-bold uppercase tracking-widest">
                  Elite Portal
                </div>
              </div>
            </Link>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/landlord/dashboard"
                className="text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1"
              >
                Dashboard
              </Link>
              <Link
                to="/landlord/properties"
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Properties
              </Link>
              <Link
                to="/landlord/prime"
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Prime Plans
              </Link>
              <Link
                to="/landlord/features"
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Features
              </Link>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                <FaBell className="text-xl text-gray-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-colors border border-gray-700/50"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border border-white/20 flex items-center justify-center font-semibold text-sm">
                    AP
                  </div>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-semibold">
                      Alexander Pierce
                    </div>
                    <div className="text-xs text-gray-400">Elite Landlord</div>
                  </div>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-xl shadow-xl overflow-hidden">
                    <Link
                      to="/landlord/dashboard"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors"
                    >
                      <FaChartLine className="text-cyan-400" />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      to="/landlord/properties"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors"
                    >
                      <FaHome className="text-blue-400" />
                      <span>My Properties</span>
                    </Link>
                    <Link
                      to="/landlord/settings"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors"
                    >
                      <FaCog className="text-gray-400" />
                      <span>Settings</span>
                    </Link>
                    <div className="border-t border-gray-700"></div>
                    <button
                      onClick={() => navigate("/auth")}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors w-full text-left text-red-400"
                    >
                      <FaSignOutAlt />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-6 pb-10 max-w-7xl mx-auto flex flex-col gap-6">
        {/* Top Header Search */}
        <header className="w-full h-16 backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-xl px-6 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="flex items-center gap-4 flex-1">
            <FaSearch className="text-slate-400 text-lg" />
            <input
              className="bg-transparent border-none focus:ring-0 text-sm text-slate-300 w-full max-w-md outline-none placeholder-slate-500"
              placeholder="Search portfolio, residents, or payments..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110 relative">
              <FaBell className="text-slate-300" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-cyan-500 rounded-full border border-[#0a0a0a]"></span>
            </button>
            <button className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110">
              <FaCalendarAlt className="text-slate-300" />
            </button>
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <p className="text-xs font-medium text-slate-400">Monday, Oct 23</p>
          </div>
        </header>

        {/* KPI Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Rooms */}
          <div className="backdrop-blur-xl bg-white/[0.05] border border-white/10 p-6 rounded-xl flex flex-col gap-1 relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_15px_rgba(19,91,236,0.2)] transition-all duration-300">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Total Rooms
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-3xl font-bold text-white">
                {stats.totalRooms}
              </h3>
              <span className="text-emerald-400 text-xs font-semibold bg-emerald-400/10 px-2 py-0.5 rounded flex items-center gap-1">
                <FaArrowUp className="text-xs" /> 2%
              </span>
            </div>
          </div>

          {/* Occupied Rooms */}
          <div className="backdrop-blur-xl bg-white/[0.05] border border-white/10 p-6 rounded-xl flex flex-col gap-1 relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_15px_rgba(19,91,236,0.2)] transition-all duration-300">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Occupied Rooms
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-3xl font-bold text-white">
                {stats.occupiedRooms}
              </h3>
              <span className="text-emerald-400 text-xs font-semibold bg-emerald-400/10 px-2 py-0.5 rounded flex items-center gap-1">
                <FaArrowUp className="text-xs" /> 1%
              </span>
            </div>
          </div>

          {/* Monthly Revenue */}
          <div className="backdrop-blur-xl bg-white/[0.05] border border-white/10 p-6 rounded-xl flex flex-col gap-1 relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_15px_rgba(19,91,236,0.2)] transition-all duration-300">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Monthly Revenue
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-3xl font-bold text-white">
                ₫{stats.monthlyRevenue}k
              </h3>
              <span className="text-emerald-400 text-xs font-semibold bg-emerald-400/10 px-2 py-0.5 rounded flex items-center gap-1">
                <FaArrowUp className="text-xs" /> 8%
              </span>
            </div>
          </div>

          {/* Occupancy Rate */}
          <div className="backdrop-blur-xl bg-white/[0.05] border border-white/10 p-6 rounded-xl flex flex-col gap-1 relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_15px_rgba(19,91,236,0.2)] transition-all duration-300">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Occupancy Rate
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-3xl font-bold text-white">
                {stats.occupancyRate}%
              </h3>
              <span className="text-orange-400 text-xs font-semibold bg-orange-400/10 px-2 py-0.5 rounded flex items-center gap-1">
                <FaArrowDown className="text-xs" /> 0.5%
              </span>
            </div>
          </div>
        </section>

        {/* Main Charts Section */}
        <div className="flex flex-col lg:flex-row gap-6 min-h-[400px]">
          {/* Revenue Line Chart */}
          <div className="flex-[2] backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-xl p-8 relative flex flex-col shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-white">Revenue Trends</h2>
                <p className="text-sm text-slate-400">
                  Yearly performance overview
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-medium text-slate-300 hover:bg-white/10 transition-colors">
                  1M
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-[#135bec] text-xs font-medium text-white shadow-lg shadow-[#135bec]/20">
                  6M
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-medium text-slate-300 hover:bg-white/10 transition-colors">
                  1Y
                </button>
              </div>
            </div>
            <div className="flex-1 relative flex items-end w-full pb-4">
              {/* Simulated Line Chart */}
              <svg
                className="w-full h-full drop-shadow-[0_0_15px_rgba(19,91,236,0.3)]"
                preserveAspectRatio="none"
                viewBox="0 0 800 200"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#135bec"
                      stopOpacity="0.3"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="#135bec"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0,150 Q100,140 200,170 T400,100 T600,80 T800,120 L800,200 L0,200 Z"
                  fill="url(#chartGradient)"
                ></path>
                <path
                  d="M0,150 Q100,140 200,170 T400,100 T600,80 T800,120"
                  fill="none"
                  stroke="#135bec"
                  strokeLinecap="round"
                  strokeWidth="3"
                ></path>
                <circle
                  cx="400"
                  cy="100"
                  fill="#135bec"
                  r="4"
                  stroke="white"
                  strokeWidth="2"
                ></circle>
              </svg>
              {/* Floating Tooltip */}
              <div className="absolute left-1/2 top-12 -translate-x-1/2 backdrop-blur-xl bg-white/[0.03] border border-white/10 px-4 py-2 rounded-lg border-[#135bec]/50 flex flex-col items-center pointer-events-none shadow-2xl">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  August
                </span>
                <span className="text-sm font-bold text-white">
                  ₫48,200.000
                </span>
              </div>
              <div className="absolute bottom-0 w-full flex justify-between text-[10px] text-slate-500 font-bold px-2">
                <span>JAN</span>
                <span>MAR</span>
                <span>MAY</span>
                <span>JUL</span>
                <span>SEP</span>
                <span>NOV</span>
              </div>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="flex-1 backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-xl p-8 flex flex-col shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <h2 className="text-xl font-bold text-white mb-1">Room Status</h2>
            <p className="text-sm text-slate-400 mb-8">
              Current inventory health
            </p>
            <div className="flex-1 flex items-center justify-center relative">
              <div
                className="w-48 h-48 rounded-full border-[18px] border-slate-800/50 flex items-center justify-center relative"
                style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.5))" }}
              >
                <svg className="absolute inset-[-18px] w-[calc(100%+36px)] h-[calc(100%+36px)] -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    fill="none"
                    r="96"
                    stroke="#135bec"
                    strokeDasharray="450 600"
                    strokeLinecap="round"
                    strokeWidth="18"
                  ></circle>
                  <circle
                    cx="50%"
                    cy="50%"
                    fill="none"
                    opacity="0.6"
                    r="96"
                    stroke="#3b82f6"
                    strokeDasharray="100 600"
                    strokeDashoffset="-460"
                    strokeLinecap="round"
                    strokeWidth="18"
                  ></circle>
                </svg>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white leading-none">
                    {stats.totalRooms}
                  </p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 tracking-widest">
                    Total
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#135bec] shadow-[0_0_8px_rgba(19,91,236,0.6)]"></div>
                <span className="text-xs text-slate-300 font-medium">
                  Occupied ({stats.occupiedRooms})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                <span className="text-xs text-slate-300 font-medium">
                  Vacant (4)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 opacity-60"></div>
                <span className="text-xs text-slate-300 font-medium">
                  Maintenance (2)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                <span className="text-xs text-slate-300 font-medium">
                  Reserved (0)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Priority Issues */}
        <section className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-xl p-6 mb-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Priority Issues</h3>
            <button className="text-[#135bec] text-xs font-bold hover:underline flex items-center gap-2">
              View All Tickets <FaChevronRight className="text-xs" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {priorityIssues.map((issue) => {
              const Icon = issue.icon;
              return (
                <div
                  key={issue.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-${issue.priorityColor}-500/20 text-${issue.priorityColor}-500 flex items-center justify-center`}
                    >
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {issue.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        Reported by {issue.reporter} • {issue.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span
                      className={`px-3 py-1 rounded-full bg-${issue.priorityColor}-500/10 text-${issue.priorityColor}-500 text-[10px] font-bold uppercase tracking-wider border border-${issue.priorityColor}-500/20`}
                    >
                      {issue.priority}
                    </span>
                    <FaChevronRight className="text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Floating Global Action Button */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-[#135bec] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#135bec]/40 hover:scale-110 transition-transform z-20 group">
        <FaPlus className="text-3xl group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default LandlordDashboard;
