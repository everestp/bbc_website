
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FacilityCard from "@/components/FacilityCard";
import { Book, Computer, Monitor, Grid3X3, Utensils, Mic, BedDouble, CircleParking } from "lucide-react";

const FacilitiesPage = () => {
  const facilities = [
    {
      icon: Book,
      title: "Library",
      description: "Our modern library offers an extensive collection of academic resources and a conducive environment for study and research.",
      details: [
        "Capacity for 30+ students with dedicated reading zones",
        "Over 2500 books covering all academic disciplines",
        "PeaceFull Reading Environment"
        
      ],
      imageSrc: "/libary.jpg"
    },
    {
      icon: Computer,
      title: "Computer Labs",
      description: "State-of-the-art computer laboratories equipped with the latest hardware and software to support technical education.",
      details: [
        "2 specialized computer labs with 40 workstations each",
        "High-speed internet and latest computing systems",
        "Industry-standard software including development environments",
        "Dedicated labs for programming, networking, and multimedia",
        "Technical support staff available during all operating hours"
      ],
      imageSrc: "/computer.jpg"
    },
    {
      icon: Monitor,
      title: "Classrooms",
      description: "Modern, well-equipped classrooms designed to enhance the learning experience with the latest educational technology.",
      details: [
        "25 multimedia-enabled classrooms with projector",
        "Comfortable seating with capacity ranging from 30-40 students",
        "Audio-visual equipment for enhanced teaching",
        "Climate-controlled environment for year-round comfort",
        "AC Classroom"
      ],
      imageSrc: "/classroom.jpg"
    },
{
      icon: CircleParking,
      title: "Parking",
      description: "Spacious parking facilities for students and staff with security surveillance.",
      details: [
        "Designated parking areas for two and four-wheelers",
        "24/7 security monitoring",
        "Covered parking options available",
        "Special provisions for differently-abled",
        "Well-lit and properly maintained"
      ],
      imageSrc: "/parking.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Campus Facilities</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our campus is equipped with state-of-the-art facilities to ensure a conducive environment for learning, growth, and overall development of our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <FacilityCard 
                key={index}
                icon={facility.icon}
                title={facility.title}
                description={facility.description}
                details={facility.details}
                imageSrc={facility.imageSrc}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FacilitiesPage;
