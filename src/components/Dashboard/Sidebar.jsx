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
    <div className="w-80 bg-white rounded-[27.56px] border border-[#0000000d] m-6 p-6 flex flex-col h-[867px]">
      {/* User Profile */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-[99px] h-[99px] rounded-full overflow-hidden">
          <img
            src="/placeholder-profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-[28.9px] font-bold text-black">Hii, Sam-yuk</h3>
          <p className="text-[28.9px] text-black">Traveller</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-full transition-all ${
                  isActive
                    ? 'bg-[#1A8F98] text-white'
                    : 'text-[#4B4B4B] hover:bg-gray-50'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-[25.9px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout Button */}
      <Link
        to="/logout"
        className="flex items-center gap-4 px-4 py-3 text-[#1a8f98] font-bold text-[25.9px]"
      >
        <FiLogOut className="w-8 h-8" />
        <span>Log Out</span>
      </Link>
    </div>
  );
};

export default Sidebar;