
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Edit, Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";

// Sample notices data from NoticesPage
const initialNotices = [
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
    important: false,
  },
  {
    id: "3",
    title: "New Computer Lab Inauguration",
    date: "May 10, 2023",
    category: "Infrastructure",
    content: "The new computer lab with 50 high-end computers and advanced software will be inaugurated on May 20, 2023. All students and faculty members are invited to attend the inauguration ceremony at 10 AM in the main building.",
    important: false,
  },
];

type Notice = {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  important?: boolean;
};

const AdminNoticeManager = () => {
  const [notices, setNotices] = useState<Notice[]>(initialNotices);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");
  const { toast } = useToast();

  // New notice form state
  const [newNotice, setNewNotice] = useState<Omit<Notice, "id" | "date">>({
    title: "",
    category: "Academic",
    content: "",
    important: false,
  });

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(notices.map((notice) => notice.category)))];

  // Filtered notices
  const filteredNotices = filterCategory === "all" 
    ? notices 
    : notices.filter(notice => notice.category === filterCategory);

  const formatDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleAddNotice = () => {
    const id = Math.random().toString(36).substring(2, 9);
    const date = formatDate();
    
    setNotices([...notices, { ...newNotice, id, date }]);
    setIsAddDialogOpen(false);
    setNewNotice({
      title: "",
      category: "Academic",
      content: "",
      important: false,
    });
    toast({
      title: "Success",
      description: "New notice has been added",
    });
  };

  const handleEditNotice = () => {
    if (!selectedNotice) return;
    
    setNotices(notices.map(notice => 
      notice.id === selectedNotice.id ? selectedNotice : notice
    ));
    setIsEditDialogOpen(false);
    toast({
      title: "Success",
      description: "Notice has been updated",
    });
  };

  const handleDeleteNotice = (id: string) => {
    setNotices(notices.filter(notice => notice.id !== id));
    toast({
      title: "Success",
      description: "Notice has been deleted",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Notice Management</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button onClick={() => setIsAddDialogOpen(true)}>
            Add New Notice
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredNotices.map((notice) => (
          <Card key={notice.id} className={`border-l-4 ${
            notice.important ? "border-red-500" : "border-campus-blue"
          }`}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`text-lg font-bold ${
                    notice.important ? "text-red-600 dark:text-red-400" : "text-campus-blue dark:text-blue-400"
                  }`}>
                    {notice.title}
                    {notice.important && (
                      <span className="ml-2 inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded dark:bg-red-900 dark:text-red-200">
                        Important
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <Calendar size={14} className="mr-1" />
                    <span>{notice.date}</span>
                    <span className="mx-2">•</span>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                      {notice.category}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-3">
                    {notice.content}
                  </p>
                </div>
              </div>
              <div className="flex mt-4 space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setSelectedNotice(notice);
                    setIsEditDialogOpen(true);
                  }}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => handleDeleteNotice(notice.id)}
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredNotices.length === 0 && (
          <div className="p-8 text-center border rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">No notices found in this category.</p>
          </div>
        )}
      </div>

      {/* Add New Notice Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Notice</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                value={newNotice.title} 
                onChange={(e) => setNewNotice({...newNotice, title: e.target.value})} 
                placeholder="Enter notice title" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select 
                value={newNotice.category} 
                onValueChange={(value) => setNewNotice({...newNotice, category: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Academic">Academic</SelectItem>
                  <SelectItem value="Admission">Admission</SelectItem>
                  <SelectItem value="Events">Events</SelectItem>
                  <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                  <SelectItem value="Scholarship">Scholarship</SelectItem>
                  <SelectItem value="Career">Career</SelectItem>
                  <SelectItem value="Faculty">Faculty</SelectItem>
                  <SelectItem value="Administration">Administration</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea 
                id="content" 
                value={newNotice.content} 
                onChange={(e) => setNewNotice({...newNotice, content: e.target.value})} 
                placeholder="Enter notice content" 
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch 
                id="important" 
                checked={newNotice.important} 
                onCheckedChange={(checked) => setNewNotice({...newNotice, important: checked})} 
              />
              <Label htmlFor="important">Mark as Important</Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleAddNotice} disabled={!newNotice.title || !newNotice.content}>
              Add Notice
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Notice Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Notice</DialogTitle>
          </DialogHeader>
          {selectedNotice && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input 
                  id="edit-title" 
                  value={selectedNotice.title} 
                  onChange={(e) => setSelectedNotice({...selectedNotice, title: e.target.value})} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="edit-category">Category</Label>
                <Select 
                  value={selectedNotice.category} 
                  onValueChange={(value) => setSelectedNotice({...selectedNotice, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Academic">Academic</SelectItem>
                    <SelectItem value="Admission">Admission</SelectItem>
                    <SelectItem value="Events">Events</SelectItem>
                    <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                    <SelectItem value="Scholarship">Scholarship</SelectItem>
                    <SelectItem value="Career">Career</SelectItem>
                    <SelectItem value="Faculty">Faculty</SelectItem>
                    <SelectItem value="Administration">Administration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-content">Content</Label>
                <Textarea 
                  id="edit-content" 
                  value={selectedNotice.content} 
                  onChange={(e) => setSelectedNotice({...selectedNotice, content: e.target.value})} 
                  rows={4}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch 
                  id="edit-important" 
                  checked={selectedNotice.important} 
                  onCheckedChange={(checked) => setSelectedNotice({...selectedNotice, important: checked})} 
                />
                <Label htmlFor="edit-important">Mark as Important</Label>
              </div>
            </div>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleEditNotice}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminNoticeManager;
