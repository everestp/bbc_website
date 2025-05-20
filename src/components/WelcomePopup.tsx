
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface WelcomePopupProps {
  title?: string;
  message?: string;
}

const WelcomePopup = ({ 
  title = "Welcome to Campus", 
  message = "Admissions for the next academic session are now open. Apply before the deadline to secure your seat in our BSc CSIT and BCA programs." 
}: WelcomePopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenWelcomePopup");
    
    if (!hasSeenPopup) {
      // Wait a moment before showing the popup
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenWelcomePopup", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-campus-blue">{title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-gray-700 dark:text-gray-300">{message}</p>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleClose} className="bg-campus-blue hover:bg-blue-700">
            Got it
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
