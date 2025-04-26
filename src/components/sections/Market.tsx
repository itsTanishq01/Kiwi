
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUpIcon, UsersIcon, DollarSignIcon } from "lucide-react";

const Market = () => {
  return (
    <section id="market" className="min-h-screen py-20 text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-12">Market Opportunity</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              Icon: TrendingUpIcon,
              title: "Growing Senior Wearable Market",
              points: [
                "Global elderly monitor market valued at $3.5B in 2023",
                "Projected to reach $8.7B (CAGR 9.8%)",
                "Wearable Tech: $120.15B (2023) → $1.69T (2032) with 34.6% CAGR"
              ]
            },
            {
              Icon: DollarSignIcon,
              title: "Market Demand & Pricing",
              points: [
                "Strong interest in voice-controlled devices",
                "Average price acceptance: $400",
                "Estimated cost per watch: $300"
              ]
            }
          ].map(({ Icon, title, points }, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold text-primary">{title}</h3>
                </div>
                <ul className="space-y-3 text-foreground/90">
                  {points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-semibold">
                        {title === "Growing Senior Wearable Market" 
                          ? ["2023:", "2033:", "Wearable Tech:"][idx] 
                          : ""}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card 
          className="mb-12 transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl active:scale-95 cursor-pointer"
        >
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center gap-3">
              <UsersIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-primary">Market Size & Growth Outlook</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Total Available Market (TAM)",
                  value: "$231B",
                  description: "771M people aged 65+ worldwide"
                },
                {
                  title: "Serviceable Available Market (SAM)",
                  value: "$16B",
                  description: "55M people aged 65+ in U.S."
                },
                {
                  title: "Serviceable Obtainable Market (SOM)",
                  value: "$1B",
                  description: "10% of U.S. aging population"
                }
              ].map(({ title, value, description }, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg border-2 border-primary/20 space-y-2 
                    transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <h4 className="font-semibold text-primary">{title}</h4>
                  <p className="text-2xl font-bold text-primary">{value}</p>
                  <p className="text-sm text-foreground/75">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-white 
              transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-md active:scale-95 cursor-pointer">
              <h4 className="font-semibold text-primary mb-3">Future Growth & Opportunities</h4>
              <ul className="space-y-2 text-foreground/90">
                <li>• Expected to capture 10-15% of senior wearables market within 5 years</li>
                <li>• Smart home integration opportunities (fall detection linked to home alert systems)</li>
                <li>• AI-driven predictive health analytics development</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Market;
