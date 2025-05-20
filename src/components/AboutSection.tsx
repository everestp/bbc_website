import React from "react";
import { ArrowRight, Award, Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-300 mb-4">
            About Banke Bageshwori Campus
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 text-xl max-w-3xl mx-auto">
            Shaping the future of IT and Computing education since 2013
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Image with hover effect */}
          <div className="lg:w-1/2 overflow-hidden rounded-xl shadow-xl transform transition duration-500 hover:scale-105">
            <img
              src="/building.png"
              alt="Banke Bageshwori Campus Building"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Text Content with styled typography */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Banke Bageshwori Campus (BBC), established in 2013 AD, is a modern institution affiliated with Tribhuvan University. Founded by experienced academicians, computer engineers, IT experts, and management professionals, we are dedicated to shaping the careers of +2 graduates in IT and Computing.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Our curriculum balances theoretical knowledge with practical applications, preparing students to meet modern world challenges and build successful futures. We emphasize developing workplace-relevant technical skills through our network of IT experts, management professionals, business collaborations, and highly qualified faculty.
            </p>
            <div className="pt-4">
              <a href="#programs" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                Explore our programs <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Aim */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Aim</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We aim to teach, train, guide, and motivate students to effectively make their way into a challenging and rewarding IT and computing career.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our highest priority is student learning and achievement, developing well-rounded individuals prepared to be active citizens in a global information technology community.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Eye className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              A literate society with purpose, a progressive society with ideas, and a conscious society working towards a better and brighter future for all.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Values</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></span>
                Dedication
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></span>
                Honour
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></span>
                Respect
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></span>
                Responsibility
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></span>
                Trust
              </li>
            </ul>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default AboutSection;