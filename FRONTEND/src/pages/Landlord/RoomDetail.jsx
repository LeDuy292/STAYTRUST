import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FaHome,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaChartLine,
  FaStar,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRuler,
  FaWifi,
  FaCar,
  FaSwimmingPool,
  FaDumbbell,
  FaShieldAlt,
  FaCamera,
  FaFire,
  FaSnowflake,
  FaCouch,
  FaTv,
  FaUtensils,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaTimesCircle,
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
  FaUsers,
  FaDollarSign,
  FaCalendarAlt,
  FaTools,
  FaClipboardList,
  FaFileInvoiceDollar,
  FaChartBar,
  FaHistory,
  FaPhone,
  FaEnvelope,
  FaDownload,
  FaPrint,
  FaShare,
  FaHeart,
  FaEye,
  FaBuilding,
} from "react-icons/fa";

const RoomDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock property data - In real app, fetch from API based on ID
  const property = {
    id: 1,
    title: "Luxury Penthouse Suite",
    address: "123 Nguyen Hue Boulevard, District 1, Ho Chi Minh City",
    price: 25000000,
    deposit: 50000000,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    floor: 15,
    buildingFloors: 20,
    yearBuilt: 2020,
    status: "available",
    type: "Apartment",
    rating: 4.8,
    reviews: 24,
    views: 1234,
    inquiries: 45,
    featured: true,
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&h=1000&fit=crop&q=95",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=1000&fit=crop&q=95",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=1000&fit=crop&q=95",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&h=1000&fit=crop&q=95",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&h=1000&fit=crop&q=95",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=1000&fit=crop&q=95",
    ],
    description:
      "Stunning luxury penthouse with breathtaking city views. This modern residence features premium finishes, floor-to-ceiling windows, and access to world-class amenities. Perfect for those seeking an elevated lifestyle in the heart of the city.",
    amenities: [
      { icon: FaWifi, name: "High-Speed WiFi", included: true },
      { icon: FaCar, name: "Parking Space", included: true },
      { icon: FaSwimmingPool, name: "Swimming Pool", included: true },
      { icon: FaDumbbell, name: "Fitness Center", included: true },
      { icon: FaShieldAlt, name: "24/7 Security", included: true },
      { icon: FaCamera, name: "CCTV Monitoring", included: true },
      { icon: FaFire, name: "Central Heating", included: true },
      { icon: FaSnowflake, name: "Air Conditioning", included: true },
      { icon: FaCouch, name: "Fully Furnished", included: true },
      { icon: FaTv, name: "Smart TV", included: true },
      { icon: FaUtensils, name: "Modern Kitchen", included: true },
      { icon: FaBuilding, name: "Elevator Access", included: true },
    ],
    tenant: {
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+84 901 234 567",
      moveInDate: "2024-01-15",
      leaseEnd: "2025-01-14",
      avatar: "SJ",
      status: "active",
      paymentStatus: "on-time",
    },
    financials: {
      monthlyRent: 25000000,
      deposit: 50000000,
      totalRevenue: 300000000,
      occupancyRate: 95,
      avgMonthlyRevenue: 24500000,
    },
    maintenance: [
      {
        id: 1,
        date: "2024-10-15",
        issue: "AC Filter Replacement",
        cost: 500000,
        status: "completed",
      },
      {
        id: 2,
        date: "2024-09-20",
        issue: "Plumbing Repair",
        cost: 800000,
        status: "completed",
      },
      {
        id: 3,
        date: "2024-11-01",
        issue: "Scheduled Inspection",
        cost: 0,
        status: "pending",
      },
    ],
    revenueHistory: [
      { month: "Jan", amount: 25000000 },
      { month: "Feb", amount: 25000000 },
      { month: "Mar", amount: 25000000 },
      { month: "Apr", amount: 25000000 },
      { month: "May", amount: 25000000 },
      { month: "Jun", amount: 25000000 },
      { month: "Jul", amount: 25000000 },
      { month: "Aug", amount: 25000000 },
      { month: "Sep", amount: 25000000 },
      { month: "Oct", amount: 25000000 },
      { month: "Nov", amount: 25000000 },
      { month: "Dec", amount: 0 },
    ],
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const getStatusBadge = (status) => {
    const badges = {
      available: { color: "green", text: "Available", icon: FaCheckCircle },
      occupied: { color: "blue", text: "Occupied", icon: FaUsers },
      maintenance: { color: "orange", text: "Maintenance", icon: FaTools },
    };
    const badge = badges[status] || badges.available;
    const Icon = badge.icon;
    return (
      <span
        className={`flex items-center gap-2 px-4 py-2 bg-${badge.color}-500/20 text-${badge.color}-400 rounded-full border border-${badge.color}-500/30 font-semibold`}
      >
        <Icon /> {badge.text}
      </span>
    );
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FaHome },
    { id: "tenant", label: "Tenant Info", icon: FaUsers },
    { id: "financial", label: "Financials", icon: FaDollarSign },
    { id: "maintenance", label: "Maintenance", icon: FaTools },
    { id: "history", label: "History", icon: FaHistory },
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
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Dashboard
              </Link>
              <Link
                to="/landlord/properties"
                className="text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1"
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

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-white/5 rounded-lg transition-colors">
                <FaBell className="text-xl text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

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
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors bg-white/5"
                    >
                      <FaHome className="text-cyan-400" />
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
      <div className="pt-24 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Back Button & Action Bar */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Properties</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 rounded-xl transition-all ${isFavorite ? "bg-red-500/20 text-red-400" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
              >
                <FaHeart className={isFavorite ? "animate-pulse" : ""} />
              </button>
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                <FaShare />
              </button>
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                <FaPrint />
              </button>
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                <FaDownload />
              </button>
            </div>
          </div>

          {/* Hero Section - Image Gallery */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden mb-8 group">
            {/* Main Image */}
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">
              {currentImageIndex + 1} / {property.images.length}
            </div>

            {/* Property Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {getStatusBadge(property.status)}
                    {property.featured && (
                      <span className="flex items-center gap-2 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30 text-sm font-semibold">
                        <FaStar /> Featured
                      </span>
                    )}
                    {property.verified && (
                      <span className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 text-sm font-semibold">
                        <FaShieldAlt /> Verified
                      </span>
                    )}
                  </div>

                  <h1 className="text-4xl font-bold mb-3">{property.title}</h1>

                  <div className="flex items-center gap-2 text-gray-300 mb-4">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    <span>{property.address}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.floor(property.rating)
                              ? "text-yellow-400"
                              : "text-gray-600"
                          }
                        />
                      ))}
                      <span className="ml-2 font-semibold">
                        {property.rating}
                      </span>
                      <span className="text-gray-400">
                        ({property.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaEye /> {property.views} views
                      </span>
                      <span>•</span>
                      <span>{property.inquiries} inquiries</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="text-gray-400 text-sm mb-1">Monthly Rent</div>
                  <div className="text-4xl font-bold text-cyan-400 mb-4">
                    ₫{(property.price / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-gray-400 text-xs mb-4">
                    Deposit: ₫{(property.deposit / 1000000).toFixed(1)}M
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowEditModal(true)}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-semibold transition-all hover:scale-105"
                    >
                      <FaEdit /> Edit
                    </button>
                    <button className="p-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-colors">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-24 left-8 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentImageIndex
                      ? "border-cyan-400 scale-110"
                      : "border-white/30 hover:border-white/50"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <>
                  {/* Property Details */}
                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 animate-fade-in-up">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                        <FaHome className="text-cyan-400" />
                      </div>
                      Property Details
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                      {[
                        {
                          icon: FaBed,
                          label: "Bedrooms",
                          value: property.bedrooms,
                        },
                        {
                          icon: FaBath,
                          label: "Bathrooms",
                          value: property.bathrooms,
                        },
                        {
                          icon: FaRuler,
                          label: "Area",
                          value: `${property.area}m²`,
                        },
                        {
                          icon: FaBuilding,
                          label: "Floor",
                          value: `${property.floor}/${property.buildingFloors}`,
                        },
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={idx}
                            className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all group"
                          >
                            <Icon className="text-3xl text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                            <div className="text-2xl font-bold mb-1">
                              {item.value}
                            </div>
                            <div className="text-sm text-gray-400">
                              {item.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="prose prose-invert max-w-none">
                      <h3 className="text-xl font-bold mb-3">Description</h3>
                      <p className="text-gray-400 leading-relaxed">
                        {property.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                      <div>
                        <div className="text-gray-400 text-sm mb-1">
                          Property Type
                        </div>
                        <div className="font-semibold">{property.type}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">
                          Year Built
                        </div>
                        <div className="font-semibold">
                          {property.yearBuilt}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div
                    className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 animate-fade-in-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                        <FaCheckCircle className="text-purple-400" />
                      </div>
                      Amenities & Features
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {property.amenities.map((amenity, idx) => {
                        const Icon = amenity.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                          >
                            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Icon className="text-cyan-400" />
                            </div>
                            <span className="font-medium">{amenity.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Location Map Placeholder */}
                  <div
                    className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <FaMapMarkerAlt className="text-green-400" />
                      </div>
                      Location
                    </h2>
                    <div className="relative h-64 bg-gray-800 rounded-xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop&q=90"
                        alt="Map"
                        className="w-full h-full object-cover opacity-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/70 backdrop-blur-sm px-6 py-3 rounded-xl">
                          <FaMapMarkerAlt className="text-4xl text-cyan-400 mx-auto mb-2" />
                          <div className="text-center font-semibold">
                            Interactive Map
                          </div>
                          <div className="text-sm text-gray-400">
                            Coming Soon
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Tenant Tab */}
              {activeTab === "tenant" && property.status === "occupied" && (
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 animate-fade-in-up">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <FaUsers className="text-blue-400" />
                    </div>
                    Current Tenant
                  </h2>

                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl font-bold">
                      {property.tenant.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">
                        {property.tenant.name}
                      </h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold border border-green-500/30">
                          {property.tenant.status === "active"
                            ? "Active Lease"
                            : "Inactive"}
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">
                          {property.tenant.paymentStatus === "on-time"
                            ? "On-Time Payer"
                            : "Late"}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-300">
                          <FaEnvelope className="text-cyan-400" />
                          {property.tenant.email}
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <FaPhone className="text-cyan-400" />
                          {property.tenant.phone}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-6 bg-white/5 rounded-xl">
                    <div>
                      <div className="text-gray-400 text-sm mb-1">
                        Move-In Date
                      </div>
                      <div className="font-semibold flex items-center gap-2">
                        <FaCalendarAlt className="text-cyan-400" />
                        {new Date(
                          property.tenant.moveInDate,
                        ).toLocaleDateString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">
                        Lease End Date
                      </div>
                      <div className="font-semibold flex items-center gap-2">
                        <FaCalendarAlt className="text-orange-400" />
                        {new Date(
                          property.tenant.leaseEnd,
                        ).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Financial Tab */}
              {activeTab === "financial" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
                    {[
                      {
                        label: "Total Revenue",
                        value: `₫${(property.financials.totalRevenue / 1000000).toFixed(1)}M`,
                        color: "green",
                        icon: FaDollarSign,
                      },
                      {
                        label: "Avg Monthly",
                        value: `₫${(property.financials.avgMonthlyRevenue / 1000000).toFixed(1)}M`,
                        color: "cyan",
                        icon: FaChartBar,
                      },
                      {
                        label: "Occupancy Rate",
                        value: `${property.financials.occupancyRate}%`,
                        color: "purple",
                        icon: FaChartLine,
                      },
                    ].map((stat, idx) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] transition-all group"
                        >
                          <div
                            className={`w-12 h-12 bg-${stat.color}-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                          >
                            <Icon
                              className={`text-2xl text-${stat.color}-400`}
                            />
                          </div>
                          <div className="text-gray-400 text-sm mb-2">
                            {stat.label}
                          </div>
                          <div
                            className={`text-3xl font-bold text-${stat.color}-400`}
                          >
                            {stat.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div
                    className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 animate-fade-in-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <h2 className="text-2xl font-bold mb-6">Revenue History</h2>
                    <div className="h-64 flex items-end justify-between gap-2">
                      {property.revenueHistory.map((item, idx) => {
                        const maxAmount = Math.max(
                          ...property.revenueHistory.map((r) => r.amount),
                        );
                        const height = (item.amount / maxAmount) * 100;
                        return (
                          <div
                            key={idx}
                            className="flex-1 flex flex-col items-center group"
                          >
                            <div
                              className="w-full bg-gradient-to-t from-cyan-600 to-blue-500 rounded-t-lg hover:from-cyan-500 hover:to-blue-400 transition-all cursor-pointer relative"
                              style={{ height: `${height}%` }}
                            >
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                ₫{(item.amount / 1000000).toFixed(1)}M
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 mt-2 font-semibold">
                              {item.month}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* Maintenance Tab */}
              {activeTab === "maintenance" && (
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 animate-fade-in-up">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <FaTools className="text-orange-400" />
                    </div>
                    Maintenance Records
                  </h2>

                  <div className="space-y-4">
                    {property.maintenance.map((record) => (
                      <div
                        key={record.id}
                        className="flex items-center justify-between p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              record.status === "completed"
                                ? "bg-green-500/20"
                                : "bg-orange-500/20"
                            }`}
                          >
                            <FaTools
                              className={
                                record.status === "completed"
                                  ? "text-green-400"
                                  : "text-orange-400"
                              }
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">
                              {record.issue}
                            </h3>
                            <div className="text-sm text-gray-400 flex items-center gap-2">
                              <FaCalendarAlt />
                              {new Date(record.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold mb-1">
                            {record.cost > 0
                              ? `₫${(record.cost / 1000).toFixed(0)}K`
                              : "Free"}
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              record.status === "completed"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-orange-500/20 text-orange-400"
                            }`}
                          >
                            {record.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* History Tab */}
              {activeTab === "history" && (
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 animate-fade-in-up">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                      <FaHistory className="text-cyan-400" />
                    </div>
                    Activity History
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        date: "2024-11-25",
                        action: "Property listed",
                        user: "Admin",
                      },
                      {
                        date: "2024-11-20",
                        action: "Photos updated",
                        user: "Admin",
                      },
                      {
                        date: "2024-11-15",
                        action: "Price adjusted",
                        user: "Admin",
                      },
                      {
                        date: "2024-11-10",
                        action: "Description modified",
                        user: "Admin",
                      },
                      {
                        date: "2024-11-05",
                        action: "Amenities updated",
                        user: "Admin",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                      >
                        <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaHistory className="text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">{item.action}</div>
                          <div className="text-sm text-gray-400">
                            by {item.user}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Quick Stats & Actions */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Total Views",
                      value: property.views,
                      icon: FaEye,
                      color: "cyan",
                    },
                    {
                      label: "Inquiries",
                      value: property.inquiries,
                      icon: FaClipboardList,
                      color: "purple",
                    },
                    {
                      label: "Days Listed",
                      value: "45",
                      icon: FaCalendarAlt,
                      color: "blue",
                    },
                  ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 bg-${stat.color}-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                          >
                            <Icon className={`text-${stat.color}-400`} />
                          </div>
                          <span className="text-sm text-gray-400">
                            {stat.label}
                          </span>
                        </div>
                        <span className="font-bold">{stat.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {[
                    {
                      label: "Generate Report",
                      icon: FaFileInvoiceDollar,
                      color: "green",
                    },
                    {
                      label: "Schedule Viewing",
                      icon: FaCalendarAlt,
                      color: "blue",
                    },
                    {
                      label: "Update Status",
                      icon: FaCheckCircle,
                      color: "cyan",
                    },
                    {
                      label: "Add Maintenance",
                      icon: FaTools,
                      color: "orange",
                    },
                  ].map((action, idx) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={idx}
                        className={`w-full flex items-center gap-3 p-4 bg-${action.color}-500/10 hover:bg-${action.color}-500/20 text-${action.color}-400 rounded-xl transition-all hover:scale-105 font-semibold border border-${action.color}-500/20`}
                      >
                        <Icon />
                        {action.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Performance Score */}
              <div
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <h3 className="text-lg font-bold mb-4">Performance Score</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke="#06b6d4"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="377"
                        strokeDashoffset="75"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <div className="text-4xl font-bold text-cyan-400">95</div>
                      <div className="text-xs text-gray-400">Score</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Occupancy", value: 95 },
                    { label: "Payment", value: 100 },
                    { label: "Maintenance", value: 90 },
                  ].map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">{metric.label}</span>
                        <span className="font-semibold">{metric.value}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000"
                          style={{ width: `${metric.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
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
          animation: fadeInUp 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default RoomDetail;
