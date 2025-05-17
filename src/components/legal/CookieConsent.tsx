import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-dark text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              CHAUFFE O EXPRESS utilise des cookies pour améliorer votre
              expérience. En continuant à naviguer, vous acceptez notre
              utilisation des cookies. Pour en savoir plus, consultez notre{" "}
              <a
                href="/politique-confidentialite"
                className="text-blue-light underline"
              >
                politique de confidentialité
              </a>
              .
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={declineCookies}
              className="bg-blue-light text-white border-white hover:bg-blue-medium"
            >
              Refuser
            </Button>
            <Button
              onClick={acceptCookies}
              className="bg-blue-medium hover:bg-blue-medium"
            >
              Accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
