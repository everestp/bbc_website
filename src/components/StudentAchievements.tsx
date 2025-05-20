
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

type Achievement = {
  id: number;
  student: string;
  title: string;
  details: string;
  year: string;
  image?: string;
};

interface StudentAchievementsProps {
  achievements: Achievement[];
}

const StudentAchievements = ({ achievements }: StudentAchievementsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Student Achievements</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We are proud of our students who have achieved excellence in various fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-44 bg-blue-600 relative overflow-hidden">
                {achievement.image ? (
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-campus-blue to-blue-800">
                    <Trophy size={64} className="text-white/70" />
                  </div>
                )}
                <div className="absolute bottom-0 right-0 bg-campus-accent text-white px-3 py-1 text-sm font-medium">
                  {achievement.year}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{achievement.title}</CardTitle>
                <CardDescription className="font-medium text-campus-blue dark:text-blue-400">
                  {achievement.student}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{achievement.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentAchievements;
