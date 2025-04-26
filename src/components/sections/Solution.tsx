import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeartIcon, UsersIcon, Compass, BriefcaseIcon } from "lucide-react";

const Solution = () => {
  return (
    <section id="solution" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              Icon: HeartIcon,
              title: "Health Monitoring & Emergency Response",
              description: "Comprehensive tracking of vital signs including blood pressure, oxygen levels, glucose, heart rate variability, and atrial fibrillation."
            },
            {
              Icon: UsersIcon,
              title: "Communication & Social Connectivity",
              description: "Fully voice-activated texting, calling, and emailing, ensuring seniors stay connected with family, caregivers, and healthcare providers."
            },
            {
              Icon: Compass,
              title: "Memory Assistance",
              description: "AI-powered memory assistant providing Calendar Reminders, Event Lookup, and Name Recall for those with cognitive decline."
            },
            {
              Icon: BriefcaseIcon,
              title: "Independence & Integration",
              description: "Seamless interface with nursing home alert systems and caregiver apps, enabling remote monitoring and independence."
            }
          ].map(({ Icon, title, description }, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <CardContent className="p-6 space-y-4">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <p className="text-text">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
