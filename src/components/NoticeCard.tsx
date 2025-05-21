import { Calendar, Eye } from "lucide-react";
import { useState } from "react";
import Modal from "react-modal";
import ImagePreview from "./ImagePreview";

type Notice = {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  important?: boolean;
  imageUrl?: string;
};

Modal.setAppElement("#root"); // Important for accessibility

export const NoticeCard = ({ notice }: { notice: Notice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border-l-4 transition-all duration-200 ${
        notice.important
          ? "border-red-500"
          : "border-campus-blue dark:border-blue-500"
      }`}
    >

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3
            className={`text-xl font-bold ${
                notice.important
                ? "text-red-600 dark:text-red-400"
                : "text-campus-blue dark:text-blue-400"
            }`}
            >
            {notice.title}
            {notice.important && (
                <span className="ml-2 inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded dark:bg-red-900 dark:text-red-200">
                Important
              </span>
            )}
          </h3>
            {true && (
          <ImagePreview imageUrl={""}/>
          )}
        </div>

        <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-2">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{notice.date}</span>
          </div>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium">
            {notice.category}
          </span>
        </div>

       
      </div>

    </div>
  );
};
