import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { useData } from "@/context/DataContext";

const GalleryPage = () => {
  const { galleryData } = useData();

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
          {galleryData ? (
            <Gallery items={galleryData} className="mb-12" />
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-center">
              No gallery items available.
            </p>
          )}
        </div>
      </section>
      
      {/* Featured Video */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Video</h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
                title="Campus Life Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
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
            href="mailto:gallery@campus.edu" // Replace with actual email
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