
import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

type Notice = {
  id: string;
  title: string;
  date: string;
  category: string;
  link: string;
};

interface NoticeBoardProps {
  notices: Notice[];
  className?: string;
}

const NoticeBoard = ({ notices, className = "" }: NoticeBoardProps) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-campus-blue dark:text-blue-400">
          Latest Notices
        </h3>
        <Link
          to="/notices"
          className="text-sm text-campus-blue dark:text-blue-400 hover:underline"
        >
          View All
        </Link>
      </div>
      
      <div className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="p-4 border-l-4 border-campus-blue dark:border-blue-500 bg-gray-50 dark:bg-gray-700 rounded-r-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium">
                  <Link to={notice.link} className="hover:text-campus-blue dark:hover:text-blue-400">
                    {notice.title}
                  </Link>
                </h4>
                <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={14} className="mr-1" />
                  <span>{notice.date}</span>
                  <span className="mx-2">•</span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-xs">
                    {notice.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
