
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Market from "@/components/sections/Market";
import WhyKiwi from "@/components/sections/WhyKiwi";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div>
      <Navbar />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Problem />
      </ScrollReveal>
      <ScrollReveal>
        <Solution />
      </ScrollReveal>
      <ScrollReveal>
        <Features />
      </ScrollReveal>
      <ScrollReveal>
        <Market />
      </ScrollReveal>
      <ScrollReveal>
        <WhyKiwi />
      </ScrollReveal>
    </div>
  );
};

export default Index;

