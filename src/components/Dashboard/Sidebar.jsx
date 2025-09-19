import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiGrid, FiCompass, FiMap, FiCalendar, FiUsers,
  FiDollarSign, FiBriefcase, FiUsers as FiGroup,
  FiUserPlus, FiSettings, FiHelpCircle, FiLogOut
} from 'react-icons/fi';

const menuItems = [
  { icon: FiGrid, label: 'Dashboard', path: '/dashboard' },
  { icon: FiCompass, label: 'Explore Trips', path: '/dashboard/explore' },
  { icon: FiMap, label: 'My Trips', path: '/dashboard/my-trips' },
  { icon: FiCalendar, label: 'Calendar Sync', path: '/dashboard/calendar' },
  { icon: FiUsers, label: 'Travel Buddies', path: '/dashboard/buddies' },
  { icon: FiDollarSign, label: 'Budget & Planner', path: '/dashboard/budget' },
  { icon: FiBriefcase, label: 'Stay Options', path: '/dashboard/stays' },
  { icon: FiGroup, label: 'Group & forums', path: '/dashboard/forums' },
  { icon: FiUserPlus, label: 'Invite friends', path: '/dashboard/invite' },
  { icon: FiSettings, label: 'Account settings', path: '/dashboard/settings' },
  { icon: FiHelpCircle, label: 'Help & Support', path: '/dashboard/help' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full bg-[#F4F4F4] transition-all duration-300 w-64 lg:w-72">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 px-6 py-5">
        <img src="/src/assets/brand-logo.png" alt="Logo" className="w-6 h-6" />
        <span className="text-base font-semibold text-[#1A1D1F]">Sync & Explore</span>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3 mb-6 px-6">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGGDb-eDrgqjw/profile-displayphoto-shrink_400_400/B56ZZZvN4rHQAg-/0/1745262273340?e=1761177600&v=beta&t=iwaxi8yaW7-E6Qx-_xa6KM7Uj0KXzqIuEw03XL1h_nU"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-medium text-[#1A1D1F] truncate">Hii, Abhishek</h3>
          <p className="text-sm text-[#1A8F98]">Traveller</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-0.5 px-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] transition-all duration-200 
                ${isActive
                  ? 'bg-[#1A8F98] text-white'
                  : 'text-[#64748B] hover:bg-[#1A8F98]/5 hover:text-[#1A8F98]'
                }
                group
              `}
            >
              <Icon 
                className={`w-[18px] h-[18px] flex-shrink-0 transition-colors duration-200
                  ${isActive ? 'text-white' : 'text-[#64748B] group-hover:text-[#1A8F98]'}`}
              />
              <span className={`font-medium truncate ${
                isActive ? '' : 'group-hover:text-[#1A8F98]'
              }`}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="mt-4 px-4 pb-5">
        <button 
          className="flex items-center gap-3 px-4 py-2.5 w-full text-[14px] text-[#64748B] 
            hover:bg-[#1A8F98]/5 hover:text-[#1A8F98] rounded-lg transition-all duration-200 
            group"
        >
          <FiLogOut className="w-[18px] h-[18px] flex-shrink-0 transition-colors duration-200 group-hover:text-[#1A8F98]" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;