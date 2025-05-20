import React, { useEffect, useState } from "react";

const images = [
    '/program.jpg',
    "/computer2.jpg",
    "/computer3.jpg",
    "/classroom.jpg",
    "/computer.jpg",
    "/computer5.jpg",
    "/ceremony.jpg",
    "/picnic.jpg",
    "/picnic1.jpg",
    "/picnic3.jpg",
    "/parking.jpg",
    "/ict.jpg",
    "/libary.jpg",
    "/bca1.jpg",
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000); // 3-second slide interval

    return () => clearInterval(interval); // Clean up
  }, [length]);

  return (
    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;