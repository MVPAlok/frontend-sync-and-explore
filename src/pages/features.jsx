import React from 'react';

// Import all images with random names
import planeTrail from '../assets/sample.png';
import calendarIcon from '../assets/sample.png';
import globeIcon from '../assets/sample.png';
import peopleIcon from '../assets/sample.png';
import houseIcon from '../assets/sample.png';

const Features = () => {
  return (
    <section className="py-24 px-8 relative overflow-hidden bg-gradient-features">
      {/* Decorative plane with dotted trail */}
      <div className="absolute top-16 left-8 z-0">
        <img src={planeTrail} alt="Plane with dotted trail" className="w-80 h-20 opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            Why Sync & Explore?
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Sync Travel Dates */}
          <div className="bg-gradient-primary rounded-3xl p-10 text-white text-center min-h-[220px] flex flex-col justify-center transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-xl p-3 mx-auto backdrop-blur-sm">
                <img src={calendarIcon} alt="Calendar" className="w-full h-full filter brightness-0 invert" />
              </div>
            </div>
            <h3 className="font-bold text-xl leading-tight">
              Sync<br />Travel Dates
            </h3>
          </div>
          
          {/* Explore Destinations */}
          <div className="bg-gradient-primary rounded-3xl p-10 text-white text-center min-h-[220px] flex flex-col justify-center transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-xl p-3 mx-auto backdrop-blur-sm">
                <img src={globeIcon} alt="Globe" className="w-full h-full filter brightness-0 invert" />
              </div>
            </div>
            <h3 className="font-bold text-xl leading-tight">
              Explore<br />Destinations
            </h3>
          </div>
          
          {/* Find Travel Buddies */}
          <div className="bg-gradient-primary rounded-3xl p-10 text-white text-center min-h-[220px] flex flex-col justify-center transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-xl p-3 mx-auto backdrop-blur-sm">
                <img src={peopleIcon} alt="People" className="w-full h-full filter brightness-0 invert" />
              </div>
            </div>
            <h3 className="font-bold text-xl leading-tight">
              Find Travel<br />Buddies
            </h3>
          </div>
          
          {/* Affordable Stays */}
          <div className="bg-gradient-primary rounded-3xl p-10 text-white text-center min-h-[220px] flex flex-col justify-center transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-xl p-3 mx-auto backdrop-blur-sm">
                <img src={houseIcon} alt="House" className="w-full h-full filter brightness-0 invert" />
              </div>
            </div>
            <h3 className="font-bold text-xl leading-tight">
              Affordable<br />Stays
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;