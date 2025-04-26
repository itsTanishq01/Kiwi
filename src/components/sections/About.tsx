
import React from "react";
import { ArrowDown } from "lucide-react";

const About = () => {
  const scrollToProblem = () => {
    const element = document.getElementById('problem');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="min-h-screen flex items-center text-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            What is Kiwi Watch?
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90">
            A wearable smart device tailored for seniors, offering health monitoring, emergency alerts, 
            memory assistance, and seamless communication.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={scrollToProblem}
              className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              Learn More
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors">
              Watch Demo
            </button>
          </div>
          <div className="animate-bounce mt-12">
            <ArrowDown className="h-8 w-8 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
