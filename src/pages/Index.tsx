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
      id: 0,
      name: "Everest Paudel",
      photo: "/everest.jpeg",
      course: "BSc CSIT",
      year: "Class of 2021",
      quote: "Being a part of Banke Bageshwori Campus has been a transformative experience for me. The campus environment is not only academically enriching but also very supportive and inclusive. What I appreciate the most is the dedication of the faculty members who are always ready to guide and mentor students. The well-facilitated computer labs and access to modern learning tools have greatly enhanced my technical skills. Furthermore, the extracurricular opportunities have helped me build confidence and leadership abilities. I truly believe this campus is an ideal place for anyone aspiring to excel in the IT field.",
    },
    {
  id: 1,
  name: "Chetan Paudel",
  photo: "/chetan.jpg",
  course: "BSc CSIT",
  year: "Class of 2021",
  quote: "Studying at Banke Bageshwori Campus has been one of the best decisions of my academic journey. The campus provides a dynamic learning atmosphere that encourages both academic and personal growth. I’m especially grateful for the hands-on projects and practical sessions that have strengthened my understanding of core IT concepts. The instructors are approachable and always willing to help, which makes a huge difference. Also, the campus events and tech fests have made learning more fun and interactive. I feel more prepared and confident to take on challenges in the tech world.",
},

    {
      id: 2,
      name: "Dil Bahadur Roka",
      photo: "/diroka.jpg",
      course: "BSc CSIT",
      year: "Class of 2022",
      quote: "I am Proud to be BBCians because its attentiveness towards its student. What I like most about this Campus is its friendly environment, well qualified lecturers, well equipped computer lab, and many more. This campus has provided me an opulent opportunity to develop professionally as well academically. It provides a truly vibrant community in both academic and extra curricular activities, which prompts me to move beyond my limitation and strive for the best. Teaching strategies makes comfortable which proves that learning environment is pretty good. So if any locking forward for carving their future, BBC is the best place to be"
    },
    {
      id: 3,
      name: "Bishwas  Bagle",
      photo: "/Biswash.jpg",
      course: "BCA",
      year: "Class of 2023",
      quote: "After thinking of making a career in the IT field, I was in the search of a college that would fit my expectations. Gladly, Banke Bageshwori Campus fulfilled my expectations.  Good infrastructure and a dedicated team of faculty members are the key factors of this campus. A well-managed library and computer lab have helped me a lot in my study and progress. The continuous guidance from teachers always motivates me, so if anyone asks me, I would proudly suggest that college without a doubt.",
    },
    {
      id: 4,
      name: "Nirmesh chaudhary",
      photo: "/Nirpesh.jpg",
      course: "BSc CSIT",
      year: "Class of 2021",
      quote: "I think the best think I did for my future to study IT is that I choose this campus over many others.What I like the most about this campus is its friendly environment, well qualified teachers, well equipped computer lab, library and so on.Throughout my campus life, This Campus has provided me ample opportunity to develop professionally and academically which has been incredibly rewarding experience for me.Thus, I would recommend anyone who is seeking for studying IT course can join this Campus.",
    }
    ,
    {
      id: 5,
      name: "Sagar Neupane",
      photo: "/Sagar.jpg",
      course: "BSc CSIT",
      year: "Class of 2021",
      quote: "It's a great pleasure for me to be the student of BBC Campus. When I got enrolled at BBC as a B.Sc.CSIT student, all the members of BBC were very helpful and supporting. I feel very lucky because I got chance to study B.Sc.CSIT at BBC Campus who has secure my future in the IT related sector. In BBC students can get all those opportunity whatever they need in their IT building career. It is obvious the result of outstanding management practice and excellent teachers so that we can be able to visualize the proper direction to meet successful career ahead. The library facility, staff members and faculty members are well at BBC Campus.",
    }
  
    
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
      <AnnouncementBanner message="Admissions open for BSc CSIT and BCA programs." />
      
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
        
        
      
        
        {/* Faculty Members Section */}
        <FacultyMembers members={facultyMembers} className="bg-gray-50 dark:bg-gray-900" />
         <StudentTestimonials testimonials={testimonials} />
     
       
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
