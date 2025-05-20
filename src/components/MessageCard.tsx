
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User } from "lucide-react";

interface MessageCardProps {
  name: string;
  title: string;
  message: string;
  photo?: string;
  className?: string;
}

const MessageCard = ({
  name,
  title,
  message,
  photo,
  className = "",
}: MessageCardProps) => {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader className="flex flex-col md:flex-row items-center gap-4 pb-6 border-b">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md bg-gray-100 flex items-center justify-center">
          {photo ? (
            <img src={photo} alt={name} className="w-full h-full object-cover" />
          ) : (
            <User size={48} className="text-gray-400" />
          )}
        </div>
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{title}</p>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {message}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
