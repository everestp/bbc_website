
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const GalleryPage = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Computer Lab",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "campus",
    },

     {
      id: 1,
      title: "Computer Lab",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "campus",
    },

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
    {
      id: 3,
      title: "Programming Workshop",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "workshops",
    },
    {
      id: 4,
      title: "Cultural Event",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "events",
    },
    {
      id: 5,
      title: "Guest Lecture",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "events",
    },
    {
      id: 6,
      title: "Graduation Ceremony",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "events",
    },
    {
      id: 7,
      title: "Campus Tour - Main Building",
      type: "video" as const,
      thumbnail: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      category: "campus",
    },
    {
      id: 8,
      title: "Sports Tournament",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "sports",
    },
    {
      id: 9,
      title: "Research Presentation",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "academic",
    },
    {
      id: 10,
      title: "Library",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "campus",
    },
    {
      id: 11,
      title: "Tech Fest Highlights",
      type: "video" as const,
      thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      category: "events",
    },
    {
      id: 12,
      title: "Hackathon Competition",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "workshops",
    },
    {
      id: 13,
      title: "Student Club Activity",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "events",
    },
    {
      id: 14,
      title: "Campus Landscape",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "campus",
    },
    {
      id: 15,
      title: "Alumni Meet",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "events",
    },
     {
      id: 15,
      title: "Alumni Meet",
      type: "image" as const,
      thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      category: "events",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 pt-24 pb-10 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Campus Gallery</h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Explore our campus life, events, and activities through our photo and video gallery.
          </p>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse Our Collection</h2>
          <Gallery items={galleryItems} className="mb-12" />
        </div>
      </section>
      
      {/* Featured Video */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Video</h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full h-[500px]"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Campus Life Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Campus Life: Where Learning Meets Fun</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Take a virtual tour of our campus and get a glimpse of the vibrant student life, modern facilities, and engaging academic environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Submission */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Have Photos or Videos to Share?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            If you have captured memorable moments from campus events or activities, we'd love to feature them in our gallery.
          </p>
          <a 
            href="mailto:gallery@campus.edu" 
            className="inline-block bg-campus-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Submit Your Media
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
