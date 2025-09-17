import React, { useState } from 'react';

// Import all images with random names
import planeTrailIcon from '../assets/sample.png';
import mountainOutlineIcon from '../assets/sample.png';
import backgroundImage from '../assets/sample.jpg';
import emailIcon from '../assets/sample.png';
import linkedinIcon from '../assets/sample.png';
import twitterIcon from '../assets/sample.png';
import instagramIcon from '../assets/sample.png';
import youtubeIcon from '../assets/sample.png';

const JoinWaitlist = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="w-full">
      {/* Join Waitlist Section */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Side - Teal Background */}
          <div className="lg:w-1/2 bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500 p-12 lg:p-16 relative flex flex-col justify-center">
            {/* Decorative plane with dotted trail */}
            <div className="absolute top-8 right-8">
              <img src={planeTrailIcon} alt="Plane trail" className="w-32 h-8 opacity-40" />
            </div>
            
            <div className="max-w-md">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                Be Part of the Future of Travel
              </h2>
              <p className="text-gray-700 text-lg mb-12 leading-relaxed">
                Get early access to exclusive AI-powered features.
              </p>
            </div>
            
            {/* Mountain illustration and branding */}
            <div className="mt-auto">
              <div className="mb-6">
                <img src={mountainOutlineIcon} alt="Mountain outline" className="w-60 h-32 opacity-30" />
              </div>
              <div className="text-center">
                <h3 className="text-teal-600 font-bold text-xl">Sync & Explore</h3>
              </div>
            </div>
          </div>
          
          {/* Right Side - Background Image with Form */}
          <div className="lg:w-1/2 relative">
            <img 
              src={backgroundImage}
              alt="Travel background" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 p-12 lg:p-16 h-full flex flex-col justify-center">
              <div className="max-w-sm mx-auto w-full">
                <h3 className="text-3xl font-bold text-white mb-12 text-center">
                  Join Waitlist
                </h3>
                <div className="space-y-6">
                  <input
                    type="email"
                    placeholder="Your Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 rounded-full bg-transparent border-2 border-gray-400 text-white placeholder-gray-300 focus:border-white focus:outline-none text-base"
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-6 py-4 rounded-full bg-transparent border-2 border-gray-400 text-white placeholder-gray-300 focus:border-white focus:outline-none text-base"
                  />
                  <button className="w-full bg-white hover:bg-gray-100 text-teal-600 px-6 py-4 rounded-full font-semibold transition-colors text-base">
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-br from-teal-400 to-teal-600 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex space-x-8 mb-6 md:mb-0">
              <a href="#" className="text-white hover:text-teal-200 transition-colors text-base font-medium">
                Service
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition-colors text-base font-medium">
                Support
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition-colors text-base font-medium">
                Company
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition-colors text-base font-medium">
                Legal
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition-colors text-base font-medium">
                Join Us
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="bg-teal-700 p-3 rounded-lg hover:bg-teal-800 transition-colors">
                <img src={emailIcon} alt="Email" className="w-5 h-5 filter brightness-0 invert" />
              </a>
              <a href="#" className="bg-teal-700 p-3 rounded-lg hover:bg-teal-800 transition-colors">
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 filter brightness-0 invert" />
              </a>
              <a href="#" className="bg-teal-700 p-3 rounded-lg hover:bg-teal-800 transition-colors">
                <img src={twitterIcon} alt="Twitter" className="w-5 h-5 filter brightness-0 invert" />
              </a>
              <a href="#" className="bg-teal-700 p-3 rounded-lg hover:bg-teal-800 transition-colors">
                <img src={instagramIcon} alt="Instagram" className="w-5 h-5 filter brightness-0 invert" />
              </a>
              <a href="#" className="bg-teal-700 p-3 rounded-lg hover:bg-teal-800 transition-colors">
                <img src={youtubeIcon} alt="YouTube" className="w-5 h-5 filter brightness-0 invert" />
              </a>
            </div>
          </div>
          
          <div className="text-center text-teal-200 text-sm border-t border-teal-500 pt-6">
            Copyright © Sync&Explore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JoinWaitlist;