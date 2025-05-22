import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Trash, Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import storageService from "@/appwrite/config";
import { useData } from "@/context/DataContext";

type GalleryItem = {
  id: string;
  title: string;
  category: string;
  imageId?: string;
  imageUrl?: string;

};

const AdminGalleryManager = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
const [loading ,setLoading]= useState<Boolean>(false)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");
  const { toast } = useToast();
const {galleryData}  = useData()
  const [newItem, setNewItem] = useState<GalleryItem>({
    id:"",
    title: "",
    category: "campus",
    imageId: "",
    imageUrl: "",
   
  });

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

  const filteredItems = filterCategory === "all"
    ? galleryData
    : galleryData.filter(item => item.category === filterCategory);


  const handleAddItem = async () => {
    try {
      let imageUrl = "";
      let imageId = "";
      
      if (selectedFile) {
        setLoading(true)
        const file = await storageService.uploadFile(selectedFile);
        imageId = file.$id;
        imageUrl = storageService.getFilePreview(imageId);
      }

      const newGalleryItem: GalleryItem = {
        id: Math.random().toString(36).substring(2, 9),
        title: newItem.title,
        category: newItem.category,
        imageUrl,
        imageId,
       
      };
await storageService.postImage(newGalleryItem);
      setGalleryItems([...galleryItems, galleryData]);
      setIsAddDialogOpen(false);
      setNewItem({
        id: "",
        title: "",
        category: "campus",
        imageId: "",
        imageUrl: "",
       
      });
      setSelectedFile(null);
setLoading(false)
      toast({
        title: "Success",
        description: "New gallery item has been added",
      });
    } catch (error) {
      console.error("Error adding gallery item:", error);
      toast({
        title: "Error",
        description: "Failed to add gallery item",
        variant: "destructive",
      });
      setLoading(false)
    }
  };

  const handleEditItem = () => {
    if (!selectedItem) return;

    setGalleryItems(galleryItems.map(item =>
      item.id === selectedItem.id ? selectedItem : item
    ));
    setIsEditDialogOpen(false);
    setSelectedItem(null);
    toast({
      title: "Success",
      description: "Gallery item has been updated",
    });
  };

 
 const handleDeleteItem = async (galleryId: string, imageId?: string) => {
    try {
      await storageService.deleteImage(galleryId);
      if (imageId) {
        await storageService.deleteFile(imageId);
      }
      setGalleryItems(galleryData.filter((item) => item.id !== galleryId));
      toast({
        title: "Success",
        description: "Image has been deleted",
      });
    } catch (error) {
      console.error("Error deleting Gallery:", error);
      toast({
        title: "Error",
        description: "Failed to delete Gallery Items",
        variant: "destructive",
      });
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Gallery Management</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              {galleryData.map(photo => (
                <SelectItem key={photo.category} value={photo.category}>
                  {photo.category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Upload className="mr-2 h-4 w-4" />
            Add New Item
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={item.imageUrl || "https://via.placeholder.com/300x200"}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{item.category}</p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
               
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDeleteItem(item.$id, item.imageId)}
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredItems.length === 0 && (
          <div className="col-span-full p-8 text-center border rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">No gallery items found in this category.</p>
          </div>
        )}
      </div>

      {/* Add New Item Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Gallery Item</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={newItem.title}
                onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                placeholder="Enter item title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Image</Label>
              <Input id="file" type="file" onChange={handleImageChange} />
              {selectedFile && (
                <div className="text-sm text-muted-foreground">
                  {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={newItem.category}
                onValueChange={(value) => setNewItem({ ...newItem, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="campus">Campus</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="events">Events</SelectItem>
                  <SelectItem value="workshops">Workshops</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleAddItem} disabled={!newItem.title || !selectedFile}>
            {loading? "Uploading":"Add Items"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Item Dialog */}
    
    </div>
  );
};

export default AdminGalleryManager;