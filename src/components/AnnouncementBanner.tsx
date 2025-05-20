import React, { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

type AnnouncementProps = {
  message: string;
  link?: string;
  linkText?: string;
};

const AnnouncementBanner = ({ 
  message = "🎉 Admission Open! Join our vibrant campus community now! 🎓", 
  link = "/admission", 
  linkText = "Apply Now" 
}: AnnouncementProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-campus-blue text-white py-3 px-4 relative animate-pulse">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="mr-8 text-center sm:text-left mb-2 sm:mb-0 animate-bounce">
          {message}
        </p>
        {link && (
          <div className="flex items-center">
            <Link
              to={link}
              className="bg-white text-campus-blue px-4 py-1 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 text-sm"
            >
              {linkText}
            </Link>
          </div>
        )}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
          aria-label="Close announcement"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;