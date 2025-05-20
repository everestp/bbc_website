
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FacilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  imageSrc: string;
}

const FacilityCard = ({
  icon: Icon,
  title,
  description,
  details,
  imageSrc,
}: FacilityCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 flex items-center gap-2 text-white">
          <Icon className="h-6 w-6" />
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <CardHeader className="pt-4 pb-2">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          {details.map((detail, index) => (
            <li key={index} className="text-sm flex items-start">
              <span className="mr-2 text-campus-blue">•</span>
              {detail}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FacilityCard;
