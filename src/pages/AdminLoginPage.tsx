
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { LockKeyhole, LogIn, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import authService from "@/appwrite/auth";
import { toast as toast2 } from 'react-toastify';
import { useData } from "@/context/DataContext";


const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
const {user,setUser}= useData()
  // Check if already logged in
 



  // Login function with session persistence
const loginUser = async (data: { email: string; password: string }) => {
  try {
    const session = await authService.login(data);
    if (session) {
      const userData = await authService.getCurrentUser();
      if (userData) {
        // Store userData in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
        setUser(userData);
        toast2.success(`Welcome ${userData.name}`);
        navigate("/admin/dashboard");
      }
      else{
        setUser(null)
      }
    }
  } catch (error) {
    console.error("Login error:", error);
    toast({ description: "Login failed. Please try again.", variant: "destructive" });
  }
};

// Function to restore session on app load
// const restoreSession = async () => {
//   try {
//     const userData = await authService.getCurrentUser(); // account.get()
//     setUser(userData);
//     localStorage.setItem('userData', JSON.stringify(userData));
//     return userData;
//   } catch (error) {
//     console.log("No valid session:", error);
//     setUser(null);
//     localStorage.removeItem('userData');
//     return null;
//   }
// };


// // Example usage in your app's initialization (e.g., in a useEffect or App component)
// useEffect(() => {
//   const user = restoreSession();
//   if (user) {
//     navigate("/admin/dashboard");
//   }
// }, []);
  const handleLogin =  async (e: React.FormEvent) => {
    e.preventDefault();

const data = {
  email:username,
  password:password
}
await loginUser(data)
    setIsLoading(false);
    
  
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <div className="h-12 w-12 rounded-full bg-campus-blue flex items-center justify-center">
              <LockKeyhole className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>
            Enter your credentials to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            
            
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                <span className="flex items-center">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </span>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AdminLoginPage;
