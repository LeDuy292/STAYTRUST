import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaLightbulb,
  FaWater,
  FaWifi,
  FaCreditCard,
  FaRobot,
  FaChartBar,
  FaChartPie,
  FaUsers,
  FaTools,
  FaCalendarAlt,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaImages,
  FaMobileAlt,
  FaDesktop,
  FaClock,
  FaBolt,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaPlay,
  FaExpand,
  FaDownload,
  FaSync,
  FaCloud,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaComments,
  FaFileInvoice,
  FaMoneyBillWave,
  FaQrcode,
  FaBuilding,
  FaBed,
  FaDollarSign,
  FaUserShield,
  FaCrown,
  FaRocket,
} from "react-icons/fa";

const Features = () => {
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [activeDemo, setActiveDemo] = useState(0);

  const categories = [
    { id: "all", name: "All Features", icon: FaStar, count: 9 },
    {
      id: "management",
      name: "Property Management",
      icon: FaBuilding,
      count: 3,
    },
    {
      id: "analytics",
      name: "Analytics & Reports",
      icon: FaChartBar,
      count: 3,
    },
    { id: "automation", name: "Automation", icon: FaRobot, count: 3 },
    { id: "payment", name: "Payments", icon: FaCreditCard, count: 0 },
  ];

  const features = [
    {
      id: 1,
      category: "management",
      icon: FaHome,
      title: "Unlimited Listings",
      description:
        "List unlimited properties with rich media support. Add photos, videos, 3D tours, and detailed descriptions.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=90",
      color: "cyan",
      benefits: [
        "Unlimited properties",
        "HD photos & videos",
        "3D virtual tours",
        "Floor plans",
      ],
      stats: { label: "Avg. listing time", value: "2 min" },
    },
    {
      id: 2,
      category: "management",
      icon: FaMapMarkedAlt,
      title: "Interactive Maps",
      description:
        "Show exact location with nearby amenities. Integrated with Google Maps for easy navigation.",
      image:
        "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&fit=crop&q=90",
      color: "blue",
      benefits: [
        "Google Maps integration",
        "Nearby amenities",
        "Street view",
        "Distance calculator",
      ],
      stats: { label: "Location accuracy", value: "99.9%" },
    },
    {
      id: 3,
      category: "management",
      icon: FaCalendarAlt,
      title: "Smart Scheduling",
      description:
        "Automated viewing appointments with calendar sync. Tenants can book directly from listings.",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop&q=90",
      color: "purple",
      benefits: [
        "Auto scheduling",
        "Calendar sync",
        "SMS reminders",
        "No-show tracking",
      ],
      stats: { label: "Time saved", value: "10hrs/week" },
    },
    {
      id: 4,
      category: "analytics",
      icon: FaChartLine,
      title: "Revenue Analytics",
      description:
        "Track income, expenses, and profit margins. Generate detailed financial reports instantly.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=90",
      color: "green",
      benefits: [
        "Real-time tracking",
        "Expense categorization",
        "Profit forecasting",
        "Tax reports",
      ],
      stats: { label: "Revenue increase", value: "+35%" },
    },
    {
      id: 5,
      category: "analytics",
      icon: FaChartBar,
      title: "Occupancy Reports",
      description:
        "Monitor vacancy rates, booking trends, and optimize pricing strategies.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=90",
      color: "orange",
      benefits: [
        "Vacancy tracking",
        "Seasonal trends",
        "Price optimization",
        "Competitor analysis",
      ],
      stats: { label: "Occupancy rate", value: "95%+" },
    },
    {
      id: 6,
      category: "analytics",
      icon: FaChartPie,
      title: "Performance Dashboard",
      description:
        "Visualize all key metrics in one place. Customizable widgets and real-time updates.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=90",
      color: "cyan",
      benefits: [
        "Custom dashboards",
        "Real-time data",
        "Export reports",
        "Mobile access",
      ],
      stats: { label: "Data points", value: "50+" },
    },
    {
      id: 7,
      category: "automation",
      icon: FaRobot,
      title: "AI Chatbot",
      description:
        "24/7 automated responses to common tenant inquiries. Reduces response time by 90%.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop&q=90",
      color: "purple",
      benefits: [
        "24/7 availability",
        "Multi-language",
        "Smart learning",
        "Human handoff",
      ],
      stats: { label: "Response time", value: "<1 min" },
    },
    {
      id: 8,
      category: "automation",
      icon: FaBell,
      title: "Smart Notifications",
      description:
        "Get instant alerts for bookings, payments, issues, and more. Customize notification preferences.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&q=90",
      color: "red",
      benefits: [
        "Push notifications",
        "Email alerts",
        "SMS updates",
        "Custom rules",
      ],
      stats: { label: "Alerts/month", value: "200+" },
    },
    {
      id: 9,
      category: "automation",
      icon: FaFileInvoice,
      title: "Auto Invoicing",
      description:
        "Generate and send invoices automatically. Track payments and send reminders.",
      image:
        "https://images.unsplash.com/photo-1554224311-beee460201f9?w=600&h=400&fit=crop&q=90",
      color: "blue",
      benefits: [
        "Auto generation",
        "Payment tracking",
        "Late reminders",
        "Custom templates",
      ],
      stats: { label: "Time saved", value: "8hrs/week" },
    },
  ];

  const demoScreens = [
    {
      title: "Dashboard Overview",
      description:
        "Get a bird's eye view of all your properties, revenue, and key metrics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&q=90",
      color: "cyan",
    },
    {
      title: "Property Listings",
      description:
        "Create beautiful listings with photos, videos, and detailed information",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=700&fit=crop&q=90",
      color: "blue",
    },
    {
      title: "Analytics Reports",
      description:
        "Dive deep into performance metrics and make data-driven decisions",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&q=90",
      color: "purple",
    },
    {
      title: "Mobile Experience",
      description:
        "Manage everything from your phone with our powerful mobile app",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=700&fit=crop&q=90",
      color: "green",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      icon: FaUserShield,
      title: "Sign Up & Verify",
      description:
        "Create your account in 2 minutes. Get verified with our simple process.",
      color: "cyan",
    },
    {
      step: 2,
      icon: FaHome,
      title: "Add Properties",
      description:
        "List your properties with photos and details. We'll optimize visibility.",
      color: "blue",
    },
    {
      step: 3,
      icon: FaRocket,
      title: "Go Live",
      description:
        "Your properties go live instantly. Start receiving inquiries immediately.",
      color: "purple",
    },
    {
      step: 4,
      icon: FaCrown,
      title: "Upgrade to Prime",
      description:
        "Unlock unlimited features, AI tools, and priority placement.",
      color: "yellow",
    },
  ];

  const integrations = [
    { name: "Google Calendar", logo: "📅", color: "blue" },
    { name: "Momo", logo: "💰", color: "pink" },
    { name: "ZaloPay", logo: "💳", color: "cyan" },
    { name: "VNPay", logo: "🏦", color: "orange" },
    { name: "QuickBooks", logo: "📊", color: "green" },
    { name: "Zapier", logo: "⚡", color: "orange" },
    { name: "Slack", logo: "💬", color: "purple" },
    { name: "Google Maps", logo: "🗺️", color: "red" },
  ];

  const filteredFeatures =
    selectedCategory === "all"
      ? features
      : features.filter((f) => f.category === selectedCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoScreens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
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
                className="text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1"
              >
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
                    <div className="text-sm font-semibold">
                      Alexander Pierce
                    </div>
                    <div className="text-xs text-cyan-400">Elite Landlord</div>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-700/50 shadow-2xl overflow-hidden animate-fade-in-up">
                    <Link
                      to="/landlord/dashboard"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                    >
                      <FaHome className="text-cyan-400" />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      to="/landlord/properties"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                    >
                      <FaBuilding className="text-cyan-400" />
                      <span>My Properties</span>
                    </Link>
                    <Link
                      to="/landlord/settings"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                    >
                      <FaCog className="text-gray-400" />
                      <span>Settings</span>
                    </Link>
                    <button
                      onClick={() => navigate("/auth")}
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
      <div className="pt-24 pb-12">
        {/* Hero Section */}
        <div className="relative px-6 py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6 animate-fade-in-up">
              <FaBolt className="text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">
                POWERFUL FEATURES
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Succeed
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Discover 24+ powerful features designed to simplify property
              management and maximize your revenue
            </p>

            {/* Demo Carousel */}
            <div className="max-w-5xl mx-auto mb-12 animate-fade-in-up animation-delay-600">
              <div className="relative bg-white/[0.03] backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl overflow-hidden group">
                <img
                  src={demoScreens[activeDemo].image}
                  alt={demoScreens[activeDemo].title}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div
                    className={`inline-block px-3 py-1 bg-${demoScreens[activeDemo].color}-500/20 border border-${demoScreens[activeDemo].color}-500/50 rounded-full text-sm font-semibold mb-3`}
                  >
                    Screenshot {activeDemo + 1} of {demoScreens.length}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">
                    {demoScreens[activeDemo].title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {demoScreens[activeDemo].description}
                  </p>
                </div>

                {/* Demo Navigation Dots */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {demoScreens.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveDemo(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeDemo === index
                          ? "bg-cyan-400 w-8"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30"
                    : "bg-white/[0.03] border border-white/10 hover:bg-white/[0.05]"
                }`}
              >
                <category.icon />
                <span>{category.name}</span>
                <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature, index) => (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>

                  {/* Icon Badge */}
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 bg-${feature.color}-500/20 backdrop-blur-md border border-${feature.color}-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon
                      className={`text-2xl text-${feature.color}-400`}
                    />
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs text-gray-400">
                      {feature.stats.label}
                    </div>
                    <div className={`font-bold text-${feature.color}-400`}>
                      {feature.stats.value}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {feature.benefits
                      .slice(0, hoveredFeature === feature.id ? 4 : 2)
                      .map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <FaCheckCircle
                            className={`text-${feature.color}-400 flex-shrink-0`}
                          />
                          <span>{benefit}</span>
                        </div>
                      ))}
                  </div>

                  {/* Learn More */}
                  {hoveredFeature === feature.id && (
                    <button className="mt-4 w-full py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 animate-fade-in-up">
                      Learn More
                      <FaArrowRight />
                    </button>
                  )}
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-${feature.color}-500/0 group-hover:bg-${feature.color}-500/10 blur-xl transition-all duration-500 -z-10`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Get started in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="relative text-center"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Connector Line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                )}

                {/* Step Number */}
                <div
                  className={`relative z-10 w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-${step.color}-500/20 to-${step.color}-600/20 border-2 border-${step.color}-500/50 rounded-full flex items-center justify-center group hover:scale-110 transition-transform`}
                >
                  <div className="absolute inset-2 bg-[#0a0a0a] rounded-full"></div>
                  <step.icon
                    className={`text-5xl text-${step.color}-400 relative z-10`}
                  />
                  <div
                    className={`absolute -top-2 -right-2 w-10 h-10 bg-${step.color}-500 rounded-full flex items-center justify-center font-bold text-lg`}
                  >
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Seamless{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Connect with tools you already use
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/[0.05] transition-all hover:-translate-y-2 group"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {integration.logo}
                </div>
                <div className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <FaRocket className="text-6xl text-cyan-400 mb-6 mx-auto animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join 10,000+ successful landlords using STAYTRUST features to
                grow their property business
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/landlord/prime"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/30 inline-flex items-center justify-center gap-2"
                >
                  Get Started Now
                  <FaArrowRight />
                </Link>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center gap-2">
                  <FaPlay />
                  Watch Demo
                </button>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <FaCheckCircle className="inline text-green-400 mr-2" />
                Free 15-day trial • No credit card required • Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Features;
