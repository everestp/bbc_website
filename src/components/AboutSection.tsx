import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Banke Bageshwori Campus (BBC)
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Banke Bageshwori Campus (BBC), a modern campus, is established with an aim to significantly contribute to shape the career of +2 graduates in the field of IT and Computing. Affiliated to Tribhuvan University, it was founded in 2013 AD and promoted by a group of experienced and dedicated academicians, computer engineers, IT experts, and management professionals of this region.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            The goal of the campus is to provide a high quality education that will enable students to embrace the challenges of the modern world and lay the foundation for a successful future. Our curriculum blends theoretical and practical applications, encouraging students to apply classroom instructions effectively.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Emphasis is placed on helping students develop technical skills and knowledge that have practical value in the workplace. The heart of BBC’s educational excellence lies in its strong network of IT experts, reputed management professionals, collaboration with business houses, highly qualified faculty, and caring administrative staff.
          </p>

          {/* Additional Sections */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Aim</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              We aim to teach, train, guide, and motivate students to effectively make their way into a challenging and rewarding IT and computing career.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Banke Bageshwori Campus has its highest priority on students’ learning and achievement. As BBC prepares world-class citizens for the 21st century, we recognize that the aim of education is the development of the whole person — prepared to be an active citizen and participant in a global information technology community.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              A literate society with a purpose, a progressive society with ideas, and a conscious society working towards establishing a better and brighter future for all.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Values</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <li>Dedication</li>
              <li>Honour</li>
              <li>Respect</li>
              <li>Responsibility</li>
              <li>Trust</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/building.png"
            alt="Banke Bageshwori Campus"
            className="w-full h-64 md:h-[450px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
