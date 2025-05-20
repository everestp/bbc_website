import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import WelcomePopup from "@/components/WelcomePopup";
import FeaturedCourses from "@/components/FeaturedCourses";
import NoticeBoard from "@/components/NoticeBoard";
import StudentTestimonials from "@/components/StudentTestimonials";
import CampusStats from "@/components/CampusStats";
import FacultyMembers from "@/components/FacultyMembers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  // Sample notices data
  const notices = [
    {
      id: "1",
      title: "Admissions Open for Fall 2023",
      date: "May 15, 2023",
      category: "Admission",
      link: "/notices/1",
    },
    {
      id: "2",
      title: "Annual Sports Tournament Registration",
      date: "May 12, 2023",
      category: "Events",
      link: "/notices/2",
    },
    {
      id: "3",
      title: "New Computer Lab Inauguration",
      date: "May 10, 2023",
      category: "Infrastructure",
      link: "/notices/3",
    },
    {
      id: "4",
      title: "Faculty Development Program",
      date: "May 8, 2023",
      category: "Faculty",
      link: "/notices/4",
    },
  ];

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      course: "BSc CSIT",
      year: "Class of 2022",
      quote: "My experience at Campus has been transformative. The faculty support and practical approach to learning has prepared me well for my career in software development.",
    },
    {
      id: 2,
      name: "Michael Chen",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      course: "BCA",
      year: "Class of 2023",
      quote: "The project-based learning approach at Campus gave me hands-on experience that employers value. I secured a great job even before graduation.",
    },
    {
      id: 3,
      name: "Priya Sharma",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      course: "BSc CSIT",
      year: "Class of 2021",
      quote: "The supportive community and networking opportunities at Campus helped me build connections that continue to benefit my professional growth.",
    },
  ];

  // Sample faculty members data
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      position: "Professor & Head",
      department: "Computer Science",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      email: "rajesh.sharma@campus.edu",
      phone: "+977-9801234567",
      education: "Ph.D. in Computer Science, MIT",
      bio: "Dr. Sharma specializes in artificial intelligence and machine learning with over 15 years of teaching experience and industry collaborations."
    },
    {
      id: 2,
      name: "Prof. Sunita Adhikari",
      position: "Associate Professor",
      department: "Computer Science",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      email: "sunita.adhikari@campus.edu",
      phone: "+977-9802345678",
      education: "Ph.D. in Information Systems, Stanford University",
      bio: "Prof. Adhikari is an expert in database systems and data mining with several published research papers in international journals."
    },
    {
      id: 3,
      name: "Dr. Amit Poudel",
      position: "Assistant Professor",
      department: "Computer Science",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      email: "amit.poudel@campus.edu",
      phone: "+977-9803456789",
      education: "Ph.D. in Computer Networks, Carnegie Mellon University",
      bio: "Dr. Poudel focuses on network security and blockchain technology, bringing industry experience from his time at leading tech companies."
    },
    {
      id: 4,
      name: "Dr. Nisha Thapa",
      position: "Assistant Professor",
      department: "Mathematics",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      email: "nisha.thapa@campus.edu",
      phone: "+977-9804567890",
      education: "Ph.D. in Applied Mathematics, Cambridge University",
      bio: "Dr. Thapa specializes in discrete mathematics and its applications in computer science, with a focus on algorithm optimization."
    },
    {
      id: 5,
      name: "Prof. Bibek Shrestha",
      position: "Associate Professor",
      department: "Mathematics",
      photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      email: "bibek.shrestha@campus.edu",
      phone: "+977-9805678901",
      education: "Ph.D. in Statistics, Oxford University",
      bio: "Prof. Shrestha has contributed significantly to statistical methods in data analysis and has authored multiple textbooks on the subject."
    },
    {
      id: 6,
      name: "Dr. Kiran Rai",
      position: "Professor",
      department: "Information Technology",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      email: "kiran.rai@campus.edu",
      phone: "+977-9806789012",
      education: "Ph.D. in IT Management, Harvard University",
      bio: "Dr. Rai specializes in IT project management and digital transformation strategies, with extensive consulting experience for major corporations."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Announcement Banner */}
      <AnnouncementBanner message="Admissions open for BSc CSIT and BCA programs for the upcoming academic year. Apply before June 30th." />
      
      {/* Welcome Popup */}
      <WelcomePopup />
      
      {/* Hero Section */}
      <HeroSection />
      <ImageCarousel/>
      <AboutSection/>
      {/* Main Content */}
      <main>
        {/* Featured Courses Section */}
        <FeaturedCourses />
        
        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <CampusStats />
          </div>
        </section>
        
        {/* Faculty Members Section */}
        <FacultyMembers members={facultyMembers} className="bg-gray-50 dark:bg-gray-900" />
        
        {/* Notice Board Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Latest Campus Updates</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                  Stay informed with the latest news, events, and announcements from our campus. We regularly update our notice board with important information.
                </p>
                <div className="bg-campus-blue text-white p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-2">Upcoming Orientation</h3>
                  <p>
                    New student orientation for the upcoming batch will be held on June 15th, 2023. All admitted students are required to attend.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-campus-blue dark:text-blue-400">
                      Industry Workshops
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Regular workshops by industry experts to keep you updated with the latest technologies and trends.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2 text-campus-blue dark:text-blue-400">
                      Placement Support
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Dedicated placement cell to help students find internships and job opportunities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <NoticeBoard notices={notices} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <StudentTestimonials testimonials={testimonials} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
