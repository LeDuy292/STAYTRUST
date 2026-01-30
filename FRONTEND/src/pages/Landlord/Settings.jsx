import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaHome, FaBell, FaUser, FaLock, FaCreditCard, FaShieldAlt, 
  FaLanguage, FaPalette, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaSave, FaSignOutAlt, FaCog, FaBuilding, FaCheckCircle,
  FaGlobe, FaMoon, FaSun, FaCheck
} from 'react-icons/fa';

const Settings = () => {
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('vi');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false
  });

  const [profileData, setProfileData] = useState({
    fullName: 'Alexander Pierce',
    email: 'alexander.pierce@staytrust.vn',
    phone: '+84 901 234 567',
    address: '123 Nguyen Hue, District 1, Ho Chi Minh City',
    bio: 'Elite landlord with 10+ years of experience in property management',
    company: 'Pierce Properties Ltd.'
  });

  const settingsTabs = [
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'security', label: 'Security', icon: FaLock },
    { id: 'notifications', label: 'Notifications', icon: FaBell },
    { id: 'billing', label: 'Billing', icon: FaCreditCard },
    { id: 'privacy', label: 'Privacy', icon: FaShieldAlt },
    { id: 'preferences', label: 'Preferences', icon: FaPalette }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(at 0% 0%, rgba(19, 91, 236, 0.15) 0px, transparent 50%),
                       radial-gradient(at 100% 100%, rgba(19, 91, 236, 0.1) 0px, transparent 50%),
                       radial-gradient(at 50% 50%, rgba(10, 10, 10, 1) 0px, transparent 100%)`
        }}></div>
      </div>

      {/* Navigation Bar */}
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
                <div className="text-xs text-cyan-500 font-bold uppercase tracking-widest">Elite Portal</div>
              </div>
            </Link>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/landlord/dashboard" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Dashboard
              </Link>
              <Link to="/landlord/properties" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Properties
              </Link>
              <Link to="/landlord/prime" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Prime Plans
              </Link>
              <Link to="/landlord/features" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Features
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Notification Bell */}
              <button className="relative p-2 hover:bg-white/5 rounded-lg transition-colors">
                <FaBell className="text-xl text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold">
                    AP
                  </div>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-semibold">Alexander Pierce</div>
                    <div className="text-xs text-cyan-400">Elite Landlord</div>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-700/50 shadow-2xl overflow-hidden animate-fade-in-up">
                    <Link to="/landlord/dashboard" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors">
                      <FaHome className="text-cyan-400" />
                      <span>Dashboard</span>
                    </Link>
                    <Link to="/landlord/properties" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors">
                      <FaBuilding className="text-cyan-400" />
                      <span>My Properties</span>
                    </Link>
                    <Link to="/landlord/settings" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors bg-white/5">
                      <FaCog className="text-cyan-400" />
                      <span>Settings</span>
                    </Link>
                    <button
                      onClick={() => navigate('/auth')}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-500/10 transition-colors text-red-400 border-t border-gray-700/50"
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
      <div className="pt-24 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="text-gray-400 text-lg">Manage your account preferences and security</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Tabs */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-4 sticky top-24">
                {settingsTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-2 ${
                      activeTab === tab.id
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <tab.icon className="text-lg" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-3xl font-bold">
                        AP
                      </div>
                      <button className="absolute bottom-0 right-0 bg-cyan-500 p-2 rounded-full hover:bg-cyan-600 transition-colors">
                        <FaUser className="text-sm" />
                      </button>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{profileData.fullName}</h2>
                      <p className="text-cyan-400 flex items-center gap-2">
                        <FaCheckCircle /> Elite Landlord
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                        <input
                          type="text"
                          value={profileData.fullName}
                          onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                          className="w-full bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                          className="w-full bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                          className="w-full bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                        <input
                          type="text"
                          value={profileData.company}
                          onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                          className="w-full bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Address</label>
                      <input
                        type="text"
                        value={profileData.address}
                        onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                        className="w-full bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Bio</label>
                      <textarea
                        value={profileData.bio}
                        onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                        rows={4}
                        className="w-full bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
                      <FaSave />
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <FaLock className="text-cyan-400" />
                    Security Settings
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="w-full bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                        <input
                          type="password"
                          placeholder="New Password"
                          className="w-full bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                        <input
                          type="password"
                          placeholder="Confirm New Password"
                          className="w-full bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
                          Update Password
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-700/50 pt-6">
                      <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
                      <p className="text-gray-400 mb-4">Add an extra layer of security to your account</p>
                      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
                        Enable 2FA
                      </button>
                    </div>

                    <div className="border-t border-gray-700/50 pt-6">
                      <h3 className="text-lg font-semibold mb-4">Active Sessions</h3>
                      <div className="space-y-3">
                        {[
                          { device: 'MacBook Pro', location: 'Ho Chi Minh City', active: true },
                          { device: 'iPhone 14', location: 'Ho Chi Minh City', active: false }
                        ].map((session, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-700/50">
                            <div className="flex items-center gap-3">
                              <FaGlobe className="text-cyan-400 text-xl" />
                              <div>
                                <p className="font-medium">{session.device}</p>
                                <p className="text-sm text-gray-400">{session.location}</p>
                              </div>
                            </div>
                            {session.active && (
                              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Active</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <FaBell className="text-cyan-400" />
                    Notification Preferences
                  </h2>

                  <div className="space-y-4">
                    {[
                      { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
                      { key: 'push', label: 'Push Notifications', desc: 'Get browser push notifications' },
                      { key: 'sms', label: 'SMS Notifications', desc: 'Receive text messages for important updates' },
                      { key: 'marketing', label: 'Marketing Emails', desc: 'Receive promotional content and news' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-700/50">
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                        <button
                          onClick={() => setNotifications({...notifications, [item.key]: !notifications[item.key]})}
                          className={`relative w-14 h-7 rounded-full transition-colors ${
                            notifications[item.key] ? 'bg-cyan-500' : 'bg-gray-600'
                          }`}
                        >
                          <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            notifications[item.key] ? 'left-8' : 'left-1'
                          }`}></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preferences Tab */}
              {activeTab === 'preferences' && (
                <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <FaPalette className="text-cyan-400" />
                    Preferences
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Appearance</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => setIsDarkMode(true)}
                          className={`p-6 rounded-xl border-2 transition-all ${
                            isDarkMode
                              ? 'border-cyan-500 bg-cyan-500/10'
                              : 'border-gray-700/50 bg-gray-900/50'
                          }`}
                        >
                          <FaMoon className="text-3xl mb-3 mx-auto" />
                          <p className="font-medium">Dark Mode</p>
                          {isDarkMode && <FaCheck className="text-cyan-400 mt-2 mx-auto" />}
                        </button>
                        <button
                          onClick={() => setIsDarkMode(false)}
                          className={`p-6 rounded-xl border-2 transition-all ${
                            !isDarkMode
                              ? 'border-cyan-500 bg-cyan-500/10'
                              : 'border-gray-700/50 bg-gray-900/50'
                          }`}
                        >
                          <FaSun className="text-3xl mb-3 mx-auto" />
                          <p className="font-medium">Light Mode</p>
                          {!isDarkMode && <FaCheck className="text-cyan-400 mt-2 mx-auto" />}
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-700/50 pt-6">
                      <h3 className="text-lg font-semibold mb-4">Language</h3>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="vi">Tiếng Việt</option>
                        <option value="en">English</option>
                        <option value="ja">日本語</option>
                        <option value="ko">한국어</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === 'billing' && (
                <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <FaCreditCard className="text-cyan-400" />
                    Billing & Subscription
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">Prime Yearly Plan</h3>
                          <p className="text-gray-400">Active until Dec 31, 2024</p>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-cyan-400">₫2.99M</p>
                          <p className="text-sm text-gray-400">per year</p>
                        </div>
                      </div>
                      <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition-colors">
                        Manage Subscription
                      </button>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                      <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FaCreditCard className="text-2xl text-cyan-400" />
                          <div>
                            <p className="font-medium">**** **** **** 4242</p>
                            <p className="text-sm text-gray-400">Expires 12/25</p>
                          </div>
                        </div>
                        <button className="text-cyan-400 hover:text-cyan-300 font-medium">Change</button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Billing History</h3>
                      <div className="space-y-2">
                        {[
                          { date: 'Jan 1, 2024', amount: '₫2.99M', status: 'Paid' },
                          { date: 'Jan 1, 2023', amount: '₫2.99M', status: 'Paid' }
                        ].map((invoice, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-700/50">
                            <div>
                              <p className="font-medium">{invoice.date}</p>
                              <p className="text-sm text-gray-400">{invoice.amount}</p>
                            </div>
                            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                              {invoice.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy Tab */}
              {activeTab === 'privacy' && (
                <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <FaShieldAlt className="text-cyan-400" />
                    Privacy & Data
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-3">Profile Visibility</h3>
                      <p className="text-gray-400 mb-4">Control who can see your profile information</p>
                      <select className="w-full bg-gray-900/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors">
                        <option>Public</option>
                        <option>Tenants Only</option>
                        <option>Private</option>
                      </select>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-3">Data Export</h3>
                      <p className="text-gray-400 mb-4">Download all your data in a portable format</p>
                      <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
                        Request Data Export
                      </button>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-3 text-red-400">Danger Zone</h3>
                      <p className="text-gray-400 mb-4">Permanently delete your account and all data</p>
                      <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold py-3 px-8 rounded-xl transition-colors border border-red-500/50">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
