
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseSyllabus from "@/components/CourseSyllabus";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp } from "lucide-react";

const BcaCoursePage = () => {
  // Sample syllabus data for BCA
  const bcaSyllabus = [
    {
      number: 1,
      subjects: [
        {
          code: "BCA101",
          name: "Computer Fundamentals & Applications",
          creditHours: 3,
          description: "Introduction to computer systems, hardware, software, and basic applications.",
        },
        {
          code: "BCA102",
          name: "Mathematics I",
          creditHours: 3,
          description: "Set theory, functions, relations, matrices, determinants, and linear algebra.",
        },
        {
          code: "BCA103",
          name: "Digital Logic",
          creditHours: 3,
          description: "Number systems, logic gates, combinational and sequential circuits.",
        },
        {
          code: "BCA104",
          name: "C Programming",
          creditHours: 3,
          description: "C programming concepts, data types, control structures, functions, and arrays.",
        },
        {
          code: "BCA105",
          name: "English Composition",
          creditHours: 3,
          description: "Grammar, vocabulary, writing skills, and communication techniques.",
        },
      ],
    },
    {
      number: 2,
      subjects: [
        {
          code: "BCA201",
          name: "Data Structures & Algorithms",
          creditHours: 3,
          description: "Arrays, linked lists, stacks, queues, trees, graphs, and sorting algorithms.",
        },
        {
          code: "BCA202",
          name: "Mathematics II",
          creditHours: 3,
          description: "Differential and integral calculus, numerical methods.",
        },
        {
          code: "BCA203",
          name: "Object-Oriented Programming",
          creditHours: 3,
          description: "OOP concepts, classes, objects, inheritance, polymorphism, and encapsulation.",
        },
        {
          code: "BCA204",
          name: "Financial Accounting",
          creditHours: 3,
          description: "Accounting principles, financial statements, and analysis.",
        },
        {
          code: "BCA205",
          name: "Web Technology",
          creditHours: 3,
          description: "HTML, CSS, JavaScript, and basic web development concepts.",
        },
      ],
    },
    {
      number: 3,
      subjects: [
        {
          code: "BCA301",
          name: "Database Management Systems",
          creditHours: 3,
          description: "Database concepts, ER modeling, SQL, normalization, and transaction management.",
        },
        {
          code: "BCA302",
          name: "Java Programming",
          creditHours: 3,
          description: "Java programming language, object-oriented design, and GUI development.",
        },
        {
          code: "BCA303",
          name: "Operating Systems",
          creditHours: 3,
          description: "Operating system concepts, process management, memory management, and file systems.",
        },
        {
          code: "BCA304",
          name: "Computer Networks",
          creditHours: 3,
          description: "Network architectures, protocols, and communication principles.",
        },
        {
          code: "BCA305",
          name: "Statistics and Probability",
          creditHours: 3,
          description: "Statistical methods, probability distributions, and data analysis.",
        },
      ],
    },
    {
      number: 4,
      subjects: [
        {
          code: "BCA401",
          name: "Software Engineering",
          creditHours: 3,
          description: "Software development lifecycle, requirements engineering, design, testing, and project management.",
        },
        {
          code: "BCA402",
          name: "Computer Graphics",
          creditHours: 3,
          description: "Graphics concepts, algorithms, and implementations.",
        },
        {
          code: "BCA403",
          name: "Advanced Web Programming",
          creditHours: 3,
          description: "Server-side programming, dynamic web applications, and frameworks.",
        },
        {
          code: "BCA404",
          name: "Management Information Systems",
          creditHours: 3,
          description: "Information systems in organizations, management, and decision support systems.",
        },
        {
          code: "BCA405",
          name: "Scripting Language",
          creditHours: 3,
          description: "Python/Perl programming for automation and scripting.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Course Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 pt-24 pb-10 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4 text-white">Bachelor of Computer Applications (BCA)</h1>
            <p className="text-xl text-gray-100 mb-6">
              A comprehensive four-year undergraduate program designed to produce skilled IT professionals with strong programming and application development skills.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
                4 Years (8 Semesters)
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
                Full-Time
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
                On-Campus
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              <TabsTrigger value="opportunities">Career Opportunities</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      The Bachelor of Computer Applications (BCA) program is designed to provide students with a strong foundation in computer applications and IT. This program aims to develop skills in programming, database management, web development, and software engineering.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                        <span>Industry-aligned curriculum with focus on practical applications</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                        <span>State-of-the-art computer labs and infrastructure</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                        <span>Expert faculty with academic and industry experience</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                        <span>Regular workshops, seminars, and guest lectures</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                        <span>Internship opportunities with leading IT companies</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                        <span>Minor project in 6th semester and major project in 8th semester</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      Candidates must have completed 10+2 or equivalent examination with a minimum of 45% marks (40% for reserved categories) with Mathematics as a compulsory subject.
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Program Highlights</h3>
                    
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                        <h4 className="font-medium text-campus-blue dark:text-blue-400">Duration</h4>
                        <p className="text-gray-700 dark:text-gray-300">4 Years (8 Semesters)</p>
                      </div>
                      
                      <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                        <h4 className="font-medium text-campus-blue dark:text-blue-400">Total Credit Hours</h4>
                        <p className="text-gray-700 dark:text-gray-300">120 Credit Hours</p>
                      </div>
                      
                      <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                        <h4 className="font-medium text-campus-blue dark:text-blue-400">Internship</h4>
                        <p className="text-gray-700 dark:text-gray-300">Yes (Final Year)</p>
                      </div>
                      
                      <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                        <h4 className="font-medium text-campus-blue dark:text-blue-400">Project Work</h4>
                        <p className="text-gray-700 dark:text-gray-300">Minor & Major Projects</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-campus-blue dark:text-blue-400">Industry Partners</h4>
                        <p className="text-gray-700 dark:text-gray-300">15+ Leading IT Companies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="syllabus">
              <CourseSyllabus semesters={bcaSyllabus} courseTitle="BCA" />
            </TabsContent>
            
            <TabsContent value="opportunities">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    BCA graduates have diverse career opportunities across various sectors in the IT industry. Some of the key roles and areas include:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-3 text-campus-blue dark:text-blue-400">Software Development</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• Software Developer</li>
                        <li>• Web Developer</li>
                        <li>• Mobile App Developer</li>
                        <li>• Full Stack Developer</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-3 text-campus-blue dark:text-blue-400">Data & Analytics</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• Database Administrator</li>
                        <li>• Data Analyst</li>
                        <li>• Business Intelligence Developer</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-3 text-campus-blue dark:text-blue-400">IT Operations</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• System Administrator</li>
                        <li>• Network Administrator</li>
                        <li>• IT Support Specialist</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-3 text-campus-blue dark:text-blue-400">Quality Assurance</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• Software Tester</li>
                        <li>• QA Engineer</li>
                        <li>• Test Automation Engineer</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-3 text-campus-blue dark:text-blue-400">Design & UI/UX</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• UI/UX Designer</li>
                        <li>• Web Designer</li>
                        <li>• Interaction Designer</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-3 text-campus-blue dark:text-blue-400">Entrepreneurship</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• Startup Founder</li>
                        <li>• Technology Consultant</li>
                        <li>• Freelance Developer</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Higher Studies</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    BCA graduates can pursue various postgraduate degrees to further enhance their skills and career prospects:
                  </p>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                      <span>Master of Computer Applications (MCA)</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                      <span>Master of Science in Information Technology (MSc IT)</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                      <span>Master of Business Administration (MBA) with IT specialization</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                      <span>Master's in Data Science or Artificial Intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                      <span>Various specialized certifications in programming, cloud computing, cybersecurity, etc.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BcaCoursePage;
