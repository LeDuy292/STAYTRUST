import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaStar,
  FaCheckCircle,
  FaRocket,
  FaBolt,
  FaCrown,
  FaShieldAlt,
  FaDollarSign,
  FaLightbulb,
  FaWater,
  FaWifi,
  FaCreditCard,
  FaChartBar,
  FaChartPie,
  FaUsers,
  FaTools,
  FaBell,
  FaRobot,
  FaMapMarkedAlt,
  FaImages,
  FaCalendarAlt,
  FaArrowRight,
  FaPlay,
  FaQuoteLeft,
  FaAward,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const LandlordHome = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Detect active section
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "10,000+", label: "Active Listings", icon: FaHome, color: "cyan" },
    {
      value: "98%",
      label: "Customer Satisfaction",
      icon: FaStar,
      color: "yellow",
    },
    {
      value: "₫25M",
      label: "Average Monthly Revenue",
      icon: FaChartLine,
      color: "green",
    },
    {
      value: "50+",
      label: "Cities Covered",
      icon: FaMapMarkedAlt,
      color: "purple",
    },
  ];

  const primeFeatures = [
    {
      icon: FaStar,
      title: "Highlighted Listing",
      description: "Stand out with premium badge and top placement",
      color: "yellow",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Priority Map Display",
      description: "Appear first in location-based searches",
      color: "cyan",
    },
    {
      icon: FaImages,
      title: "Unlimited Media",
      description: "Upload unlimited photos and videos of your property",
      color: "blue",
    },
    {
      icon: FaRobot,
      title: "AI Chatbot",
      description: "Automated responses to common tenant questions",
      color: "purple",
    },
    {
      icon: FaChartBar,
      title: "Advanced Analytics",
      description: "Detailed insights on views, contacts, and occupancy",
      color: "green",
    },
    {
      icon: FaShieldAlt,
      title: "Verified Badge",
      description: '"Verified by STAYTRUST" trust indicator',
      color: "orange",
    },
  ];

  const pricingPlans = [
    {
      name: "Free Trial",
      price: "0",
      period: "15 days",
      description: "Try STAYTRUST with limited features",
      features: [
        "Up to 5 listings",
        "Basic analytics",
        "Standard support",
        "Manual payment tracking",
      ],
      color: "gray",
      popular: false,
    },
    {
      name: "Prime Monthly",
      price: "299,000",
      period: "per month",
      description: "Perfect for individual landlords",
      features: [
        "Unlimited listings",
        "Priority map placement",
        "AI Chatbot included",
        "Advanced analytics",
        "Automated billing",
        "Verified badge",
        "24/7 priority support",
      ],
      color: "cyan",
      popular: true,
    },
    {
      name: "Prime Yearly",
      price: "2,990,000",
      period: "per year",
      description: "Best value - Save 17%",
      features: [
        "All Monthly features",
        "Save ₫598,000/year",
        "Free property photos",
        "Dedicated account manager",
        "Custom branding",
        "API access",
      ],
      color: "purple",
      popular: false,
    },
  ];

  const managementFeatures = [
    {
      icon: FaLightbulb,
      title: "Electricity Tracking",
      description: "Automated meter reading and bill calculation",
      metrics: [
        { label: "Avg. Consumption", value: "245 kWh" },
        { label: "Monthly Cost", value: "₫735K" },
      ],
      color: "yellow",
    },
    {
      icon: FaWater,
      title: "Water Management",
      description: "Track water usage and generate invoices",
      metrics: [
        { label: "Avg. Usage", value: "18 m³" },
        { label: "Monthly Cost", value: "₫180K" },
      ],
      color: "blue",
    },
    {
      icon: FaWifi,
      title: "Service Fees",
      description: "Internet, parking, cleaning, and more",
      metrics: [
        { label: "Services", value: "5 types" },
        { label: "Total/Month", value: "₫350K" },
      ],
      color: "purple",
    },
    {
      icon: FaCreditCard,
      title: "In-App Payment",
      description: "Secure payment processing with instant settlement",
      metrics: [
        { label: "Success Rate", value: "99.8%" },
        { label: "Avg. Time", value: "< 2 min" },
      ],
      color: "green",
    },
  ];

  const dashboardFeatures = [
    {
      icon: FaChartLine,
      title: "Revenue Analytics",
      count: "Real-time",
      color: "green",
    },
    {
      icon: FaHome,
      title: "Property Management",
      count: "12 units",
      color: "cyan",
    },
    {
      icon: FaUsers,
      title: "Tenant Portal",
      count: "42 tenants",
      color: "blue",
    },
    {
      icon: FaTools,
      title: "Issue Tracking",
      count: "3 pending",
      color: "orange",
    },
    {
      icon: FaBell,
      title: "Smart Notifications",
      count: "8 alerts",
      color: "purple",
    },
    {
      icon: FaCalendarAlt,
      title: "Booking Calendar",
      count: "Integrated",
      color: "pink",
    },
  ];

  const testimonials = [
    {
      name: "Nguyen Van A",
      role: "Property Owner",
      avatar: "NVA",
      rating: 5,
      text: "STAYTRUST helped me manage 15 properties effortlessly. The automated billing feature alone saves me 10 hours per month!",
      location: "Da Nang",
    },
    {
      name: "Tran Thi B",
      role: "Boarding House Owner",
      avatar: "TTB",
      rating: 5,
      text: "Prime package paid for itself in the first month. I got 5x more inquiries and filled all my vacant rooms within 2 weeks.",
      location: "Ho Chi Minh City",
    },
    {
      name: "Le Van C",
      role: "Apartment Manager",
      avatar: "LVC",
      rating: 5,
      text: "The AI chatbot handles 80% of repetitive questions. I can focus on providing better service to my tenants.",
      location: "Hanoi",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/landlord/home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaHome className="text-2xl" />
              </div>
              <div>
                <div className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  STAYTRUST
                </div>
                <div className="text-xs text-gray-400">Landlord Portal</div>
              </div>
            </Link>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/landlord/dashboard"
                className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold"
              >
                Dashboard
              </Link>
              <Link
                to="/landlord/properties"
                className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold"
              >
                Properties
              </Link>
              <Link
                to="/landlord/prime"
                className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold"
              >
                Prime Plans
              </Link>
              <Link
                to="/landlord/features"
                className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold"
              >
                Features
              </Link>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                <FaBell className="text-xl text-gray-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-500 rounded-full"></span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-colors border border-gray-700/50"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
                    CQ
                  </div>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-semibold">Chủ Quản</div>
                    <div className="text-xs text-gray-400">Landlord</div>
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

      {/* Hero Section */}
      <section
        id="hero"
        ref={(el) => (sectionsRef.current[0] = el)}
        className="relative min-h-screen flex items-center justify-center px-6 py-20 mt-20"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2560&h=1440&fit=crop&q=95"
            alt="Modern luxury apartment building"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/30 to-gray-900/60"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-full text-cyan-400 font-semibold text-sm backdrop-blur-lg animate-fadeIn">
              � Welcome back, Landlord!
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fadeInUp">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              STAYTRUST
            </span>
          </h1>

          <p
            className="text-2xl md:text-3xl font-bold mb-4 text-cyan-300 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Your All-in-One Rental Management Platform
          </p>

          <p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Manage properties, automate billing, and grow your rental business
            with AI-powered tools
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              to="/landlord/dashboard"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaChartLine />
                Go to Dashboard
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            <Link
              to="/landlord/properties"
              className="group px-8 py-4 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl font-bold text-lg hover:border-cyan-500 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <FaHome />
                Manage Properties
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Icon
                    className={`text-4xl text-${stat.color}-400 mb-3 mx-auto group-hover:scale-110 transition-transform`}
                  />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Prime Packages Section */}
      <section
        id="prime"
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-20 px-6 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-400 font-semibold text-sm">
                <FaCrown className="inline mr-2" />
                PRIME PACKAGES
              </span>
            </div>
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Unlock Premium Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stand out from competitors with verified badges, AI automation,
              and priority placement
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {primeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const featureImages = [
                "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&h=800&fit=crop&q=90",
                "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=800&fit=crop&q=90",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=90",
                "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=1200&h=800&fit=crop&q=90",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=90",
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&h=800&fit=crop&q=90",
              ];
              return (
                <div
                  key={index}
                  className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Feature Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={featureImages[index]}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                    <div
                      className={`absolute top-4 right-4 w-16 h-16 bg-${feature.color}-600/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon className={`text-3xl text-white`} />
                    </div>
                  </div>

                  <div className="p-8">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-600/0 to-${feature.color}-600/0 group-hover:from-${feature.color}-600/10 group-hover:to-${feature.color}-600/20 transition-all duration-500`}
                    ></div>

                    <h3 className="text-2xl font-bold mb-3 relative z-10">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 relative z-10">
                      {feature.description}
                    </p>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border ${
                  plan.popular
                    ? "border-cyan-500 scale-105 shadow-2xl shadow-cyan-500/30"
                    : "border-gray-700/50"
                } transition-all duration-300 hover:scale-105`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-sm font-bold shadow-lg">
                      🔥 MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-end justify-center gap-2 mb-2">
                    <span className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {plan.price === "0" ? "Free" : `₫${plan.price}`}
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm">{plan.period}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle
                        className={`text-${plan.color}-400 flex-shrink-0 mt-1`}
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {plan.price === "0" ? "Start Free Trial" : "Upgrade Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Features Section */}
      <section
        id="management"
        ref={(el) => (sectionsRef.current[2] = el)}
        className="py-20 px-6 bg-gray-900/50 relative"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1551434678-e076c223a692?w=2400&h=1600&fit=crop&q=90")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-400 font-semibold text-sm">
                <FaBolt className="inline mr-2" />
                SMART MANAGEMENT
              </span>
            </div>
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Automated Utility Billing
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Say goodbye to manual calculations. Track electricity, water, and
              services with precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {managementFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const featureBackgrounds = [
                "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=1600&h=1200&fit=crop&q=90",
                "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1600&h=1200&fit=crop&q=90",
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=1200&fit=crop&q=90",
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=1200&fit=crop&q=90",
              ];
              return (
                <div
                  key={index}
                  className="group relative bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={featureBackgrounds[index]}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                    />
                  </div>

                  <div
                    className={`absolute top-0 right-0 w-64 h-64 bg-${feature.color}-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000`}
                  ></div>

                  <div className="relative z-10 p-8">
                    <div
                      className={`w-20 h-20 bg-${feature.color}-600/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <Icon className={`text-4xl text-${feature.color}-400`} />
                    </div>

                    <h3 className="text-3xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-6">{feature.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                      {feature.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/30"
                        >
                          <div className="text-sm text-gray-500 mb-1">
                            {metric.label}
                          </div>
                          <div
                            className={`text-2xl font-bold text-${feature.color}-400`}
                          >
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Payment Flow Visualization */}
          <div className="mt-16 relative overflow-hidden rounded-3xl">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=2000&h=1000&fit=crop&q=90"
              alt="Payment Flow"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="relative bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm p-12 border border-cyan-500/30">
              <h3 className="text-3xl font-bold text-center mb-12">
                Seamless Payment Flow
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {[
                  {
                    icon: FaLightbulb,
                    title: "Meter Reading",
                    desc: "Input readings",
                  },
                  {
                    icon: FaChartBar,
                    title: "Auto Calculate",
                    desc: "AI computes bills",
                  },
                  {
                    icon: FaBell,
                    title: "Send Invoice",
                    desc: "Notify tenants",
                  },
                  {
                    icon: FaCreditCard,
                    title: "In-App Payment",
                    desc: "Instant settlement",
                  },
                  {
                    icon: FaCheckCircle,
                    title: "Confirmed",
                    desc: "Receipt generated",
                  },
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <React.Fragment key={index}>
                      <div className="flex flex-col items-center text-center group">
                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-cyan-500/30">
                          <Icon className="text-4xl" />
                        </div>
                        <h4 className="font-bold mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-400">{step.desc}</p>
                      </div>
                      {index < 4 && (
                        <FaArrowRight className="hidden md:block text-3xl text-cyan-500 animate-pulse" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Features Section */}
      <section
        id="dashboard"
        ref={(el) => (sectionsRef.current[3] = el)}
        className="py-20 px-6 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-400 font-semibold text-sm">
                <FaChartLine className="inline mr-2" />
                CONTROL CENTER
              </span>
            </div>
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Comprehensive Dashboard
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to manage your properties in one beautiful
              interface
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {dashboardFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-${feature.color}-500/50 transition-all duration-500 hover:scale-105`}
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`,
                  }}
                >
                  <div
                    className={`w-16 h-16 bg-${feature.color}-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                  >
                    <Icon className={`text-3xl text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p
                    className={`text-2xl font-black text-${feature.color}-400`}
                  >
                    {feature.count}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Analytics Preview */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700/50">
            {/* Dashboard Screenshot Header */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000&h=1000&fit=crop&q=90"
                alt="Dashboard Analytics"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      Revenue Analytics
                    </h3>
                    <p className="text-gray-400">
                      Real-time financial insights at your fingertips
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black text-green-400 mb-1">
                      ₫125,000,000
                    </div>
                    <div className="text-sm text-gray-400">Monthly Revenue</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-2xl p-6 border border-green-500/30 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop&q=90"
                    alt="Growth"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative z-10">
                    <FaChartLine className="text-4xl text-green-400 mb-3" />
                    <div className="text-2xl font-bold mb-1">+12.5%</div>
                    <div className="text-sm text-gray-400">Growth Rate</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 rounded-2xl p-6 border border-cyan-500/30 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=90"
                    alt="Occupancy"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative z-10">
                    <FaHome className="text-4xl text-cyan-400 mb-3" />
                    <div className="text-2xl font-bold mb-1">87.5%</div>
                    <div className="text-sm text-gray-400">Occupancy Rate</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-2xl p-6 border border-purple-500/30 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=90"
                    alt="Tenants"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative z-10">
                    <FaUsers className="text-4xl text-purple-400 mb-3" />
                    <div className="text-2xl font-bold mb-1">42/48</div>
                    <div className="text-sm text-gray-400">Rooms Occupied</div>
                  </div>
                </div>
              </div>

              {/* Chart Simulation */}
              <div className="h-64 bg-gray-900/50 rounded-2xl p-6 border border-gray-700/30 flex items-end justify-between gap-2">
                {[65, 78, 82, 88, 75, 92, 85, 90, 95, 88, 93, 97].map(
                  (height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-cyan-600 to-blue-500 rounded-t-lg hover:from-cyan-500 hover:to-blue-400 transition-all duration-300 cursor-pointer group relative"
                      style={{
                        height: `${height}%`,
                        animation: `growHeight 1s ease-out ${i * 0.1}s both`,
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {height}%
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={(el) => (sectionsRef.current[4] = el)}
        className="py-20 px-6 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-400 font-semibold text-sm">
                <FaAward className="inline mr-2" />
                SUCCESS STORIES
              </span>
            </div>
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Trusted by Landlords
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of property owners who transformed their business
              with STAYTRUST
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <FaQuoteLeft className="text-4xl text-orange-400/30 mb-6" />

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-orange-400">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-orange-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background Collage */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-4 gap-0 h-full opacity-25">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1200&fit=crop&q=90"
              alt=""
              className="w-full h-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=1200&fit=crop&q=90"
              alt=""
              className="w-full h-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=1200&fit=crop&q=90"
              alt=""
              className="w-full h-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1200&fit=crop&q=90"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-md"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Rental Business?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Join 10,000+ landlords managing ₫2.5B+ in monthly revenue
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/landlord/dashboard"
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaChartLine className="text-2xl" />
                Access Dashboard
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            <Link
              to="/landlord/properties"
              className="px-10 py-5 bg-gray-800/50 backdrop-blur-lg border-2 border-cyan-500 rounded-2xl font-bold text-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 flex items-center justify-center gap-3"
            >
              <FaHome className="text-2xl" />
              View My Properties
            </Link>
          </div>

          <p className="mt-8 text-gray-400 text-sm">
            Already managing 12 properties • 42/48 rooms occupied • ₫125M
            monthly revenue
          </p>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes growHeight {
          from {
            height: 0;
          }
          to {
            height: var(--height);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }

        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default LandlordHome;
