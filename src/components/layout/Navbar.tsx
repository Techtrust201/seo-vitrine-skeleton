import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-heading font-bold text-blue-dark">
            Chauffe-<span className="text-blue-light">O</span>-Express
          </span>
          {/* <img
            src={"/public/logo_3_cropped.png"}
            alt={"logo chauffe-eau-express"}
            className="w-24 h-full object-cover transition-transform duration-300 hover:scale-105"
          /> */}
        </a>

        {/* Navigation pour desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("accueil")}
            className="text-blue-dark hover:text-blue-light font-medium transition-colors"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-blue-dark hover:text-blue-light font-medium transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("galerie")}
            className="text-blue-dark hover:text-blue-light font-medium transition-colors"
          >
            Réalisations
          </button>
          <button
            onClick={() => scrollToSection("temoignages")}
            className="text-blue-dark hover:text-blue-light font-medium transition-colors"
          >
            Témoignages
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-light hover:bg-blue-medium text-white"
          >
            Contact
          </Button>
        </nav>

        {/* Bouton hamburger pour mobile */}
        <button
          className="md:hidden text-blue-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-blue-dark hover:text-blue-light font-medium transition-colors text-left py-2"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-blue-dark hover:text-blue-light font-medium transition-colors text-left py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("galerie")}
              className="text-blue-dark hover:text-blue-light font-medium transition-colors text-left py-2"
            >
              Réalisations
            </button>
            <button
              onClick={() => scrollToSection("temoignages")}
              className="text-blue-dark hover:text-blue-light font-medium transition-colors text-left py-2"
            >
              Témoignages
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-light hover:bg-blue-medium text-white"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
