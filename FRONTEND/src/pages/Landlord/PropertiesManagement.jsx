import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaFilter,
  FaThLarge,
  FaList,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaStar,
  FaHeart,
  FaShare,
  FaCamera,
  FaCheckCircle,
  FaClock,
  FaBan,
  FaChevronDown,
} from "react-icons/fa";

const PropertiesManagement = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [hoveredProperty, setHoveredProperty] = useState(null);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const properties = [
    {
      id: 1,
      title: "Luxury Penthouse Suite",
      address: "123 Nguyen Hue, District 1, HCMC",
      price: 25000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      status: "available",
      rating: 4.8,
      reviews: 24,
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=90",
      ],
      featured: true,
      views: 1234,
      inquiries: 45,
    },
    {
      id: 2,
      title: "Modern Studio Apartment",
      address: "456 Le Loi, District 3, HCMC",
      price: 8500000,
      bedrooms: 1,
      bathrooms: 1,
      area: 45,
      status: "occupied",
      rating: 4.6,
      reviews: 18,
      images: [
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=90",
      ],
      featured: false,
      views: 892,
      inquiries: 32,
    },
    {
      id: 3,
      title: "Spacious Family House",
      address: "789 Tran Hung Dao, District 5, HCMC",
      price: 35000000,
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      status: "available",
      rating: 4.9,
      reviews: 31,
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&q=90",
      ],
      featured: true,
      views: 2156,
      inquiries: 67,
    },
    {
      id: 4,
      title: "Cozy Downtown Loft",
      address: "321 Pasteur, District 1, HCMC",
      price: 15000000,
      bedrooms: 2,
      bathrooms: 1,
      area: 75,
      status: "maintenance",
      rating: 4.5,
      reviews: 15,
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop&q=90",
      ],
      featured: false,
      views: 654,
      inquiries: 21,
    },
    {
      id: 5,
      title: "Beachfront Villa",
      address: "555 Vo Nguyen Giap, Son Tra, Da Nang",
      price: 45000000,
      bedrooms: 5,
      bathrooms: 4,
      area: 250,
      status: "available",
      rating: 5.0,
      reviews: 42,
      images: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&q=90",
      ],
      featured: true,
      views: 3421,
      inquiries: 89,
    },
    {
      id: 6,
      title: "Executive Apartment",
      address: "888 Hai Ba Trung, District 3, HCMC",
      price: 18000000,
      bedrooms: 2,
      bathrooms: 2,
      area: 90,
      status: "occupied",
      rating: 4.7,
      reviews: 27,
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=90",
      ],
      featured: false,
      views: 1045,
      inquiries: 38,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "available":
        return "text-green-400 bg-green-500/10 border-green-500/30";
      case "occupied":
        return "text-blue-400 bg-blue-500/10 border-blue-500/30";
      case "maintenance":
        return "text-orange-400 bg-orange-500/10 border-orange-500/30";
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/30";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "available":
        return FaCheckCircle;
      case "occupied":
        return FaClock;
      case "maintenance":
        return FaBan;
      default:
        return FaClock;
    }
  };

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || property.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

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
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Properties Management
            </h1>
            <p className="text-gray-400 text-lg">
              Manage and monitor all your rental properties
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              {
                label: "Total Properties",
                value: properties.length,
                color: "cyan",
                change: "+2",
              },
              {
                label: "Available",
                value: properties.filter((p) => p.status === "available")
                  .length,
                color: "green",
                change: "+1",
              },
              {
                label: "Occupied",
                value: properties.filter((p) => p.status === "occupied").length,
                color: "blue",
                change: "0",
              },
              {
                label: "Total Views",
                value: "9.4K",
                color: "purple",
                change: "+12%",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 group overflow-hidden"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-${stat.color}-500/10 blur-3xl rounded-full group-hover:w-32 group-hover:h-32 transition-all duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
                  <div className="flex items-end justify-between">
                    <div
                      className={`text-3xl font-bold text-${stat.color}-400`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-sm ${stat.change.startsWith("+") ? "text-green-400" : "text-gray-400"} font-semibold`}
                    >
                      {stat.change}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 w-full">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search properties by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-3 items-center">
                {/* Status Filter */}
                <div className="relative">
                  <button
                    onClick={() => setShowFilterMenu(!showFilterMenu)}
                    className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
                  >
                    <FaFilter className="text-cyan-400" />
                    <span className="hidden md:inline">Filter</span>
                    <FaChevronDown className="text-xs" />
                  </button>

                  {showFilterMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-700/50 shadow-2xl overflow-hidden z-10">
                      {["all", "available", "occupied", "maintenance"].map(
                        (status) => (
                          <button
                            key={status}
                            onClick={() => {
                              setSelectedStatus(status);
                              setShowFilterMenu(false);
                            }}
                            className={`w-full text-left px-4 py-3 hover:bg-white/5 transition-colors capitalize ${selectedStatus === status ? "bg-white/5 text-cyan-400" : ""}`}
                          >
                            {status}
                          </button>
                        ),
                      )}
                    </div>
                  )}
                </div>

                {/* View Mode Toggle */}
                <div className="flex gap-2 bg-white/5 rounded-xl p-1 border border-white/10">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-cyan-500/20 text-cyan-400" : "text-gray-400 hover:text-white"}`}
                  >
                    <FaThLarge />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-cyan-500/20 text-cyan-400" : "text-gray-400 hover:text-white"}`}
                  >
                    <FaList />
                  </button>
                </div>

                {/* Add Property Button */}
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-cyan-500/30">
                  <FaPlus />
                  <span className="hidden md:inline">Add Property</span>
                </button>
              </div>
            </div>
          </div>

          {/* Properties Grid/List */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-6"
            }
          >
            {filteredProperties.map((property, index) => {
              const StatusIcon = getStatusIcon(property.status);

              return (
                <div
                  key={property.id}
                  onMouseEnter={() => setHoveredProperty(property.id)}
                  onMouseLeave={() => setHoveredProperty(null)}
                  className={`group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 ${viewMode === "list" ? "flex gap-6" : ""}`}
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Featured Badge */}
                  {property.featured && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 backdrop-blur-sm rounded-full text-xs font-bold">
                      <FaStar className="text-white" />
                      <span>FEATURED</span>
                    </div>
                  )}

                  {/* Image Section */}
                  <div
                    className={`relative ${viewMode === "list" ? "w-80 flex-shrink-0" : "h-64"} overflow-hidden group`}
                  >
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Image Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Quick Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                        <button className="p-2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-lg transition-colors">
                          <FaHeart className="text-white" />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-lg transition-colors">
                          <FaShare className="text-white" />
                        </button>
                      </div>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-sm">
                        <FaCamera />
                        <span>{property.images.length} photos</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div
                      className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-1 backdrop-blur-md rounded-full text-xs font-semibold border ${getStatusColor(property.status)}`}
                    >
                      <StatusIcon />
                      <span className="capitalize">{property.status}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1">
                    {/* Title and Rating */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                        {property.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400" />
                          <span className="font-semibold text-white">
                            {property.rating}
                          </span>
                          <span>({property.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaEye className="text-cyan-400" />
                          <span>{property.views} views</span>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-2 mb-4 text-gray-400 text-sm">
                      <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-cyan-400" />
                      <span>{property.address}</span>
                    </div>

                    {/* Property Details */}
                    <div className="flex items-center gap-6 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <FaBed className="text-cyan-400" />
                        <span>{property.bedrooms} beds</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <FaBath className="text-cyan-400" />
                        <span>{property.bathrooms} baths</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <FaRulerCombined className="text-cyan-400" />
                        <span>{property.area}m²</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        ₫{(property.price / 1000000).toFixed(1)}M
                        <span className="text-sm text-gray-400 font-normal">
                          /month
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {property.inquiries} inquiries this month
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4 border-t border-white/10">
                      <Link
                        to={`/landlord/properties/${property.id}`}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-all hover:scale-105 font-semibold"
                      >
                        <FaEye />
                        <span>View</span>
                      </Link>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-all hover:scale-105 font-semibold">
                        <FaEdit />
                        <span>Edit</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all hover:scale-105">
                        <FaTrash />
                      </button>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 blur-xl transition-all duration-500 -z-10"></div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center">
                <FaHome className="text-5xl text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-400">
                No properties found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filters
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:scale-105 transition-all">
                Add Your First Property
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full shadow-2xl shadow-cyan-500/30 flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 z-40 group">
        <FaPlus className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

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
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PropertiesManagement;
