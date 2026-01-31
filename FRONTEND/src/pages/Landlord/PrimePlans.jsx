import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaStar,
  FaCrown,
  FaCheckCircle,
  FaTimes,
  FaRocket,
  FaBolt,
  FaShieldAlt,
  FaChartBar,
  FaRobot,
  FaMapMarkedAlt,
  FaImages,
  FaCamera,
  FaChartPie,
  FaCalendarAlt,
  FaQuoteLeft,
  FaArrowRight,
  FaCheck,
  FaUser,
  FaUsers,
  FaBuilding,
  FaAward,
  FaDollarSign,
  FaInfinity,
  FaChevronDown,
} from "react-icons/fa";

const PrimePlans = () => {
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' or 'yearly'
  const [selectedPlan, setSelectedPlan] = useState(null);

  const pricingPlans = [
    {
      id: "free",
      name: "Free Trial",
      subtitle: "Get started with basics",
      price: { monthly: 0, yearly: 0 },
      originalPrice: null,
      badge: null,
      badgeColor: "gray",
      description: "Perfect for testing the platform",
      features: [
        { text: "Up to 5 property listings", included: true },
        { text: "Basic analytics dashboard", included: true },
        { text: "Email support (48h response)", included: true },
        { text: "Manual payment tracking", included: true },
        { text: "Standard listing visibility", included: true },
        { text: "Priority map placement", included: false },
        { text: "AI Chatbot support", included: false },
        { text: "Verified badge", included: false },
        { text: "Unlimited photos", included: false },
        { text: "Advanced analytics", included: false },
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "gray",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=90",
    },
    {
      id: "monthly",
      name: "Prime Monthly",
      subtitle: "Most flexible option",
      price: { monthly: 299000, yearly: 299000 },
      originalPrice: null,
      badge: "POPULAR",
      badgeColor: "cyan",
      description: "Ideal for individual landlords",
      features: [
        { text: "Unlimited property listings", included: true },
        { text: "Priority map placement", included: true },
        { text: "AI Chatbot included", included: true },
        { text: "Advanced analytics & reports", included: true },
        { text: "Automated billing system", included: true },
        { text: "Verified landlord badge", included: true },
        { text: "Unlimited HD photos & videos", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Featured listing boost", included: true },
        { text: "Mobile app access", included: true },
      ],
      cta: "Choose Monthly",
      popular: true,
      color: "cyan",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=90",
    },
    {
      id: "yearly",
      name: "Prime Yearly",
      subtitle: "Best value - Save 17%",
      price: { monthly: 249000, yearly: 2990000 },
      originalPrice: { monthly: 299000, yearly: 3588000 },
      badge: "SAVE ₫598K",
      badgeColor: "purple",
      description: "Maximum savings for committed landlords",
      features: [
        { text: "All Monthly Prime features", included: true },
        { text: "Save ₫598,000 per year", included: true, highlight: true },
        { text: "Free professional photography", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom branding options", included: true },
        { text: "API access for integrations", included: true },
        { text: "Early access to new features", included: true },
        { text: "Priority listing in search", included: true },
        { text: "Quarterly business review", included: true },
        { text: "White-label reports", included: true },
      ],
      cta: "Choose Yearly",
      popular: false,
      color: "purple",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&q=90",
    },
  ];

  const primeFeatures = [
    {
      icon: FaStar,
      title: "Featured Listings",
      description:
        "Stand out with premium badge and top placement in search results",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop&q=90",
      color: "yellow",
      stats: { label: "Visibility Increase", value: "+320%" },
    },
    {
      icon: FaMapMarkedAlt,
      title: "Priority Map Display",
      description:
        "Appear first in location-based searches with highlighted pins",
      image:
        "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=400&h=300&fit=crop&q=90",
      color: "cyan",
      stats: { label: "More Contacts", value: "+250%" },
    },
    {
      icon: FaRobot,
      title: "AI Chatbot",
      description: "Automated 24/7 responses to common tenant questions",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop&q=90",
      color: "purple",
      stats: { label: "Time Saved", value: "15hrs/week" },
    },
    {
      icon: FaChartBar,
      title: "Advanced Analytics",
      description: "Detailed insights on views, contacts, and occupancy rates",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=90",
      color: "green",
      stats: { label: "Better Decisions", value: "+180%" },
    },
    {
      icon: FaImages,
      title: "Unlimited Media",
      description: "Upload unlimited HD photos and videos of your properties",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&q=90",
      color: "blue",
      stats: { label: "More Bookings", value: "+210%" },
    },
    {
      icon: FaShieldAlt,
      title: "Verified Badge",
      description: 'Build trust with "Verified by STAYTRUST" indicator',
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&q=90",
      color: "orange",
      stats: { label: "Trust Score", value: "+95%" },
    },
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Property Owner",
      properties: 12,
      avatar: "MC",
      rating: 5,
      text: "Since upgrading to Prime, my occupancy rate increased from 75% to 95%. The AI chatbot alone saves me 10+ hours per week!",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop&q=90",
      savings: "₫2.4M/month",
      color: "cyan",
    },
    {
      name: "Sarah Johnson",
      role: "Real Estate Manager",
      properties: 28,
      avatar: "SJ",
      rating: 5,
      text: "The analytics dashboard helped me optimize pricing. I increased revenue by 35% in just 3 months. Best investment ever!",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop&q=90",
      savings: "₫8.1M/month",
      color: "purple",
    },
    {
      name: "David Nguyen",
      role: "Landlord",
      properties: 8,
      avatar: "DN",
      rating: 5,
      text: "Priority map placement is a game-changer. My properties get 3x more inquiries compared to standard listings. Worth every penny!",
      image:
        "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=400&h=300&fit=crop&q=90",
      savings: "₫1.8M/month",
      color: "green",
    },
  ];

  const comparisonFeatures = [
    {
      category: "Listings",
      feature: "Number of properties",
      free: "5 max",
      monthly: "Unlimited",
      yearly: "Unlimited",
    },
    {
      category: "Listings",
      feature: "Featured badge",
      free: false,
      monthly: true,
      yearly: true,
    },
    {
      category: "Listings",
      feature: "Priority placement",
      free: false,
      monthly: true,
      yearly: true,
    },
    {
      category: "Media",
      feature: "Photo uploads",
      free: "10 per listing",
      monthly: "Unlimited",
      yearly: "Unlimited",
    },
    {
      category: "Media",
      feature: "Video uploads",
      free: false,
      monthly: true,
      yearly: true,
    },
    {
      category: "Media",
      feature: "Professional photography",
      free: false,
      monthly: false,
      yearly: true,
    },
    {
      category: "Analytics",
      feature: "Basic dashboard",
      free: true,
      monthly: true,
      yearly: true,
    },
    {
      category: "Analytics",
      feature: "Advanced reports",
      free: false,
      monthly: true,
      yearly: true,
    },
    {
      category: "Analytics",
      feature: "Revenue forecasting",
      free: false,
      monthly: true,
      yearly: true,
    },
    {
      category: "Support",
      feature: "AI Chatbot",
      free: false,
      monthly: true,
      yearly: true,
    },
    {
      category: "Support",
      feature: "Priority support",
      free: false,
      monthly: true,
      yearly: true,
    },
    {
      category: "Support",
      feature: "Account manager",
      free: false,
      monthly: false,
      yearly: true,
    },
    {
      category: "Advanced",
      feature: "API access",
      free: false,
      monthly: false,
      yearly: true,
    },
    {
      category: "Advanced",
      feature: "Custom branding",
      free: false,
      monthly: false,
      yearly: true,
    },
    {
      category: "Advanced",
      feature: "White-label reports",
      free: false,
      monthly: false,
      yearly: true,
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer:
        "Yes! You can upgrade, downgrade, or cancel your plan at any time. If you upgrade mid-cycle, you'll only pay the prorated difference.",
    },
    {
      question: "What happens after the free trial?",
      answer:
        "Your account will revert to basic free features. You can continue using the platform with limited features or upgrade to a Prime plan anytime.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with Prime, we'll refund your payment, no questions asked.",
    },
    {
      question: "How does the AI Chatbot work?",
      answer:
        "Our AI chatbot is trained on thousands of property inquiries. It can answer common questions about your listings 24/7, schedule viewings, and forward complex queries to you.",
    },
    {
      question: "Can I manage multiple properties?",
      answer:
        "Absolutely! Prime plans support unlimited properties. You can manage apartments, houses, commercial spaces, and more from a single dashboard.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept all major credit cards, bank transfers, and popular e-wallets including Momo, ZaloPay, and VNPay.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

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
                className="text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1"
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
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6 animate-fade-in-up">
              <FaCrown className="text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">
                UPGRADE TO PRIME
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              Supercharge Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Property Business
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Get unlimited listings, AI-powered features, and priority
              placement. Join 10,000+ successful landlords.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
              <span
                className={`font-semibold ${billingCycle === "monthly" ? "text-white" : "text-gray-500"}`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "yearly" : "monthly",
                  )
                }
                className={`relative w-16 h-8 rounded-full transition-colors ${billingCycle === "yearly" ? "bg-gradient-to-r from-cyan-500 to-blue-600" : "bg-gray-700"}`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${billingCycle === "yearly" ? "translate-x-8" : ""}`}
                ></div>
              </button>
              <span
                className={`font-semibold ${billingCycle === "yearly" ? "text-white" : "text-gray-500"}`}
              >
                Yearly
                <span className="ml-2 px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                  Save 17%
                </span>
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
              {[
                { icon: FaUsers, value: "10,000+", label: "Active Users" },
                { icon: FaBuilding, value: "45,000+", label: "Properties" },
                { icon: FaDollarSign, value: "₫850M+", label: "Revenue/Month" },
                { icon: FaAward, value: "4.9/5", label: "Rating" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/[0.05] transition-all"
                >
                  <stat.icon className="text-3xl text-cyan-400 mb-2 mx-auto" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                onMouseEnter={() => setSelectedPlan(plan.id)}
                onMouseLeave={() => setSelectedPlan(null)}
                className={`relative bg-white/[0.03] backdrop-blur-xl border-2 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-4 ${
                  plan.popular
                    ? "border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105"
                    : selectedPlan === plan.id
                      ? "border-white/20"
                      : "border-white/10"
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-600 py-2 text-center font-bold text-sm">
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${selectedPlan === plan.id ? "scale-110" : ""}`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent ${plan.popular ? "pt-8" : ""}`}
                  ></div>

                  {plan.badge && (
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 bg-${plan.badgeColor}-500/90 backdrop-blur-sm rounded-full text-xs font-bold`}
                    >
                      {plan.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.subtitle}</p>

                  {/* Price */}
                  <div className="mb-6">
                    {plan.originalPrice && billingCycle === "yearly" && (
                      <div className="text-gray-500 line-through text-lg mb-1">
                        ₫{formatPrice(plan.originalPrice.yearly)}/year
                      </div>
                    )}
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-cyan-400">
                        ₫
                        {formatPrice(
                          billingCycle === "monthly"
                            ? plan.price.monthly
                            : plan.price.yearly,
                        )}
                      </span>
                      <span className="text-gray-400">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    {billingCycle === "yearly" && plan.id === "yearly" && (
                      <div className="text-sm text-green-400 mt-1">
                        ≈ ₫{formatPrice(plan.price.monthly)}/month
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 mb-6 text-sm">
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 mb-6 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/30 hover:scale-105"
                        : "bg-white/5 hover:bg-white/10 border border-white/20"
                    }`}
                  >
                    {plan.cta}
                    <FaArrowRight className="inline ml-2" />
                  </button>

                  {/* Features List */}
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 text-sm ${feature.included ? "text-gray-300" : "text-gray-600"} ${feature.highlight ? "bg-green-500/10 -mx-4 px-4 py-2 rounded-lg" : ""}`}
                      >
                        {feature.included ? (
                          <FaCheckCircle
                            className={`text-${plan.color}-400 mt-0.5 flex-shrink-0`}
                          />
                        ) : (
                          <FaTimes className="text-gray-600 mt-0.5 flex-shrink-0" />
                        )}
                        <span
                          className={
                            feature.highlight
                              ? "font-semibold text-green-400"
                              : ""
                          }
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                {plan.popular && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Prime Features Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Unlock Powerful{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Prime Features
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to dominate the rental market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primeFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
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
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-sm">
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
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-${feature.color}-500/0 group-hover:bg-${feature.color}-500/10 blur-xl transition-all duration-500 -z-10`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              See how Prime transformed their businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-3xl text-cyan-400/30 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-${testimonial.color}-500 to-${testimonial.color}-600 rounded-full flex items-center justify-center font-bold text-lg`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-cyan-400">
                        {testimonial.properties} properties
                      </div>
                    </div>
                  </div>

                  {/* Savings Badge */}
                  <div className="mt-4 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
                    <div className="text-xs text-gray-400">Extra Revenue</div>
                    <div className="text-lg font-bold text-green-400">
                      {testimonial.savings}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Detailed{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Comparison
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Compare all features across plans
            </p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-white/10 bg-white/[0.03]">
              <div className="font-bold">Feature</div>
              <div className="text-center font-bold">Free</div>
              <div className="text-center font-bold text-cyan-400">
                Prime Monthly
              </div>
              <div className="text-center font-bold text-purple-400">
                Prime Yearly
              </div>
            </div>

            {/* Table Body */}
            {comparisonFeatures.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 gap-4 p-6 hover:bg-white/[0.03] transition-colors ${
                  index < comparisonFeatures.length - 1
                    ? "border-b border-white/5"
                    : ""
                }`}
              >
                <div className="text-sm text-gray-300">{item.feature}</div>
                <div className="text-center text-sm">
                  {typeof item.free === "boolean" ? (
                    item.free ? (
                      <FaCheck className="text-green-400 mx-auto" />
                    ) : (
                      <FaTimes className="text-gray-600 mx-auto" />
                    )
                  ) : (
                    <span className="text-gray-400">{item.free}</span>
                  )}
                </div>
                <div className="text-center text-sm">
                  {typeof item.monthly === "boolean" ? (
                    item.monthly ? (
                      <FaCheck className="text-cyan-400 mx-auto" />
                    ) : (
                      <FaTimes className="text-gray-600 mx-auto" />
                    )
                  ) : (
                    <span className="text-cyan-400 font-semibold">
                      {item.monthly}
                    </span>
                  )}
                </div>
                <div className="text-center text-sm">
                  {typeof item.yearly === "boolean" ? (
                    item.yearly ? (
                      <FaCheck className="text-purple-400 mx-auto" />
                    ) : (
                      <FaTimes className="text-gray-600 mx-auto" />
                    )
                  ) : (
                    <span className="text-purple-400 font-semibold">
                      {item.yearly}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about Prime
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:bg-white/[0.05] transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <FaChevronDown
                    className={`text-cyan-400 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-400 animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
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
              <FaCrown className="text-6xl text-cyan-400 mb-6 mx-auto animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Go Prime?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of successful landlords. Start your 15-day free
                trial today, no credit card required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/30">
                  Start Free Trial
                  <FaRocket className="inline ml-2" />
                </button>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl font-bold text-lg transition-all">
                  Compare Plans
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  <span>30-day money back</span>
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

        .animation-delay-800 {
          animation-delay: 0.8s;
          animation-fill-mode: both;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default PrimePlans;
