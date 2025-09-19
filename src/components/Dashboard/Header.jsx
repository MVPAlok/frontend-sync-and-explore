import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';

const Header = ({ title }) => {
  return (
    <header className="flex justify-between items-center mb-8">
      {/* Logo and Title */}
      <div className="flex flex-col gap-[5.2px]">
        <h1 className="text-[26.6px] bg-gradient-to-r from-[#1A8F98] to-[#007C7C] bg-clip-text text-transparent">
          Sync & Explore
        </h1>
        <h2 className="text-[40.3px] font-extrabold text-[#4B4B4B]">{title}</h2>
      </div>

      {/* Search and Notifications */}
      <div className="flex items-center gap-4">
        <button className="w-[92px] h-[92px] flex items-center justify-center rounded-[46.11px] border border-[#0000002e] bg-white">
          <FiSearch className="w-11 h-11 text-gray-600" />
        </button>
        <button className="w-[92px] h-[92px] flex items-center justify-center rounded-[46.11px] border border-[#0000002e] bg-white">
          <FiBell className="w-11 h-11 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;