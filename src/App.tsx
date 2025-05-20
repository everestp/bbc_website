
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";

// Pages
import Index from "./pages/Index";
import CsitCoursePage from "./pages/CsitCoursePage";
import BcaCoursePage from "./pages/BcaCoursePage";
import MessagesPage from "./pages/MessagesPage";
import AchievementsPage from "./pages/AchievementsPage";
import NoticesPage from "./pages/NoticesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

const App = () => {
  // Create a new QueryClient instance inside the component
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/courses/bsc-csit" element={<CsitCoursePage />} />
              <Route path="/courses/bca" element={<BcaCoursePage />} />
             
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/notices" element={<NoticesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admission" element={<AdmissionPage />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
