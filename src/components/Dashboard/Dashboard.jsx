import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import CalendarSync from './CalendarSync';

// Placeholder components for other routes
const DashboardHome = () => <div>Dashboard Home</div>;
const ExploreTrips = () => <div>Explore Trips</div>;
const MyTrips = () => <div>My Trips</div>;
const TravelBuddies = () => <div>Travel Buddies</div>;
const BudgetPlanner = () => <div>Budget & Planner</div>;
const StayOptions = () => <div>Stay Options</div>;
const GroupForums = () => <div>Group & Forums</div>;
const InviteFriends = () => <div>Invite Friends</div>;
const AccountSettings = () => <div>Account Settings</div>;
const HelpSupport = () => <div>Help & Support</div>;

const Dashboard = () => {

  return (
    <div className="flex min-h-screen bg-gradient-primary">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/explore" element={<ExploreTrips />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/calendar" element={<CalendarSync />} />
          <Route path="/buddies" element={<TravelBuddies />} />
          <Route path="/budget" element={<BudgetPlanner />} />
          <Route path="/stays" element={<StayOptions />} />
          <Route path="/forums" element={<GroupForums />} />
          <Route path="/invite" element={<InviteFriends />} />
          <Route path="/settings" element={<AccountSettings />} />
          <Route path="/help" element={<HelpSupport />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;