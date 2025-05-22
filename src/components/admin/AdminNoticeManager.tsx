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
import storageService from "@/appwrite/config";
import { useData } from "@/context/DataContext";

// Updated Notice type
type Notice = {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  important?: boolean;
  imageId?: string;
  imageUrl?: string;
};

// Sample notices data with content and optional image fields
const initialNotices: Notice[] = [
  {
    id: "1",
    title: "Admissions Open for Fall 2023",
    date: "May 15, 2023",
    category: "Admission",
    content: "Applications are now being accepted for BSc CSIT and BCA programs for the Fall 2023 semester. Last date for submission is June 30, 2023. For more details, contact the admission office or visit our campus.",
    important: true,
    imageId: "",
    imageUrl: "",
  },
  {
    id: "2",
    title: "Annual Sports Tournament Registration",
    date: "May 12, 2023",
    category: "Events",
    content: "Registration for the annual sports tournament is now open. Interested students can register for various sports including basketball, football, table tennis, and chess. Last date for registration is May 25, 2023.",
    important: false,
    imageId: "",
    imageUrl: "",
  },
  {
    id: "3",
    title: "New Computer Lab Inauguration",
    date: "May 10, 2023",
    category: "Infrastructure",
    content: "The new computer lab with 50 high-end computers and advanced software will be inaugurated on May 20, 2023. All students and faculty members are invited to attend the inauguration ceremony at 10 AM in the main building.",
    important: false,
    imageId: "",
    imageUrl: "",
  },
];

const AdminNoticeManager = () => {
  const [notices, setNotices] = useState<Notice[]>(initialNotices);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState("Academic");
  const [content, setContent] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const { toast } = useToast();
const {noticeData} = useData()
  // Get unique categories
  const categories = ["all", ...Array.from(new Set(notices.map((notice) => notice.category)))];

  // Filtered notices
  const filteredNotices = filterCategory === "all"
    ? noticeData
    : noticeData.filter((notice) => notice.category === filterCategory);

  const formatDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAddNotice = async () => {
    try {
      let imageUrl = "";
      let imageId = "";
      if (selectedFile) {
        const file = await storageService.uploadFile(selectedFile);
        imageId = file.$id;
        imageUrl = storageService.getFilePreview(imageId);
        console.log("Does file metadata is coining or  not in thE handlenotice class",imageId,imageUrl,file)
      }
      const currentDate = formatDate();
      const noticeData = {
        id: Math.random().toString(36).substring(2, 9),
        title,
        category,
        content,
        important: isImportant,
        imageUrl ,
        imageId,
        date: currentDate,
      };

      await storageService.postNotice(noticeData);

      setNotices([...notices, noticeData]);
      setIsAddDialogOpen(false);
      setTitle("");
      setCategory("Academic");
      setContent("");
      setIsImportant(false);
      setSelectedFile(null);

      toast({
        title: "Success",
        description: "New notice has been added",
      });
    } catch (error) {
      console.error("Error adding notice:", error);
      toast({
        title: "Error",
        description: "Failed to add notice",
        variant: "destructive",
      });
    }
  };



  const handleDeleteNotice = async (noticeId: string, imageId?: string) => {
    try {
      await storageService.deleteNotice(noticeId);
      if (imageId) {
        await storageService.deleteFile(imageId);
      }
      setNotices(notices.filter((notice) => notice.id !== noticeId));
      toast({
        title: "Success",
        description: "Notice has been deleted",
      });
    } catch (error) {
      console.error("Error deleting notice:", error);
      toast({
        title: "Error",
        description: "Failed to delete notice",
        variant: "destructive",
      });
    }
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
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={() => setIsAddDialogOpen(true)}>Add New Notice</Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredNotices.map((notice) => (
          <Card
            key={notice.id}
            className={`border-l-4 ${notice.important ? "border-red-500" : "border-blue-500"}`}
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3
                    className={`text-lg font-bold ${
                      notice.important ? "text-red-600 dark:text-red-400" : "text-blue-600 dark:text-blue-400"
                    }`}
                  >
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
                  <p className="text-gray-700 dark:text-gray-300 mt-3">{notice.content}</p>
                  {notice.imageUrl && (
                    <img src={notice.imageUrl} alt="Notice" className="mt-3 max-w-xs" />
                  )}
                </div>
              </div>
              <div className="flex mt-4 space-x-4">
            
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDeleteNotice(notice.$id, notice.imageId)}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter notice title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter notice content"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
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
            <div className="flex items-center gap-4">
              <Input id="file" type="file" onChange={handleImageChange} className="flex-1" />
              {selectedFile && (
                <div className="text-sm text-muted-foreground">
                  {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="important"
                checked={isImportant}
                onCheckedChange={setIsImportant}
              />
              <Label htmlFor="important">Mark as Important</Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleAddNotice} disabled={!title || !content || !selectedFile}>
              Add Notice
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default AdminNoticeManager;