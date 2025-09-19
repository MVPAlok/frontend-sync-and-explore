import React from 'react';

const DestinationCard = ({ image, title, onView }) => {
  return (
    <div className="relative h-[231px] rounded-xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h4 className="text-white text-[32.7px] font-bold tracking-[2.07px]">
          {title}
        </h4>
      </div>
      <button
        onClick={onView}
        className="absolute bottom-4 right-4 bg-[#1a8f98] text-white px-6 py-2 rounded-[33.14px] text-[24.8px] font-bold"
      >
        View
      </button>
    </div>
  );
};

export default DestinationCard;