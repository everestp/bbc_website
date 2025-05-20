
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MessageCard from "@/components/MessageCard";

const MessagesPage = () => {
  const messages = [
    {
      id: 1,
      name: "Mr. Kishor Kumar Pandey",
      title: "Message from the Chairperson",
      message: " Welcome to Banke Bageshwori Campus, a campus where you can imagine the possibilitiesand get them transformed into reality.Beyond providing sound education, we wish to provide our students a holistic learning experience for life. Our aim is to teach students to LEARN, not just STUDY. Hence, we strive to travel beyond the boundaries of mere books. We have realized that the future is abstract and unknown but the youth in our hands are real and can be moulded.Dear students, “You are the nation-builders. You are the driving force of technology. You are the agents of change.” It is our fervent hope that the years you spend in BBC would enable you to equip with leadership and managerial skills. The knowledge that you will gain, the fine qualities that you will imbibe and the technical skills that you will learn to apply, will be your major contribution to your parents, to society, to the nation and to the world as a whole. We invest our trust on you. You are our safe source and we bank all our efforts on you. We create not the future instead we craft you for the future. There are strong challenges to great efforts but, always remember, great effort bears the sweet fruit of success. We want you to taste the fruit of success once and for the rest of your life, you will never rest and regret.“You don’t have to be great to start, but you have to start to be great.”We had tremendous Technology achievements in last century. Unfortunately, the development of world through these achievements was without taking into consideration for the social, environmental and economic impacts.I would like to extend best wishes to all of you.",
      photo: "/chairperson.jpg"
    },
    {
      id: 2,
      name: "Mr. Birendra Singh Saud",
      title: "Message from the Campus Chief",
      message: "Welcome to Banke Bageshwori Campus, As the principal of the campus, I am proud to introduce you to the outstanding academic program and activities that truly make us an IT Campus at Nepalgunj city.The campus is committed to build a vital foundation for studying computing and IT. We connect students to the innovative world of IT and computing through modern classroom and practical lab experiences and through innovative educational approaches. Our program is supported by experienced and innovative faculty members, staff and management team who bring their knowledge and expertise. They mentor students in independent projects, guide on their study and help explore subject in depth while exposing students to the challenging world outside. The campus offers educational and professional opportunities for students in which they develop in the fields of their interest and prepare to face the next generation of IT and Computing. If you want a career that gives you the opportunity to be at the forefront of technology with employment opportunities in just about every industry, B.Sc. CSIT & BCA at BBC is the best place to start. Thus, I take this opportunity to invite you to visit the campus, meet our staff, learn about us and be a member of the campus. I feel privileged to state that many of our students have secured highest ranks in the final examination conducted by Institute of Science and Technology and with more than 80 % graduation rate, all our graduates are employed by some of the major Software and IT Companies in locally and globally. I strongly believe that new lot of students will continue the trait.I feel happy and delighted to welcome our incoming students and my best wishes for their brilliant academic career at Banke Bageshwori Campus.",
      photo: "/campus-chief.jpg"
    },
    {
      id: 3,
      name: "Mr. Ashok Chand",
      title: "Message from the Program Coordinator",
      message: "Dear Parents/StudentsWelcome to Banke Bageshwori Campus. Our goal at this Campus is to provide an outstanding education for all students .Computer Science is a extremely interesting subject, and one that is now necessary in our lives.We invest a significant amount of our resources on faculty development through various training, development programs, research and further education. We have always given a top priority for a safe and positive learning environment with enthusiasm to support each student.We realize your dream of becoming a successful professional in your career and an influential person in the society, and we lay our best efforts to help you become one. We are sure that you will appreciate the dynamic and caring culture and academic benchmarks at BBC. We warmly welcome you to visit BBC and take time to interact with us.We invite all educational enthusiasts to explore what we have to offer you for the best.",
      photo: "Ashok-Chand.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 pt-24 pb-10 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Messages from Leadership</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Words of wisdom and guidance from our institution's leadership team to inspire and motivate our campus community.
          </p>
        </div>
      </section>
      
      {/* Messages Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {messages.map((message) => (
              <MessageCard
                key={message.id}
                name={message.name}
                title={message.title}
                message={message.message}
                photo={message.photo}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-16 bg-campus-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl italic mb-4">
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
            </p>
            <cite className="text-gray-200">— Malcolm X</cite>
          </blockquote>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MessagesPage;
 