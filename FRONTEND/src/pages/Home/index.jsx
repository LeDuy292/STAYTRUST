import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShieldAlt,
  FaClock,
  FaChartLine,
  FaStar,
  FaUsers,
  FaHandshake,
  FaArrowRight,
  FaCheck,
  FaBuilding,
  FaKey,
  FaMobileAlt,
  FaLock,
  FaRocket,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const features = [
    {
      icon: <FaHome className="text-4xl" />,
      title: "Smart Room Management",
      description:
        "Manage your rental properties efficiently with our intelligent system that tracks availability, bookings, and maintenance.",
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Secure Payments",
      description:
        "Safe and secure payment processing with multiple payment options and automatic invoice generation.",
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to handle all your queries and ensure smooth operations.",
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Analytics Dashboard",
      description:
        "Real-time analytics and insights to help you make informed decisions about your properties.",
    },
  ];

  const testimonials = [
    {
      name: "John Anderson",
      role: "Property Owner",
      content:
        "StayTrust has revolutionized how I manage my rental properties. The platform is intuitive and saves me hours every week!",
      rating: 5,
    },
    {
      name: "Sarah Mitchell",
      role: "Tenant",
      content:
        "Finding and renting my apartment was seamless. The payment system is secure and the communication with landlords is excellent.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Real Estate Manager",
      content:
        "Managing multiple properties has never been easier. The analytics help me optimize pricing and occupancy rates.",
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      features: [
        "Up to 5 properties",
        "Basic analytics",
        "Email support",
        "Mobile app access",
      ],
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      features: [
        "Up to 20 properties",
        "Advanced analytics",
        "Priority support",
        "Mobile app access",
        "Custom branding",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      features: [
        "Unlimited properties",
        "Full analytics suite",
        "24/7 phone support",
        "Mobile app access",
        "Custom branding",
        "API access",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Da Nang Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&h=1080&fit=crop"
            alt="Da Nang City"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-gray-900/10 to-gray-800/20"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
            style={{
              top: "20%",
              left: "20%",
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          ></div>
          <div
            className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
            style={{
              top: "40%",
              right: "20%",
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          ></div>
          <div
            className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
            style={{
              bottom: "20%",
              left: "40%",
              transform: `translateY(${scrollY * 0.25}px)`,
            }}
          ></div>

          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-20 h-20 border-4 border-purple-400/30 rotate-45 animate-spin-slow"></div>
          </div>
          <div className="absolute bottom-32 right-20 animate-float animation-delay-2000">
            <div className="w-16 h-16 border-4 border-pink-400/30 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float animation-delay-4000">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg rotate-12 animate-bounce-slow"></div>
          </div>

          {/* Animated Da Nang landmarks */}
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 opacity-70 animate-float-slow">
            <img
              src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&h=400&fit=crop"
              alt="Dragon Bridge Da Nang"
              className="w-64 h-64 object-cover rounded-3xl shadow-2xl transform hover:scale-110 hover:opacity-100 transition-all duration-500"
            />
          </div>
          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 opacity-70 animate-float-slow animation-delay-3000">
            <img
              src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=400&fit=crop"
              alt="Da Nang Beach"
              className="w-48 h-48 object-cover rounded-3xl shadow-2xl transform hover:scale-110 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up text-white drop-shadow-2xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
              StayTrust
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg animate-fade-in-up animation-delay-200">
            The ultimate platform for modern property management and rental
            solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link
              to="/auth"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
            >
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("features")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400/10 transform transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up animation-delay-600">
            {[
              { number: "10K+", label: "Properties" },
              { number: "50K+", label: "Happy Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={addToRefs} className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              visibleSections.has("features")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h2 className="text-5xl font-bold mb-4">
              Powerful{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to manage your properties efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transform hover:-translate-y-2 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  visibleSections.has("features")
                    ? "opacity-100 translate-x-0 rotate-0"
                    : `opacity-0 ${index % 2 === 0 ? "-translate-x-20" : "translate-x-20"} rotate-3`
                }`}
                style={{
                  transitionDelay: visibleSections.has("features")
                    ? `${index * 150}ms`
                    : "0ms",
                }}
              >
                <div className="text-cyan-400 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 to-blue-600/0 group-hover:from-cyan-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={addToRefs} className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`relative group transition-all duration-1000 transform ${
                visibleSections.has("about")
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-20 scale-95"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Main showcase images */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-4 border border-gray-700/50 overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop",
                      icon: FaBuilding,
                    },
                    {
                      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=400&fit=crop",
                      icon: FaKey,
                    },
                    {
                      img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400&h=400&fit=crop",
                      icon: FaHome,
                    },
                    {
                      img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=400&fit=crop",
                      icon: FaHeart,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-2xl overflow-hidden group/item transform hover:scale-105 hover:rotate-2 transition-all duration-500 opacity-0 translate-y-10 animate-fade-in-up"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={`Property ${i + 1}`}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <item.icon className="text-4xl text-white animate-bounce" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20"></div>
                    </div>
                  ))}
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12 animate-pulse">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-300" />
                    <span className="font-bold">Trusted</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 transform ${
                visibleSections.has("about")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h2 className="text-5xl font-bold mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  StayTrust?
                </span>
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                We're revolutionizing the property rental industry with
                cutting-edge technology and exceptional service.
              </p>
              <ul className="space-y-4">
                {[
                  "Seamless property management experience",
                  "Advanced security and data protection",
                  "Real-time notifications and updates",
                  "Comprehensive reporting and analytics",
                  "Mobile-friendly responsive design",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                      <FaCheck className="text-sm" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={addToRefs}
        className="py-20 px-6 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop"
            alt="Modern building"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              visibleSections.has("testimonials")
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
            <h2 className="text-5xl font-bold mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Users Say
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by thousands of property owners and tenants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transform hover:-translate-y-2 transition-all duration-700 relative overflow-hidden ${
                  visibleSections.has("testimonials")
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-20 scale-95"
                }`}
                style={{
                  transitionDelay: visibleSections.has("testimonials")
                    ? `${index * 200}ms`
                    : "0ms",
                }}
              >
                {/* Avatar placeholder with gradient */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-bold transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 transform group-hover:scale-125 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" ref={addToRefs} className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div
            className={`mb-16 transition-all duration-1000 transform ${
              visibleSections.has("gallery")
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-bold mb-4">
                  Explore{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Premium Properties
                  </span>
                </h2>
                <p className="text-xl text-gray-300">
                  Discover amazing places to call home
                </p>
              </div>

              {/* View All Button */}
              <Link
                to="/properties"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 whitespace-nowrap"
              >
                <span>View All</span>
                <div className="flex items-center">
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  <FaArrowRight className="transform -translate-x-2 group-hover:translate-x-1 transition-transform duration-300 opacity-50" />
                </div>
              </Link>
            </div>
          </div>

          {/* Properties Grid with Navigation */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() =>
                setCurrentSlide(currentSlide === 0 ? 15 : currentSlide - 1)
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white p-4 rounded-full shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                setCurrentSlide(currentSlide === 15 ? 0 : currentSlide + 1)
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white p-4 rounded-full shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Scrollable Container with Peek Effect */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out gap-6 pr-20"
                style={{
                  transform: `translateX(-${currentSlide * (100 / 4)}%)`,
                }}
              >
                {[
                  {
                    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=800&fit=crop",
                    title: "Modern Apartments",
                    price: "$1,200/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=800&fit=crop",
                    title: "Luxury Homes",
                    price: "$2,500/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop",
                    title: "Cozy Studios",
                    price: "$850/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop",
                    title: "Family Houses",
                    price: "$1,800/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=800&fit=crop",
                    title: "Downtown Lofts",
                    price: "$1,500/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop",
                    title: "Suburban Villas",
                    price: "$3,000/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=800&fit=crop",
                    title: "Beach House",
                    price: "$2,200/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=800&fit=crop",
                    title: "Penthouse Suite",
                    price: "$3,500/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=800&fit=crop",
                    title: "Urban Condo",
                    price: "$1,400/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&h=800&fit=crop",
                    title: "Garden Villa",
                    price: "$2,800/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=800&fit=crop",
                    title: "Executive Home",
                    price: "$3,200/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=800&fit=crop",
                    title: "Smart Apartment",
                    price: "$1,600/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&h=800&fit=crop",
                    title: "Riverside Loft",
                    price: "$1,900/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=800&fit=crop",
                    title: "Mountain Cabin",
                    price: "$1,300/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=800&fit=crop",
                    title: "City View Studio",
                    price: "$1,100/mo",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=800&fit=crop",
                    title: "Townhouse",
                    price: "$2,000/mo",
                  },
                ].map((property, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-full md:w-[calc(25%-18px)] group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer transform hover:scale-105 transition-all duration-700 ${
                      visibleSections.has("gallery")
                        ? "opacity-100 translate-y-0 rotate-0"
                        : "opacity-0 translate-y-16 -rotate-6"
                    }`}
                    style={{
                      transitionDelay: visibleSections.has("gallery")
                        ? `${index * 100}ms`
                        : "0ms",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <img
                      src={property.img}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-2">
                        {property.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg text-cyan-400 font-semibold">
                          {property.price}
                        </span>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <FaArrowRight className="text-white transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Corner badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded-full text-sm font-semibold transform rotate-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Available
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                (index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index
                        ? "w-12 bg-gradient-to-r from-cyan-500 to-blue-500"
                        : "w-3 bg-gray-600 hover:bg-gray-500"
                    } h-3`}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Map Section - Da Nang */}
      <section
        id="map"
        ref={addToRefs}
        className="py-20 px-6 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 opacity-50"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 transform ${
              visibleSections.has("map")
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            <h2 className="text-5xl font-bold mb-4">
              Discover{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Da Nang
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Explore the beautiful coastal city of Vietnam
            </p>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 transform ${
              visibleSections.has("map")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            {/* Popular Locations Cards */}
            <div className="space-y-4">
              {[
                {
                  name: "Dragon Bridge",
                  icon: "🐉",
                  desc: "Iconic bridge that breathes fire and water",
                  img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&h=300&fit=crop",
                },
                {
                  name: "My Khe Beach",
                  icon: "🏖️",
                  desc: "One of the most beautiful beaches in the world",
                  img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=300&fit=crop",
                },
                {
                  name: "Marble Mountains",
                  icon: "⛰️",
                  desc: "Five marble and limestone hills",
                  img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&h=300&fit=crop",
                },
              ].map((location, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transform hover:-translate-x-2 hover:scale-105 transition-all duration-500 cursor-pointer"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {location.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {location.desc}
                      </p>
                      <div className="relative h-24 rounded-lg overflow-hidden">
                        <img
                          src={location.img}
                          alt={location.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 3D Map */}
            <div className="lg:col-span-2">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-cyan-500/30 group"
                style={{
                  transform: visibleSections.has("map")
                    ? "perspective(1000px) rotateY(-5deg) rotateX(2deg)"
                    : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
                  transition: "all 1s ease-out",
                  transitionDelay: "300ms",
                }}
              >
                {/* Glowing effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>

                {/* Map Container */}
                <div
                  className="relative bg-gray-900 rounded-3xl overflow-hidden"
                  style={{ height: "600px" }}
                >
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122376.13776815257!2d108.14194404523688!3d16.047079291879047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2sDa%20Nang%2C%20Vietnam!5e0!3m2!1sen!2s!4v1706598234567!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-[30%] contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
                  ></iframe>

                  {/* Overlay Info Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30 transform translate-y-0 group-hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          Da Nang City
                        </h3>
                        <p className="text-gray-400">
                          Central Coast of Vietnam
                        </p>
                      </div>
                      <div className="flex gap-3">
                        {["🌊", "🏝️", "🎆"].map((emoji, i) => (
                          <div
                            key={i}
                            className="text-3xl transform hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer"
                            style={{ animationDelay: `${i * 200}ms` }}
                          >
                            {emoji}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-700/50">
                      {[
                        { label: "Population", value: "1.2M+" },
                        { label: "Area", value: "1,285 km²" },
                        { label: "Properties", value: "500+" },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="text-center transform hover:scale-110 transition-transform duration-300"
                        >
                          <div className="text-xl font-bold text-cyan-400">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corner Pins */}
                  <div className="absolute top-6 right-6 flex gap-2">
                    {[
                      { icon: "📍", label: "Dragon Bridge" },
                      { icon: "🏖️", label: "Beach" },
                      { icon: "⛩️", label: "Temple" },
                    ].map((pin, i) => (
                      <div
                        key={i}
                        className="group/pin bg-gradient-to-br from-cyan-600/90 to-blue-600/90 backdrop-blur-lg px-3 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-cyan-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        style={{ animationDelay: `${i * 150}ms` }}
                      >
                        <span className="mr-1">{pin.icon}</span>
                        <span className="opacity-0 group-hover/pin:opacity-100 max-w-0 group-hover/pin:max-w-xs transition-all duration-300 overflow-hidden inline-block">
                          {pin.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div
            className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 transform ${
              visibleSections.has("map")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {[
              { icon: "☀️", title: "Weather", desc: "Sunny Year-Round" },
              { icon: "✈️", title: "Airport", desc: "International Hub" },
              { icon: "🏨", title: "Hotels", desc: "5-Star Resorts" },
              { icon: "🍜", title: "Cuisine", desc: "Amazing Food" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transform hover:-translate-y-2 transition-all duration-500"
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className="text-4xl mb-3 transform hover:scale-125 hover:rotate-12 transition-all duration-300 inline-block">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        ref={addToRefs}
        className="py-20 px-6 relative overflow-hidden"
      >
        {/* Animated background images */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop"
            alt="Building"
            className="w-full h-full object-cover opacity-30 animate-ken-burns"
          />
        </div>

        <div
          className={`max-w-4xl mx-auto text-center relative z-20 transition-all duration-1000 transform ${
            visibleSections.has("cta")
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75"
          }`}
        >
          <div className="p-12 relative">
            {/* Floating icons */}
            <div className="absolute top-0 left-10 animate-float">
              <FaRocket className="text-6xl text-cyan-400/30" />
            </div>
            <div className="absolute bottom-0 right-10 animate-float animation-delay-2000">
              <FaGlobe className="text-6xl text-blue-400/30" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse-slow">
                Ready to Transform Your Property Management?
              </h2>
              <p className="text-xl mb-8 text-gray-100">
                Join thousands of satisfied users and start managing your
                properties more efficiently today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/auth"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
                >
                  Start Free Trial
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <div className="flex items-center gap-2 text-white">
                  <FaLock className="text-green-400" />
                  <span className="text-sm">No credit card required</span>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap justify-center gap-8 items-center opacity-80">
                {[
                  { icon: FaMobileAlt, text: "Mobile Ready" },
                  { icon: FaShieldAlt, text: "Secure & Safe" },
                  { icon: FaUsers, text: "50K+ Users" },
                  { icon: FaHandshake, text: "Trusted Platform" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 transform hover:scale-110 transition-transform duration-300"
                  >
                    <item.icon className="text-2xl" />
                    <span className="font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                StayTrust
              </h3>
              <p className="text-gray-400">
                Modern property management made simple and efficient.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#features"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 StayTrust. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-10px) rotate(18deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes ken-burns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.1) translate(-5%, -5%);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-ken-burns {
          animation: ken-burns 30s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
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
      `}</style>
    </div>
  );
};

export default HomePage;
