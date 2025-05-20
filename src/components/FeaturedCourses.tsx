
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturedCourses = () => {
  const courses = [
    {
      id: "bsc-csit",
      title: "BSc CSIT",
      description: "Bachelor of Science in Computer Science and Information Technology",
      duration: "4 Years (8 Semesters)",
     
      image: "/bsccsit.png",
    },
    {
      id: "bca",
      title: "BCA",
      description: "Bachelor of Computer Applications",
      duration: "4 Years (8 Semesters)",
      image: "/bca.png",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Featured Programs</h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl text-campus-blue dark:text-blue-400">{course.title}</CardTitle>
                  <Badge variant="outline" className="text-campus-blue dark:text-blue-400 border-campus-blue dark:border-blue-400">
                    {course.duration}
                  </Badge>
                </div>
                <CardDescription className="text-base mt-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                
              </CardContent>
              <CardFooter>
                <Link
                  to={`/courses/${course.id}`}
                  className="w-full bg-campus-blue text-white py-2 px-4 rounded-md flex items-center justify-center font-medium hover:bg-blue-700 transition-colors"
                >
                  View Curriculum
                  <ArrowUp className="w-4 h-4 ml-2 transform rotate-45" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default FeaturedCourses;
