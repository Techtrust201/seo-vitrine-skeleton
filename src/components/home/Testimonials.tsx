
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie L.",
    location: "Marseille",
    rating: 5,
    text: "Service impeccable pour le remplacement de mon chauffe-eau. Intervention rapide et professionnelle, prix très raisonnable. Je recommande vivement Chauffe-O-Express !",
    date: "15/03/2025"
  },
  {
    id: 2,
    name: "Laurent D.",
    location: "Aix-en-Provence",
    rating: 5,
    text: "J'ai fait appel à leurs services pour transformer ma baignoire en douche à l'italienne. Travail soigné, respectueux des délais et très propre. Très satisfait du résultat.",
    date: "28/02/2025"
  },
  {
    id: 3,
    name: "Sophie M.",
    location: "Aubagne",
    rating: 4,
    text: "Un plombier qui respecte ses engagements, c'est rare ! Intervention rapide pour une fuite urgente, tarifs clairs annoncés dès le départ. Merci !",
    date: "05/04/2025"
  },
  {
    id: 4,
    name: "Thomas B.",
    location: "Martigues",
    rating: 5,
    text: "Excellente prestation pour l'installation de notre nouveau chauffe-eau. Service client au top, technicien très compétent et sympathique. Je n'hésiterai pas à faire appel à eux pour d'autres travaux.",
    date: "19/01/2025"
  },
  {
    id: 5,
    name: "Élise P.",
    location: "La Ciotat",
    rating: 5,
    text: "Transformation complète de notre salle de bain avec conversion baignoire en douche adaptée PMR pour ma mère. Des conseils pertinents et un travail de qualité. Merci !",
    date: "22/03/2025"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentIndex]);

  return (
    <section id="temoignages" className="section-padding bg-gradient-to-b from-gray-light to-white">
      <div className="container mx-auto">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-dark mb-4">Ce que nos clients disent</h2>
          <p className="text-lg text-gray-600">
            La satisfaction de nos clients est notre priorité. Voici quelques témoignages 
            de personnes qui ont fait confiance à nos services.
          </p>
        </div>
        
        {/* Carousel de témoignages */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full p-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-blue-dark">{testimonial.name}</h3>
                        <p className="text-gray-500">{testimonial.location}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-gray-700 mb-4 text-lg italic">"{testimonial.text}"</p>
                    </blockquote>
                    <div className="text-gray-500 text-sm text-right">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contrôles du carousel */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={handlePrev} 
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Témoignage précédent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-blue-dark w-6" : "bg-blue-light/50"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext} 
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Témoignage suivant"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Note Google */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              <div className="ml-4">
                <p className="text-gray-600">Note Google</p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-xl font-bold text-blue-dark">4.9/5</span>
                </div>
              </div>
            </div>

            <div className="h-16 w-px bg-gray-300 hidden md:block"></div>

            <div>
              <p className="text-gray-600 text-center md:text-left">
                Basé sur <span className="font-bold text-blue-dark">27 avis</span> de nos clients satisfaits
              </p>
              <div className="mt-2">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-light hover:text-blue-medium font-medium flex items-center justify-center md:justify-start"
                >
                  Consulter tous les avis
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
