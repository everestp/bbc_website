
import React from "react";
import { Users, Book, Award, CheckCircle } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <div className="text-2xl md:text-3xl font-bold text-campus-blue dark:text-blue-400">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  </div>
);

const CampusStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        value="500+"
        label="Students Enrolled"
        icon={<Users size={24} className="text-campus-blue dark:text-blue-400" />}
      />
      <StatCard
        value="25+"
        label="Expert Faculty"
        icon={<Book size={24} className="text-campus-blue dark:text-blue-400" />}
      />
      <StatCard
        value="98%"
        label="Placement Rate"
        icon={<CheckCircle size={24} className="text-campus-blue dark:text-blue-400" />}
      />
      <StatCard
        value="50+"
        label="Awards Received"
        icon={<Award size={24} className="text-campus-blue dark:text-blue-400" />}
      />
    </div>
  );
};

export default CampusStats;
