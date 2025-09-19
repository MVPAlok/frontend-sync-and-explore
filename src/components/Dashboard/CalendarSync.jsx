import React from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import Header from './Header';
import DestinationCard from './DestinationCard';

const CalendarSync = () => {
  const destinations = [
    {
      id: 1,
      title: 'Bali Gateway',
      image: '/path-to-bali-image.jpg',
    },
    {
      id: 2,
      title: 'Maldives',
      image: '/path-to-maldives-image.jpg',
    },
    {
      id: 3,
      title: 'Switzerland',
      image: '/path-to-switzerland-image.jpg',
    },
    // Add more destinations as needed
  ];

  return (
    <div className="space-y-8">
      <Header title="Calendar Sync" />

      {/* Date and Location Selection */}
      <div className="flex gap-6">
        {/* Start Date */}
        <div className="bg-white rounded-[21px] border border-[#00000026] p-4 w-[230px] flex items-center justify-between">
          <span className="text-[24px] font-light text-[#4B4B4B]">Start date</span>
          <FiCalendar className="w-[30px] h-[30px] text-gray-600" />
        </div>

        {/* End Date */}
        <div className="bg-white rounded-[21px] border border-[#00000026] p-4 w-[230px] flex items-center justify-between">
          <span className="text-[24px] font-light text-[#4B4B4B]">End date</span>
          <FiCalendar className="w-[30px] h-[30px] text-gray-600" />
        </div>

        {/* Location */}
        <div className="bg-white rounded-[21px] border border-[#00000026] p-4 w-[208px] flex items-center justify-between">
          <span className="text-[24px] font-light text-[#4B4B4B]">Location</span>
          <FiMapPin className="w-[30px] h-[30px] text-gray-600" />
        </div>
      </div>

      {/* Sync Section Title */}
      <div>
        <h3 className="text-[28px] font-bold text-[#4B4B4B] leading-[80.4px]">
          Sync your Travel dates
        </h3>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            image={destination.image}
            title={destination.title}
            onView={() => console.log('View', destination.title)}
          />
        ))}
      </div>

      {/* Add More Dates Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#1a8f98] text-white px-8 py-3 rounded-[33.14px] text-[24.8px] font-bold">
          Add your Travel Dates
        </button>
      </div>

      {/* Google Calendar Sync */}
      <div className="flex justify-center mt-4">
        <button className="bg-[#1a8f98] text-white px-8 py-3 rounded-[33.14px] text-[24.8px] font-bold flex items-center gap-2">
          <img src="/google-calendar-icon.png" alt="" className="w-6 h-6" />
          Sync google calendar
        </button>
      </div>
    </div>
  );
};

export default CalendarSync;