import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-16 bg-[#285E8F] lg:bg-[url('/public/hero-banner.png')]"
      style={{
        // backgroundImage:
        //   "url('/public/ChatGPT Image 16 mai 2025, 20_43_31.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-white mb-4 animate-slide-up">
            Votre expert en plomberie et chauffe-eau
          </h1>
          <p className="text-gray-100 text-xl md:text-2xl mb-8 animate-fade-in">
            Plus de 20 ans d'expérience à votre service pour tous vos besoins en
            plomberie, installation de chauffe-eau et conversion de baignoire en
            douche.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              onClick={scrollToContact}
              className="bg-blue-light hover:bg-blue-medium text-white font-bold px-8 py-6 text-lg"
            >
              Demander un devis gratuit
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-6 text-lg"
            >
              Découvrir nos services
            </Button>
          </div>

          {/* Badges de confiance */}
          <div
            className="mt-12 flex flex-wrap gap-6 items-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-white/90 px-4 py-2 rounded-full flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-dark mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-blue-dark font-semibold">
                Devis gratuit
              </span>
            </div>
            <div className="bg-white/90 px-4 py-2 rounded-full flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-dark mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-blue-dark font-semibold">
                Intervention rapide
              </span>
            </div>
            <div className="bg-white/90 px-4 py-2 rounded-full flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-dark mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-blue-dark font-semibold">
                Garantie satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
