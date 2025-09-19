import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ logo }) => {
  const location = useLocation();

  return (
    <nav className="flex justify-center items-center px-8 py-8 relative z-10">
      <div className="absolute left-8 flex items-center">
        <img src={logo} alt="Sync & Explore" className="h-12 w-auto" />
      </div>
      <div className="rounded-full px-3 py-3" style={{backgroundColor: '#178C95'}}>
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className={`text-white px-6 py-2.5 rounded-full transition-colors text-sm font-medium ${
              location.pathname === '/' ? 'bg-[#178C95]' : 'hover:opacity-80'
            }`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`text-white px-6 py-2.5 rounded-full transition-colors text-sm font-medium ${
              location.pathname.includes('/dashboard') ? 'bg-[#178C95]' : 'hover:opacity-80'
            }`}
          >
            Features
          </Link>
          <Link
            to="/testimonials"
            className="text-white px-6 py-2.5 rounded-full hover:opacity-80 transition-colors text-sm font-medium"
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="text-white px-6 py-2.5 rounded-full hover:opacity-80 transition-colors text-sm font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;