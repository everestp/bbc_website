
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";

type Subject = {
  code: string;
  name: string;
  creditHours: number;
  description: string;
};

type Semester = {
  number: number;
  subjects: Subject[];
};

interface CourseSyllabusProps {
  semesters: Semester[];
  courseTitle: string;
}

const CourseSyllabus = ({ semesters, courseTitle }: CourseSyllabusProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">{courseTitle} - Full Syllabus</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {semesters.map((semester) => (
          <AccordionItem key={semester.number} value={`semester-${semester.number}`}>
            <AccordionTrigger className="text-lg font-medium">
              Semester {semester.number}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 pt-4">
                {semester.subjects.map((subject) => (
                  <Card key={subject.code}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium">
                        {subject.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Book size={16} className="text-campus-blue" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {subject.creditHours} Credit Hours
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Course Code:</strong> {subject.code}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {subject.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseSyllabus;
