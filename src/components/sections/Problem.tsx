
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChartAreaIcon, HeartPulseIcon, AlertCircleIcon } from "lucide-react";

const Problem = () => {
  return (
    <section id="problem" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">The Growing Challenge in Senior Care</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              Icon: ChartAreaIcon,
              title: "Aging Population Surge",
              description: "By 2050, seniors (65+) will comprise 16% of global population",
              subdescription: "Dramatic increase from 9% in 2019"
            },
            {
              Icon: HeartPulseIcon,
              title: "Healthcare Investment",
              description: "Global healthcare spending reached $9.8 trillion in 2021",
              subdescription: "Significant focus on elderly care"
            },
            {
              Icon: AlertCircleIcon,
              title: "Market Growth",
              description: "Elderly monitor market projected to reach $8.7B by 2033",
              subdescription: "9.8% Compound Annual Growth Rate"
            }
          ].map(({ Icon, title, description, subdescription }, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <CardContent className="p-6 space-y-4">
                <Icon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <div className="text-text space-y-2">
                  <p>{description}</p>
                  <p className="text-sm text-gray-600">{subdescription}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg border-2 border-primary/20 shadow-sm 
          transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl active:scale-95 cursor-pointer">
          <h3 className="text-2xl font-bold text-primary mb-6">Key Challenges in Senior Health Technology</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Health Monitoring Gaps",
                description: "Existing wearables fail to provide comprehensive health tracking for seniors, missing critical metrics like blood pressure, glucose levels, and heart rate variability.",
              },
              {
                title: "Communication Barriers",
                description: "Most smart devices are complex and challenging for seniors with vision, dexterity, or cognitive limitations.",
              },
              {
                title: "Emergency Response Limitations",
                description: "Current solutions lack immediate, comprehensive emergency alert systems that can instantly notify caregivers and medical professionals.",
              },
              {
                title: "Cognitive Support Shortfall",
                description: "No mainstream wearable offers robust memory assistance for seniors experiencing cognitive decline or early-stage dementia.",
              }
            ].map((challenge, index) => (
              <div 
                key={index} 
                className="space-y-4 p-4 rounded-lg border-2 border-primary 
                  transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <h4 className="font-semibold text-primary text-lg">{challenge.title}</h4>
                <p className="text-text">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
