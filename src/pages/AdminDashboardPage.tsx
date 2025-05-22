
import React, { useEffect, useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { LogOut, Image, Edit } from "lucide-react";
import AdminGalleryManager from "@/components/admin/AdminGalleryManager";
import AdminNoticeManager from "@/components/admin/AdminNoticeManager";
import { useData } from "@/context/DataContext";
import authService from "@/appwrite/auth";
import { Session } from "inspector/promises";

const AdminDashboardPage = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("notices");
  const {user,setUser ,noticeData, galleryData} = useData()
  const navigate = useNavigate()
  // Check if logged in


   useEffect(() => {
    if (!user) {
      console.log("Ths is the data  inside user effect of admin dashboard",user)
      navigate("/");
    }
  }, [navigate]);



const handleLogout = async () => {
  await authService.logout(); // Optional server-side session cleanup

  // Clear user context/state
  setUser(null);
navigate("/admin/login")
  toast({
    title: "Logged out",
    description: "You have been successfully logged out",
  });
};



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Admin Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
                     <Link to="/" className="flex items-center space-x-2">
                          <div className="h-10 w-10 rounded-full bg-campus-blue flex items-center justify-center">
                            <img src="/logo.jpg" alt="College Logo" className="h-10" />
                          </div>
                          <span className="text-2xl font-bold text-campus-blue dark:text-blue-400">
                            BBC
                          </span>
                        </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm">
                  Visit Site
                </Button>
              </Link>
              <Link to="/admin/login" onClick={handleLogout}>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Notices</CardTitle>
              <CardDescription>Manage campus notices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-campus-blue">{noticeData.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Gallery Items</CardTitle>
              <CardDescription>Manage media content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-campus-blue">{galleryData.length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="notices" className="flex items-center">
              <Edit className="mr-2 h-4 w-4" />
              Manage Notices
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center">
              <Image className="mr-2 h-4 w-4" />
              Manage Gallery
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="notices">
            <AdminNoticeManager />
          </TabsContent>
          
          <TabsContent value="gallery">
            <AdminGalleryManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
