
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-blue-dark py-20 relative overflow-hidden">
      {/* Overlay gradient */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)"
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            Un problème de plomberie ? Besoin d'un nouveau chauffe-eau ?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-8">
            Ne perdez pas de temps ! Contactez Chauffe-O-Express pour une intervention rapide 
            et un travail de qualité. Devis gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={scrollToContact}
              className="bg-blue-light hover:bg-blue-medium text-white font-bold px-8 py-6 text-lg"
            >
              Demander un devis
            </Button>
            <Button 
              className="bg-white hover:bg-gray-100 text-blue-dark font-bold px-8 py-6 text-lg"
              asChild
            >
              <a href="tel:06XXXXXXXX">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Nous appeler
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
