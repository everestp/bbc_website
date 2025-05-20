import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 dark:from-gray-900 dark:to-gray-800">
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')] opacity-10 dark:opacity-20"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white leading-tight mb-8 text-center">
          Welcome to <span className="text-yellow-400">Banke Bageshwori Campus</span>
          
        </h1>
       
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white dark:text-white leading-tight mb-4">
              Shape Your Future in <span className="text-yellow-400">Technology</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-6 max-w-md mx-auto lg:mx-0">
              Join our BSc CSIT and BCA programs to build a successful career in the rapidly evolving field of information technology.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link
                to="/admission"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-base sm:text-lg font-medium transition-colors duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-2xl relative bg-white dark:bg-gray-800 p-1">
              <img
                src="/program.jpg"
                alt="Students working on computers"
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            className="dark:fill-gray-900"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,181.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;