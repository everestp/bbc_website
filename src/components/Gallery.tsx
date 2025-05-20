
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryHorizontal, Play } from "lucide-react";

type GalleryItem = {
  id: number;
  title: string;
  type: "image" | "video";
  thumbnail: string;
  source: string;
  category: string;
};

interface GalleryProps {
  items: GalleryItem[];
  className?: string;
}

const Gallery = ({ items, className = "" }: GalleryProps) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(items.map((item) => item.category)))];

  // Filter items by category
  const filteredItems = activeCategory === "all"
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <>
      <div className={`${className} py-16`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Campus Gallery</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our vibrant campus life through photos and videos from various events, workshops, and activities.
            </p>
          </div>

          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="flex justify-center mb-8 flex-wrap gap-2">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="px-4 py-2">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative group overflow-hidden rounded-xl cursor-pointer h-60 bg-gray-200 dark:bg-gray-700 shadow-md hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedItem(item)}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-20">
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center transition-transform group-hover:scale-110">
                          <Play className="h-8 w-8 text-campus-blue ml-1" />
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <h3 className="text-white text-lg font-medium">{item.title}</h3>
                        <p className="text-gray-300 text-sm mt-1 capitalize">{item.category}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredItems.length === 0 && (
                  <div className="col-span-full flex flex-col items-center py-12 text-gray-500 dark:text-gray-400">
                    <GalleryHorizontal size={48} className="mb-4 opacity-50" />
                    <p className="text-lg">No items found in this category</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-1 bg-black rounded-xl" aria-describedby="gallery-item-description">
          {selectedItem?.type === 'image' ? (
            <img
              src={selectedItem.source}
              alt={selectedItem.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          ) : (
            <video
              src={selectedItem?.source}
              controls
              className="w-full h-auto max-h-[80vh]"
            >
              Your browser does not support the video tag.
            </video>
          )}
          <div className="p-3 text-white">
            <h3 className="text-xl font-medium">{selectedItem?.title}</h3>
            <p className="text-gray-300 text-sm mt-1 capitalize">{selectedItem?.category}</p>
          </div>
          <p id="gallery-item-description" className="sr-only">
            {selectedItem?.title}
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
