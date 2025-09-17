import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample testimonials data - you can replace with your actual data
  const testimonials = [
    {
      id: 1,
      name: "Taylor",
      image: "/assets/taylor.jpg", // Replace with your actual image path
      text: "Our experience with Sync & Explore has been exceptional. The platform's ability to seamlessly match travel buddies and plan AI-powered itineraries made trip planning effortless. This smart and dependable tool has added great value to our travel journey, making exploration more exciting and stress-free.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah",
      image: "/assets/sarah.jpg", // Replace with your actual image path
      text: "Sync & Explore revolutionized how we plan our adventures. The AI recommendations were spot-on and helped us discover hidden gems we never would have found otherwise. The travel buddy matching feature connected us with amazing people who shared our interests.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael",
      image: "/assets/michael.jpg", // Replace with your actual image path
      text: "I've used many travel planning tools, but Sync & Explore stands out with its intelligent matching system and comprehensive itinerary planning. It made our group trip coordination seamless and introduced us to fellow travelers who became lifelong friends.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div className="w-full py-24 px-6" style={{background: 'linear-gradient(to bottom, #6DDADF, #ffffff)'}}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#178C95'}}>
            What Our Early Users Say?
          </h2>
        </div>

        {/* Testimonial Container */}
        <div className="relative">
          <div className="flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-teal-200 flex items-center justify-center hover:bg-teal-50 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" style={{color: '#178C95'}} />
            </button>

            {/* Testimonial Card */}
            <div className="max-w-4xl mx-16 bg-white rounded-[40px] shadow-2xl p-10 md:p-12 border" style={{borderColor: '#6DDADF'}}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-200 shadow-lg">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold" style={{display: 'none'}}>
                      {currentTestimonial.name.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 font-normal">
                    {currentTestimonial.text}
                  </p>

                  {/* Rating Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1"
                      />
                    ))}
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-800">
                    {currentTestimonial.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-teal-200 flex items-center justify-center hover:bg-teal-50 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" style={{color: '#178C95'}} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? '' : 'bg-gray-300'
                }`}
                style={{backgroundColor: index === currentSlide ? '#178C95' : undefined}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;