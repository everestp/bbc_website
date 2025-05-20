
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  id: number;
  name: string;
  photo: string;
  course: string;
  year: string;
  quote: string;
};

interface StudentTestimonialsProps {
  testimonials: Testimonial[];
}

const StudentTestimonials = ({ testimonials }: StudentTestimonialsProps) => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Student Voice</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from our students about their experiences and transformations
            during their academic journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 dark:border-gray-700 overflow-visible">
              <CardContent className="p-8 relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                    <p className="font-medium text-campus-blue dark:text-blue-400">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.course}, {testimonial.year}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
