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
import { useData } from "@/context/DataContext";
import authService from "@/appwrite/auth";

const Index = () => {
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);
const { setSession, setUser } =useData();

  useEffect(() => {
    // Check for active session on app load
    const checkSession = async () => {
      try {
   
        const user = await authService.getCurrentUser(); // Fetch current user
        setUser(user); // Store user data in context
        setSession(true); // Update context to indicate active session
      } catch (error) {
        console.log('No active session:', error);
        setSession(false); // No session, user is logged out
        setUser(null);
      }
    };

    checkSession();
  }, [setSession, setUser]);
  
  // Sample notices data
 

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
        
        
      
        
       
         <StudentTestimonials testimonials={testimonials} />
     
       
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
