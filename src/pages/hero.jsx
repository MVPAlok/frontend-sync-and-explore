import React from 'react';

// Import all images with random names
import logoMountain from '../assets/brand-logo.png';
import mountainView from '../assets/scenic-mountain.jpg';
import coastalBeach from '../assets/ocean-coast.jpg';
import calendarWidget from '../assets/sample.png';


const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-primary">
      {/* Decorative dots pattern - top right */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
        <div className="grid grid-cols-12 gap-1.5 p-8">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav className="flex justify-center items-center px-10 py-8 max-w-7xl mx-auto relative">
          <div className="absolute left-10 flex items-center">
            <img src={logoMountain} alt="Sync & Explore" className="h-16 w-auto" />
          </div>
          <div className="rounded-full px-4 py-3 bg-white/10 backdrop-blur-sm">
            <div className="flex items-center space-x-1">
                <button className="text-white px-6 py-2.5 rounded-full transition-colors text-sm font-medium bg-white/10">
                Home
              </button>
              <button className="text-white px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm font-medium">
                Features
              </button>
              <button className="text-white px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm font-medium">
                Testimonials
              </button>
              <button className="text-white px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm font-medium">
                Contact
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="px-6 sm:px-8 py-8 max-w-[1400px] mx-auto">
          <div className="bg-white/95 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] relative overflow-hidden border border-teal-100">
            {/* Small decorative dots inside white container */}
            <div className="absolute top-8 right-8 opacity-5">
              <div className="grid grid-cols-8 gap-1">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center min-h-[640px]">
              {/* Left Content */}
              <div className="lg:w-1/2 p-16 flex flex-col justify-center">
                <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] gradient-text">
                  We Sync,AI Plans.
                  <br />
                  You Explore
                </h1>
                <p className="text-gray-600 text-xl mb-10 leading-relaxed max-w-lg">
                  AI-powered travel buddy matching and itinerary planning — so you travel smart, not hard.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="primary-button">
                    Join waitlist
                  </button>
                  <button className="secondary-button">
                    See how it works
                  </button>
                </div>
              </div>
              
              {/* Right Content - Images */}
              <div className="lg:w-1/2 p-12 lg:p-16 flex justify-center items-center">
                <div className="relative w-full max-w-xl">
                  {/* Front portrait image */}
                  <div className="relative z-20 transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={coastalBeach}
                      alt="Coastal beach view"
                      className="w-60 h-80 object-cover rounded-2xl shadow-xl ring-4 ring-white/30"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-overlay pointer-events-none"></div>
                  </div>
                  {/* Back portrait image */}
                  <div className="absolute -top-10 right-6 z-10 transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={mountainView}
                      alt="Mountain landscape"
                      className="w-64 h-[22rem] object-cover rounded-2xl shadow-xl ring-4 ring-white/30"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-overlay pointer-events-none"></div>
                  </div>
                  {/* Calendar Icon Circle */}
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 z-30">
                    <div className="bg-gradient-primary p-5 rounded-full shadow-xl ring-4 ring-white/30 transform hover:scale-110 transition-transform duration-300">
                      <img src={calendarWidget} alt="Calendar" className="w-10 h-10 filter brightness-0 invert" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;