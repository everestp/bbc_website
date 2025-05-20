
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudentAchievements from "@/components/StudentAchievements";

const AchievementsPage = () => {
  const achievements = [
    {
      id: 1,
      student: "Raj Patel",
      title: "National Coding Champion",
      details: "Won first place in the National Coding Competition 2023, competing against participants from over 50 colleges across the country.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      student: "Anita Sharma",
      title: "Research Publication",
      details: "Published a research paper on 'Machine Learning Applications in Healthcare' in the International Journal of Computer Science.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      student: "David Wilson",
      title: "App Development Award",
      details: "Developed an innovative mobile application for community healthcare that won the Best Innovation Award at the Regional Tech Expo.",
      year: "2022",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      student: "Meera Kapoor",
      title: "Hackathon Winner",
      details: "Led a team that won the 36-hour National Hackathon with a project on sustainable energy management using IoT.",
      year: "2022",
      image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      student: "John Mathew",
      title: "International Internship",
      details: "Selected for a prestigious internship program at Microsoft Research, working on cutting-edge AI projects.",
      year: "2022",
    },
    {
      id: 6,
      student: "Sophia Zhang",
      title: "Cybersecurity Excellence",
      details: "Recognized by the National Cybersecurity Alliance for identifying and helping fix critical vulnerabilities in a widely-used software.",
      year: "2023",
    },
    {
      id: 7,
      student: "BSc CSIT Final Year Team",
      title: "Project Excellence Award",
      details: "A team of final year BSc CSIT students won the Best Project Award for their innovative solution in healthcare management using blockchain.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      student: "Lisa Johnson",
      title: "Research Fellowship",
      details: "Received a prestigious research fellowship to work on advanced algorithms for natural language processing at a leading research institution.",
      year: "2022",
    },
    {
      id: 9,
      student: "Campus Programming Team",
      title: "ACM ICPC Regionals",
      details: "Our programming team qualified for the ACM ICPC Regional Finals, showcasing exceptional problem-solving and algorithmic skills.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const institutionalAchievements = [
    {
      year: "2023",
      title: "Top IT College Award",
      description: "Recognized as one of the top 10 IT colleges in the region by Education Excellence Survey.",
    },
    {
      year: "2022",
      title: "Research Excellence",
      description: "Received grants worth $500,000 for advanced research in artificial intelligence and machine learning.",
    },
    {
      year: "2022",
      title: "Industry Partnership",
      description: "Established strategic partnerships with 5 Fortune 500 companies for internship and placement opportunities.",
    },
    {
      year: "2021",
      title: "Infrastructure Excellence",
      description: "Inaugurated state-of-the-art computer labs with the latest hardware and software resources.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 pt-24 pb-10 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Student Achievements</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Celebrating the accomplishments and recognition earned by our talented students in various fields.
          </p>
        </div>
      </section>
      
      {/* Achievement Stats */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-campus-blue dark:text-blue-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Awards Won</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-campus-blue dark:text-blue-400 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-300">Research Papers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-campus-blue dark:text-blue-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300">Competitions Won</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-campus-blue dark:text-blue-400 mb-2">30+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Recognized</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Student Achievements */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Outstanding Student Achievements</h2>
          <StudentAchievements achievements={achievements} />
        </div>
      </section>
      
      {/* Institutional Achievements */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Institutional Achievements</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-4 border-campus-blue dark:border-blue-500 ml-6">
              {institutionalAchievements.map((achievement, index) => (
                <div key={index} className="mb-10 ml-8">
                  <div className="absolute w-6 h-6 bg-campus-blue rounded-full -left-9 border-4 border-white dark:border-gray-900"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <span className="inline-block bg-campus-blue text-white text-sm font-medium px-3 py-1 rounded-full mb-2">
                      {achievement.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-10 bg-campus-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Are you our next success story?</h3>
          <p className="mb-6">Join our BSc CSIT or BCA program and unlock your potential.</p>
          <a href="/admission" className="inline-block bg-white text-campus-blue hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300">
            Apply Now
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AchievementsPage;
