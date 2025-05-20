
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Trash, Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";

// Sample gallery data from GalleryPage
const initialGalleryItems = [
  {
    id: 1,
    title: "Computer Lab",
    type: "image" as const,
    thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    source: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    category: "campus",
  },
  {
    id: 2,
    title: "Group Project Discussion",
    type: "image" as const,
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    source: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    category: "academic",
  },
  // We're only showing a subset for the admin interface demo
  {
    id: 3,
    title: "Programming Workshop",
    type: "image" as const,
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    source: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    category: "workshops",
  },
  {
    id: 7,
    title: "Campus Tour - Main Building",
    type: "video" as const,
    thumbnail: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    source: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    category: "campus",
  },
];

type GalleryItem = {
  id: number;
  title: string;
  type: "image" | "video";
  thumbnail: string;
  source: string;
  category: string;
};

const AdminGalleryManager = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGalleryItems);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");
  const { toast } = useToast();

  // New item form state
  const [newItem, setNewItem] = useState<Omit<GalleryItem, "id">>({
    title: "",
    type: "image",
    thumbnail: "",
    source: "",
    category: "campus",
  });

  // Filtered items
  const filteredItems = filterCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filterCategory);

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

  const handleAddItem = () => {
    const id = Math.max(0, ...galleryItems.map(item => item.id)) + 1;
    setGalleryItems([...galleryItems, { ...newItem, id }]);
    setIsAddDialogOpen(false);
    setNewItem({
      title: "",
      type: "image",
      thumbnail: "",
      source: "",
      category: "campus",
    });
    toast({
      title: "Success",
      description: "New gallery item has been added",
    });
  };

  const handleEditItem = () => {
    if (!selectedItem) return;
    
    setGalleryItems(galleryItems.map(item => 
      item.id === selectedItem.id ? selectedItem : item
    ));
    setIsEditDialogOpen(false);
    toast({
      title: "Success",
      description: "Gallery item has been updated",
    });
  };

  const handleDeleteItem = (id: number) => {
    setGalleryItems(galleryItems.filter(item => item.id !== id));
    toast({
      title: "Success",
      description: "Gallery item has been deleted",
    });
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
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
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
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                    <svg className="h-6 w-6 text-campus-blue ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{item.category}</p>
                </div>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                  {item.type}
                </span>
              </div>
              <div className="flex justify-between mt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setSelectedItem(item);
                    setIsEditDialogOpen(true);
                  }}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => handleDeleteItem(item.id)}
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
                onChange={(e) => setNewItem({...newItem, title: e.target.value})} 
                placeholder="Enter item title" 
              />
            </div>
            
            <div className="space-y-2">
              <Label>Type</Label>
              <RadioGroup 
                value={newItem.type} 
                onValueChange={(value) => setNewItem({...newItem, type: value as "image" | "video"})}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="image" id="image" />
                  <Label htmlFor="image">Image</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="video" id="video" />
                  <Label htmlFor="video">Video</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail URL</Label>
              <Input 
                id="thumbnail" 
                value={newItem.thumbnail} 
                onChange={(e) => setNewItem({...newItem, thumbnail: e.target.value})} 
                placeholder="Enter thumbnail URL" 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="source">Source URL</Label>
              <Input 
                id="source" 
                value={newItem.source} 
                onChange={(e) => setNewItem({...newItem, source: e.target.value})} 
                placeholder={`Enter ${newItem.type === "image" ? "image" : "video"} URL`} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select 
                value={newItem.category} 
                onValueChange={(value) => setNewItem({...newItem, category: value})}
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
            <Button onClick={handleAddItem} disabled={!newItem.title || !newItem.thumbnail || !newItem.source}>
              Add Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Item Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Gallery Item</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input 
                  id="edit-title" 
                  value={selectedItem.title} 
                  onChange={(e) => setSelectedItem({...selectedItem, title: e.target.value})} 
                />
              </div>
              
              <div className="space-y-2">
                <Label>Type</Label>
                <RadioGroup 
                  value={selectedItem.type} 
                  onValueChange={(value) => setSelectedItem({...selectedItem, type: value as "image" | "video"})}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="image" id="edit-image" />
                    <Label htmlFor="edit-image">Image</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="video" id="edit-video" />
                    <Label htmlFor="edit-video">Video</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-thumbnail">Thumbnail URL</Label>
                <Input 
                  id="edit-thumbnail" 
                  value={selectedItem.thumbnail} 
                  onChange={(e) => setSelectedItem({...selectedItem, thumbnail: e.target.value})} 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-source">Source URL</Label>
                <Input 
                  id="edit-source" 
                  value={selectedItem.source} 
                  onChange={(e) => setSelectedItem({...selectedItem, source: e.target.value})} 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-category">Category</Label>
                <Select 
                  value={selectedItem.category} 
                  onValueChange={(value) => setSelectedItem({...selectedItem, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
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
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleEditItem}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminGalleryManager;
