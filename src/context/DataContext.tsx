import authService from "@/appwrite/auth";
import storageService from "@/appwrite/config";
import { createContext, useContext, useEffect, useState } from "react";

// Create Context
export const DataContext = createContext(null);

// Create Provider Component
export const DataContextProvider = ({ children }) => {
  const [noticeData ,setNoticeData] = useState([]);
  const [galleryData ,setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user ,setUser] = useState(null)
const [session ,setSession]= useState(false)
  const getNotice = async () => {
    try {
      const response = await storageService.getNotice();
      setNoticeData(response);
    } catch (error) {
      console.error("Error fetching Paper Data", error);
    }
  };

  const getGallery = async () => {
    try {
      const response = await storageService.getGallery();
      setGalleryData(response);
    } catch (error) {
      console.error("Error fetching Note Data", error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
    
      setUser(authService.getCurrentUser())

      await Promise.all([getNotice(),getGallery()]);
      setLoading(false);
    };
    fetchData();
  }, []);





  const contextValue = {
   noticeData,
   galleryData,
   setGalleryData,
   setNoticeData,
    user,
    setUser,
    loading,
    setLoading,
    session,
    setSession

  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

// Custom Hook
export const useData = () => useContext(DataContext);