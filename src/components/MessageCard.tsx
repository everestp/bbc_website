import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User, Quote, Star } from "lucide-react";

interface MessageCardProps {
  name: string;
  title: string;
  message: string;
  photo?: string;
  className?: string;
  rating?: number;
}

const MessageCard = ({
  name,
  title,
  message,
  photo,
  className = "",
  rating = 5,
}: MessageCardProps) => {
  return (
    <Card 
      className={`overflow-hidden group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-gray-800 ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 transform origin-left group-hover:scale-x-105 transition-transform duration-500"></div>
      
      <CardHeader className="flex flex-col md:flex-row items-center gap-8 pb-6 border-b border-blue-100 dark:border-gray-700 px-8 pt-8">
        <div className="relative group-hover:scale-105 transition-transform duration-500">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center group-hover:border-blue-100 dark:group-hover:border-blue-900 transition-colors duration-500">
            {photo ? (
              <img src={photo} alt={name} className="w-full h-full object-cover" />
            ) : (
              <User size={48} className="text-gray-400 dark:text-gray-300" />
            )}
          </div>
          <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2.5 rounded-full shadow-lg group-hover:rotate-12 transition-transform duration-500">
            <Quote size={16} />
          </div>
        </div>
        
        <div className="text-center md:text-left space-y-2">
          <div className="flex mb-2 justify-center md:justify-start">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400 mr-1" />
            ))}
          </div>
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 group-hover:from-indigo-600 group-hover:to-purple-500 dark:group-hover:from-indigo-400 dark:group-hover:to-purple-300 transition-colors duration-500">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-medium">{title}</p>
        </div>
      </CardHeader>
      
      <CardContent className="relative pt-10 pb-8 px-8">
        <div className="absolute top-6 left-6 text-gray-200 dark:text-gray-700 transform -translate-y-2 group-hover:-translate-y-3 transition-transform duration-500">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z"/>
          </svg>
        </div>
        <div className="prose dark:prose-invert max-w-none pl-8 relative z-10">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-lg">
            {message}
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full -mr-16 -mb-16 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      </CardContent>
      
      <div className="bg-gradient-to-r from-blue-100/50 to-indigo-100/50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 text-right relative">
        <div className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          Testimonial
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform origin-right group-hover:scale-x-105 transition-transform duration-500"></div>
      </div>
    </Card>
  );
};

export default MessageCard;