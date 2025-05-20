
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";

type Notice = {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  important?: boolean;
};

const NoticesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const notices: Notice[] = [
    {
      id: "1",
      title: "Admissions Open for Fall 2023",
      date: "May 15, 2023",
      category: "Admission",
      content: "Applications are now being accepted for BSc CSIT and BCA programs for the Fall 2023 semester. Last date for submission is June 30, 2023. For more details, contact the admission office or visit our campus.",
      important: true,
    },
    {
      id: "2",
      title: "Annual Sports Tournament Registration",
      date: "May 12, 2023",
      category: "Events",
      content: "Registration for the annual sports tournament is now open. Interested students can register for various sports including basketball, football, table tennis, and chess. Last date for registration is May 25, 2023.",
    },
    {
      id: "3",
      title: "New Computer Lab Inauguration",
      date: "May 10, 2023",
      category: "Infrastructure",
      content: "The new computer lab with 50 high-end computers and advanced software will be inaugurated on May 20, 2023. All students and faculty members are invited to attend the inauguration ceremony at 10 AM in the main building.",
    },
    {
      id: "4",
      title: "Faculty Development Program",
      date: "May 8, 2023",
      category: "Faculty",
      content: "A three-day faculty development program on 'Advanced Teaching Methods in IT Education' will be held from May 15-17, 2023. All faculty members are requested to participate.",
    },
    {
      id: "5",
      title: "Scholarship Applications",
      date: "May 5, 2023",
      category: "Scholarship",
      content: "Applications are now open for merit-based scholarships for the upcoming academic year. Eligible students can submit their applications by May 30, 2023. For criteria and application form, visit the scholarship section on our website.",
      important: true,
    },
    {
      id: "6",
      title: "Guest Lecture on Artificial Intelligence",
      date: "May 3, 2023",
      category: "Academic",
      content: "A guest lecture on 'The Future of Artificial Intelligence' by Dr. Richard Brown from MIT will be held on May 12, 2023, at 2 PM in the college auditorium. All students are encouraged to attend.",
    },
    {
      id: "7",
      title: "Summer Internship Opportunities",
      date: "April 28, 2023",
      category: "Career",
      content: "Information about summer internship opportunities at various companies is now available at the career development center. Interested students can visit during office hours for more details.",
      important: true,
    },
    {
      id: "8",
      title: "Project Exhibition",
      date: "April 25, 2023",
      category: "Events",
      content: "The annual project exhibition for final year students will be held on May 25-26, 2023. Students are requested to submit their project abstracts by May 10, 2023.",
    },
    {
      id: "9",
      title: "Library Timing Change",
      date: "April 20, 2023",
      category: "Administration",
      content: "The library will remain open until 9 PM on weekdays starting May 1, 2023, to facilitate students during exam preparation.",
    },
  ];

  // Filter notices based on search term
  const filteredNotices = notices.filter(notice => 
    notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notice.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const importantNotices = filteredNotices.filter(notice => notice.important);
  const academicNotices = filteredNotices.filter(notice => notice.category === "Academic");
  const eventsNotices = filteredNotices.filter(notice => notice.category === "Events");
  const admissionNotices = filteredNotices.filter(notice => notice.category === "Admission" || notice.category === "Scholarship");
  const allNotices = filteredNotices;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 pt-24 pb-10 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Notices & Announcements</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Stay updated with the latest announcements, events, and information from our campus.
          </p>
        </div>
      </section>
      
      {/* Notices Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <Input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md mx-auto"
              />
            </div>
            
            {/* Notices Tabs */}
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="important">Important</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="admission">Admission</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6">
                {allNotices.length > 0 ? (
                  allNotices.map((notice) => (
                    <NoticeCard key={notice.id} notice={notice} />
                  ))
                ) : (
                  <NoNoticesFound />
                )}
              </TabsContent>
              
              <TabsContent value="important" className="space-y-6">
                {importantNotices.length > 0 ? (
                  importantNotices.map((notice) => (
                    <NoticeCard key={notice.id} notice={notice} />
                  ))
                ) : (
                  <NoNoticesFound />
                )}
              </TabsContent>
              
              <TabsContent value="academic" className="space-y-6">
                {academicNotices.length > 0 ? (
                  academicNotices.map((notice) => (
                    <NoticeCard key={notice.id} notice={notice} />
                  ))
                ) : (
                  <NoNoticesFound />
                )}
              </TabsContent>
              
              <TabsContent value="events" className="space-y-6">
                {eventsNotices.length > 0 ? (
                  eventsNotices.map((notice) => (
                    <NoticeCard key={notice.id} notice={notice} />
                  ))
                ) : (
                  <NoNoticesFound />
                )}
              </TabsContent>
              
              <TabsContent value="admission" className="space-y-6">
                {admissionNotices.length > 0 ? (
                  admissionNotices.map((notice) => (
                    <NoticeCard key={notice.id} notice={notice} />
                  ))
                ) : (
                  <NoNoticesFound />
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const NoticeCard = ({ notice }: { notice: Notice }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border-l-4 ${
      notice.important ? "border-red-500" : "border-campus-blue dark:border-blue-500"
    }`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className={`text-xl font-bold ${
            notice.important ? "text-red-600 dark:text-red-400" : "text-campus-blue dark:text-blue-400"
          }`}>
            {notice.title}
            {notice.important && (
              <span className="ml-2 inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded dark:bg-red-900 dark:text-red-200">
                Important
              </span>
            )}
          </h3>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar size={14} className="mr-1" />
          <span>{notice.date}</span>
          <span className="mx-2">•</span>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
            {notice.category}
          </span>
        </div>
        
        <div className="text-gray-700 dark:text-gray-300">
          {notice.content}
        </div>
      </div>
    </div>
  );
};

const NoNoticesFound = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
      <p className="text-gray-500 dark:text-gray-400">No notices found matching your search criteria.</p>
    </div>
  );
};

export default NoticesPage;
