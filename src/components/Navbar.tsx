
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-primary font-bold text-2xl">Kiwi Watch</div>
          <div className="hidden md:flex space-x-8">
            {["about", "problem", "solution", "features", "market", "why-kiwi"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-text hover:text-primary transition-colors duration-300 relative group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-opacity">
            Pre-Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
