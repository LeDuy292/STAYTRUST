import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaDollarSign,
  FaChartLine,
  FaTools,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaFileInvoiceDollar,
  FaBuilding,
  FaCalendarAlt,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";

const LandlordLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      path: "/landlord",
      icon: FaChartLine,
      label: "Tổng quan",
      color: "cyan",
    },
    {
      path: "/landlord/properties",
      icon: FaBuilding,
      label: "Quản lý trọ",
      color: "blue",
    },
    {
      path: "/landlord/tenants",
      icon: FaUsers,
      label: "Người thuê",
      color: "green",
    },
    {
      path: "/landlord/maintenance",
      icon: FaTools,
      label: "Bảo trì",
      color: "orange",
    },
    {
      path: "/landlord/finance",
      icon: FaDollarSign,
      label: "Tài chính",
      color: "purple",
    },
    {
      path: "/landlord/invoices",
      icon: FaFileInvoiceDollar,
      label: "Hóa đơn",
      color: "pink",
    },
    {
      path: "/landlord/calendar",
      icon: FaCalendarAlt,
      label: "Lịch hẹn",
      color: "indigo",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "payment",
      message: "Thanh toán mới từ phòng A101",
      time: "5 phút trước",
      unread: true,
    },
    {
      id: 2,
      type: "maintenance",
      message: "Yêu cầu sửa điều hòa - Phòng B205",
      time: "1 giờ trước",
      unread: true,
    },
    {
      id: 3,
      type: "info",
      message: "Hợp đồng phòng C302 sắp hết hạn",
      time: "2 giờ trước",
      unread: false,
    },
  ];

  const isActive = (path) => {
    if (path === "/landlord") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 bottom-0 z-50 bg-gray-900/95 backdrop-blur-lg border-r border-gray-700/50 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <Link to="/landlord" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <FaHome className="text-xl" />
              </div>
              {sidebarOpen && (
                <div className="overflow-hidden">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                    StayTrust
                  </h1>
                  <p className="text-xs text-gray-400 whitespace-nowrap">
                    Landlord Portal
                  </p>
                </div>
              )}
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group relative overflow-hidden ${
                    active
                      ? `bg-gradient-to-r from-${item.color}-600 to-${item.color}-700 shadow-lg shadow-${item.color}-500/30`
                      : "hover:bg-gray-800/50"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-${item.color}-600/0 to-${item.color}-600/0 group-hover:from-${item.color}-600/10 group-hover:to-${item.color}-600/20 transition-all duration-300`}
                  ></div>
                  <Icon
                    className={`text-xl relative z-10 ${active ? "text-white" : `text-${item.color}-400`} group-hover:scale-110 transition-transform duration-300`}
                  />
                  {sidebarOpen && (
                    <span className="font-semibold whitespace-nowrap relative z-10">
                      {item.label}
                    </span>
                  )}
                  {active && (
                    <div className="absolute right-0 w-1 h-full bg-white rounded-l-full"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-700/50">
            <div
              className={`flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors ${!sidebarOpen && "justify-center"}`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center font-bold">
                CQ
              </div>
              {sidebarOpen && (
                <div className="flex-1">
                  <div className="font-semibold">Chủ Quản</div>
                  <div className="text-xs text-gray-400">
                    landlord@staytrust.com
                  </div>
                </div>
              )}
            </div>
            {sidebarOpen && (
              <button className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 rounded-lg transition-colors text-red-400">
                <FaSignOutAlt />
                Đăng xuất
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"}`}
      >
        {/* Header */}
        <header className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Left side */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  {sidebarOpen ? (
                    <FaTimes className="text-xl" />
                  ) : (
                    <FaBars className="text-xl" />
                  )}
                </button>

                {/* Search */}
                <div className="relative hidden md:block">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="pl-10 pr-4 py-2 w-80 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-4">
                {/* Notifications */}
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                  >
                    <FaBell className="text-xl" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  </button>

                  {showNotifications && (
                    <div
                      className="absolute right-0 mt-2 w-80 bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden"
                      style={{ animation: "slideDown 0.3s ease-out" }}
                    >
                      <div className="p-4 border-b border-gray-700">
                        <h3 className="font-bold">Thông báo</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notif) => (
                          <div
                            key={notif.id}
                            className={`p-4 border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors cursor-pointer ${
                              notif.unread ? "bg-cyan-600/5" : ""
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              {notif.unread && (
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                              )}
                              <div className="flex-1">
                                <p className="text-sm">{notif.message}</p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {notif.time}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 text-center border-t border-gray-700">
                        <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                          Xem tất cả
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Settings */}
                <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                  <FaCog className="text-xl" />
                </button>

                {/* Messages */}
                <button className="relative p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                  <FaEnvelope className="text-xl" />
                  <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-lg">
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  StayTrust
                </h3>
                <p className="text-sm text-gray-400">
                  Nền tảng quản lý trọ chuyên nghiệp cho chủ nhà.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Sản phẩm</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Tính năng
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Bảng giá
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Bảo mật
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Hỗ trợ</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Trung tâm trợ giúp
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Liên hệ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Điều khoản
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Theo dõi</h4>
                <div className="flex gap-3">
                  {["Facebook", "Twitter", "Instagram"].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      {social.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700/50 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2026 StayTrust. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LandlordLayout;
