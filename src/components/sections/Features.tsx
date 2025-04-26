import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MicIcon, HeartIcon, CalendarIcon, ShieldIcon } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="min-h-screen py-20 text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">Features</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              Icon: MicIcon,
              title: "Voice-Only Interface",
              description: "100% voice-controlled (calls, texts, emails) with no screen or manual input."
            },
            {
              Icon: HeartIcon,
              title: "Health Monitoring",
              description: "Continuous tracking of BP, oxygen, glucose, HRV, and AFib; automatic fall detection."
            },
            {
              Icon: CalendarIcon,
              title: "Calendar & Memory Assistance",
              description: "Calendar reminders for appointments, medications, and important events."
            },
            {
              Icon: ShieldIcon,
              title: "Seamless Integration",
              description: "Syncs with senior care systems and provides real-time updates via a remote caregiver dashboard."
            },
            {
              Icon: HeartIcon,
              title: "Tailored for High-Need Users",
              description: "Designed for post-hospital care, dementia support, and vision-impaired users to enhance independent living."
            }
          ].map(({ Icon, title, description }, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold text-primary">{title}</h3>
                </div>
                <p className="mt-4 text-foreground/90">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
