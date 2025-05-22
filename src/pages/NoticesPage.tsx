import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { NoticeCard } from "@/components/NoticeCard";
import { useData } from "@/context/DataContext";

interface Notice {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  important?: boolean;
}

const NoticesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { noticeData, isLoading } = useData();

  // Handle loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 pt-24 pb-10 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-white">Notices & Announcements</h1>
            <p className="text-xl text-gray-100 max-w-3xl">
              Stay updated with the latest announcements, events, and information from our campus.
            </p>
          </div>
        </section>
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <p>Loading notices...</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Filter notices based on search term
  const filteredNotices = noticeData && Array.isArray(noticeData)
    ? noticeData.filter(notice => 
        notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const importantNotices = filteredNotices.filter(notice => notice.important);
  const academicNotices = filteredNotices.filter(notice => notice.category === "Academic");
  const eventsNotices = filteredNotices.filter(notice => notice.category === "Events");
  const admissionNotices = filteredNotices.filter(notice => notice.category === "Admission" || notice.category === "Scholarship");
  const allNotices = filteredNotices;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 pt-24 pb-10 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Notices & Announcements</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Stay updated with the latest announcements, events, and information from our campus.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md mx-auto"
              />
            </div>
            
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

const NoNoticesFound = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
      <p className="text-gray-500 dark:text-gray-400">No notices found matching your search criteria.</p>
    </div>
  );
};

export default NoticesPage;