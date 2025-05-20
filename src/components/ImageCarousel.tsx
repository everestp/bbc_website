import React, { useEffect, useState } from "react";

const images = [
    '/program.jpg',
    "/computer2.jpg",
    "/computer3.jpg",
    "/classroom.jpg",
    "/computer.jpg",
    "/computer5.jpg",
    "ceremony.jpg",
    "/picnic.jpg",
    "/picnic1.jpg",
    "/picnic3.jpg",
    "/parking.jpg",
    "/ict.jpg",
  "/libary.jpg",
  "/bca1.jpg",

];

const ImageCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000); // 3-second slide interval

    return () => clearInterval(interval); // Clean up
  }, [length]);

  return (
    <div className="relative w-full h-20 md:h-96 overflow-hidden rounded-xl shadow-lg">
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

      {/* Optional indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
