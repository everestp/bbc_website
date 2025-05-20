
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseSyllabus from "@/components/CourseSyllabus";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp } from "lucide-react";

const CsitCoursePage = () => {
  // Sample syllabus data for BSc CSIT
  const csitSyllabus = [
    {
      number: 1,
      subjects: [
        {
          code: "CSC101",
          name: "Introduction to Computer Science",
          creditHours: 3,
          description: "Fundamentals of computer systems, basic concepts and principles of computing.",
        },
        {
          code: "CSC102",
          name: "C Programming",
          creditHours: 3,
          description: "Introduction to C programming language, data types, control structures, functions, arrays, and pointers.",
        },
        {
          code: "CSC103",
          name: "Digital Logic",
          creditHours: 3,
          description: "Number systems, Boolean algebra, logic gates, combinational and sequential circuits.",
        },
        {
          code: "MTH104",
          name: "Calculus and Analytical Geometry",
          creditHours: 3,
          description: "Limits, continuity, differentiation, integration, and their applications.",
        },
        {
          code: "PHY105",
          name: "Physics I",
          creditHours: 3,
          description: "Mechanics, waves, oscillations, and thermodynamics with practical applications.",
        },
      ],
    },
    {
      number: 2,
      subjects: [
        {
          code: "CSC201",
          name: "Discrete Structures",
          creditHours: 3,
          description: "Sets, relations, functions, algebraic structures, graph theory, and Boolean algebra.",
        },
        {
          code: "CSC202",
          name: "Object Oriented Programming",
          creditHours: 3,
          description: "OOP concepts, classes, objects, inheritance, polymorphism using C++ and Java.",
        },
        {
          code: "CSC203",
          name: "Microprocessor",
          creditHours: 3,
          description: "Architecture, instruction sets, assembly language programming, and interfacing.",
        },
        {
          code: "MTH204",
          name: "Linear Algebra",
          creditHours: 3,
          description: "Vector spaces, linear transformations, matrices, determinants, and eigenvalues.",
        },
        {
          code: "STA205",
          name: "Statistics I",
          creditHours: 3,
          description: "Descriptive statistics, probability, random variables, and probability distributions.",
        },
      ],
    },
    {
      number: 3,
      subjects: [
        {
          code: "CSC301",
          name: "Data Structures and Algorithms",
          creditHours: 3,
          description: "Arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching algorithms.",
        },
        {
          code: "CSC302",
          name: "Computer Architecture",
          creditHours: 3,
          description: "Computer organization, memory, CPU design, I/O systems, and performance evaluation.",
        },
        {
          code: "CSC303",
          name: "Operating Systems",
          creditHours: 3,
          description: "Process management, memory management, file systems, and protection mechanisms.",
        },
        {
          code: "CSC304",
          name: "Database Management Systems",
          creditHours: 3,
          description: "Data modeling, relational databases, SQL, normalization, and transaction management.",
        },
        {
          code: "CSC305",
          name: "Computer Graphics",
          creditHours: 3,
          description: "Graphical primitives, transformations, viewing, hidden surface removal, and rendering.",
        },
      ],
    },
    {
      number: 4,
      subjects: [
        {
          code: "CSC401",
          name: "Theory of Computation",
          creditHours: 3,
          description: "Automata theory, formal languages, context-free grammars, and Turing machines.",
        },
        {
          code: "CSC402",
          name: "Computer Networks",
          creditHours: 3,
          description: "Network architectures, protocols, routing algorithms, and network security.",
        },
        {
          code: "CSC403",
          name: "Software Engineering",
          creditHours: 3,
          description: "Software development lifecycle, requirements engineering, design, testing, and project management.",
        },
        {
          code: "CSC404",
          name: "Artificial Intelligence",
          creditHours: 3,
          description: "Knowledge representation, searching techniques, machine learning, and expert systems.",
        },
        {
          code: "CSC405",
          name: "Web Technologies",
          creditHours: 3,
          description: "Web development technologies, frameworks, client-server architecture, and web services.",
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
            <h1 className="text-4xl font-bold mb-4 text-white">BSc in Computer Science and Information Technology</h1>
            <p className="text-xl text-gray-100 mb-6">
              A four-year undergraduate program focusing on theoretical and practical aspects of computer science and information technology.
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
                      The BSc CSIT program is a comprehensive undergraduate degree that combines the fundamental principles of computer science with the practical applications of information technology. The program provides a strong foundation in programming, algorithms, data structures, hardware, networking, and various other aspects of computing.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                        <span>Research-oriented curriculum with emphasis on theoretical foundations</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                        <span>Hands-on experience with cutting-edge technologies and tools</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                        <span>Highly qualified faculty with strong academic and research backgrounds</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                        <span>Project-based learning approach with focus on industry problems</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                        <span>Specialized elective courses in advanced technologies like AI, data science, and cloud computing</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                        <span>Final year research project and internship opportunities</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      Candidates must have completed 10+2 or equivalent examination with a minimum of 50% marks (45% for reserved categories) in Physics, Chemistry, and Mathematics.
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
                        <p className="text-gray-700 dark:text-gray-300">126 Credit Hours</p>
                      </div>
                      
                      <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                        <h4 className="font-medium text-campus-blue dark:text-blue-400">Research Project</h4>
                        <p className="text-gray-700 dark:text-gray-300">Required (Final Year)</p>
                      </div>
                      
                      <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                        <h4 className="font-medium text-campus-blue dark:text-blue-400">Internship</h4>
                        <p className="text-gray-700 dark:text-gray-300">Optional (Final Year)</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-campus-blue dark:text-blue-400">Industry Partners</h4>
                        <p className="text-gray-700 dark:text-gray-300">20+ Leading Tech Companies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="syllabus">
              <CourseSyllabus semesters={csitSyllabus} courseTitle="BSc CSIT" />
            </TabsContent>
            
            <TabsContent value="opportunities">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    BSc CSIT graduates have excellent career prospects in various domains. The program prepares students for both technical and managerial roles in the IT industry. Some of the key career paths include:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-3 text-campus-blue dark:text-blue-400">Software Development</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• Software Engineer</li>
                        <li>• Full Stack Developer</li>
                        <li>• Mobile App Developer</li>
                        <li>• Game Developer</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-3 text-campus-blue dark:text-blue-400">Systems & Networks</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• System Administrator</li>
                        <li>• Network Engineer</li>
                        <li>• DevOps Engineer</li>
                        <li>• Cloud Architect</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-3 text-campus-blue dark:text-blue-400">Data Science</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• Data Scientist</li>
                        <li>• Machine Learning Engineer</li>
                        <li>• Business Intelligence Analyst</li>
                        <li>• Big Data Engineer</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-3 text-campus-blue dark:text-blue-400">Security</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• Security Analyst</li>
                        <li>• Penetration Tester</li>
                        <li>• Security Consultant</li>
                        <li>• Security Engineer</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-3 text-campus-blue dark:text-blue-400">Management</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• IT Project Manager</li>
                        <li>• Product Manager</li>
                        <li>• Technical Team Lead</li>
                        <li>• CTO (Career Progression)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                      <h3 className="text-lg font-bold mb-3 text-campus-blue dark:text-blue-400">Research & Academia</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• Research Assistant</li>
                        <li>• PhD Candidate</li>
                        <li>• Teaching Assistant</li>
                        <li>• Computer Science Lecturer</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Higher Studies</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    BSc CSIT graduates can pursue various advanced degrees to specialize further:
                  </p>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                      <span>Master of Science in Computer Science (MSc CS)</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                      <span>Master of Science in Information Technology (MSc IT)</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                      <span>Master of Science in Artificial Intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                      <span>Master of Science in Data Science</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                      <span>Master of Science in Cybersecurity</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp size={18} className="transform rotate-45 mt-1 mr-2 text-campus-blue" />
                      <span>PhD in Computer Science or related fields</span>
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

export default CsitCoursePage;
