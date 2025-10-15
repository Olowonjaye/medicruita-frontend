import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Medicordia
              </span>
            </div>

            {/* Hamburger for mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="text-gray-700 focus:outline-none"
                aria-label="Toggle navigation"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {navOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link to="/jobs" className="text-gray-700 hover:text-blue-600">
                Find Jobs
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link to="/use-cases" className="text-gray-700 hover:text-blue-600">
                Use Cases
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">
                About Us
              </Link>
            </nav>

            {/* Login Button */}
            <Link
              to="/login"
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </Link>
          </div>

          {/* Mobile Nav */}
          {navOpen && (
            <div className="md:hidden mt-2 bg-white rounded-lg shadow-lg">
              <nav className="flex flex-col space-y-2 px-4 py-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 py-2 border-b"
                  onClick={() => setNavOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/jobs"
                  className="text-gray-700 hover:text-blue-600 py-2 border-b"
                  onClick={() => setNavOpen(false)}
                >
                  Find Jobs
                </Link>
                <Link
                  to="/services"
                  className="text-gray-700 hover:text-blue-600 py-2 border-b"
                  onClick={() => setNavOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/use-cases"
                  className="text-gray-700 hover:text-blue-600 py-2 border-b"
                  onClick={() => setNavOpen(false)}
                >
                  Use Cases
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-600 py-2"
                  onClick={() => setNavOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/register"
                  className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-center"
                  onClick={() => setNavOpen(false)}
                >
                  Sign up
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* ...existing code... */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">Smarter healthcare workforce management</h1>
              <p className="text-xl mb-8 text-blue-100">
                AI-powered recruitment, CPD tracking, and workforce deployment - all in one low-bandwidth platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 font-semibold">
                  Get Started
                </Link>
                <Link to="/dashboard" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 font-semibold">
                  Find Jobs
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-32 h-32 bg-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-24 h-24 bg-orange-300 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">+</span>
                    </div>
                    <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">Healthcare Professional</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/20 rounded-lg p-2 text-xs">Medical Records</div>
                    <div className="bg-white/20 rounded-lg p-2 text-xs">Patient Care</div>
                    <div className="bg-white/20 rounded-lg p-2 text-xs">Scheduling</div>
                    <div className="bg-white/20 rounded-lg p-2 text-xs">Training</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600">Locations Optimized</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Field Agents Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">2,600+</div>
              <div className="text-gray-600">Placements</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Built For Impact, Designed For Frontline Health
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Medicordia is a revolutionary training & continuous professional development (CPD) deployment platform.
                It is a smart digital platform for healthcare workers and healthcare workers and optimizes the
                healthcare workforce by providing a seamless and optimized healthcare workforce experience. It provides
                a seamless and optimized healthcare workforce experience by providing a seamless and optimized
                healthcare workforce experience. It provides a seamless and optimized healthcare workforce experience by
                providing a seamless and optimized healthcare workforce experience.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">Analytics Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
     

    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <Link to="/register" className="block">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              <Link to="/register">Sign Up</Link>
            </h3>
          </div>
          </Link>
          <Link to="/login" className="block">
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-cyan-600 rounded-full"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              <Link to="/login">Create Profile</Link>
            </h3>
          </div>
          </Link>
          <Link to="/jobs" className="block">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-pink-600 rounded-lg"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              <Link to="/jobs">Apply for Jobs</Link>
            </h3>
          </div>
          </Link>
          <Link to="/cpds" className="block">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-orange-600 rounded-lg"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              <Link to="/cpds">Access CPDs</Link>
            </h3>
          </div>
          </Link>
        </div>
      </div>
    </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-POWERED RECRUITMENT</h3>
              <p className="text-gray-600">
                Match the right talent with the right roles using smart filters and automated suggestions.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">DEPLOYMENT OPTIMIZATION</h3>
              <p className="text-gray-600">
                Real-time health workforce planning and tools for staffing gaps management.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">TRAINING & CPD TRACKING</h3>
              <p className="text-gray-600">
                Centralized tools for performance development, certifications, and progress monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Testimonials</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <p className="text-lg text-gray-600 mb-6 italic">
                "Medicordia has revolutionized our healthcare workforce management. The AI-powered recruitment feature
                has helped us find the right candidates quickly and efficiently."
              </p>
              <h4 className="font-semibold text-gray-900">Dr. Amira Belle</h4>
              <p className="text-gray-500">Healthcare Administrator</p>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to revolutionize healthcare workforce management?</h2>
              <div className="flex flex-col sm:flex-row gap-4">
               <Link to="/register" className="block">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-semibold">
                  Create Account
                </button>
                </Link>
                <Link to="/jobs" className="block">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 font-semibold">
                  Find Jobs
                </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4"></div>
                <div className="space-y-2">
                  <div className="bg-white/20 rounded-lg h-4"></div>
                  <div className="bg-white/20 rounded-lg h-4 w-3/4"></div>
                  <div className="bg-white/20 rounded-lg h-4 w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-semibold">Medicordia</span>
              </div>
              <p className="text-gray-400 text-sm">
                Medicordia is a digital platform built to revolutionize healthcare workforce management through
                AI-powered solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get job notifications</h4>
              <p className="text-sm text-gray-400 mb-4">The latest job news, articles, sent to your inbox weekly.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>2023 © Medicordia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home