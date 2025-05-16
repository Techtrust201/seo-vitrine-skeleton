
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/legal/CookieConsent";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-heading font-bold text-blue-dark mb-8">
            Mentions Légales
          </h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Informations légales
              </h2>
              <p>
                Raison sociale : Chauffe-O-Express<br />
                Statut juridique : [À COMPLÉTER]<br />
                Capital social : 10 000 €<br />
                SIRET : [À COMPLÉTER]<br />
                Numéro de TVA intracommunautaire : [À COMPLÉTER]<br />
                Adresse du siège social : [À COMPLÉTER]<br />
                Téléphone : [À COMPLÉTER]<br />
                Email : contact@chauffe-o-express.fr
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Directeur de la publication
              </h2>
              <p>[Nom du dirigeant], [Fonction]</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Hébergeur du site
              </h2>
              <p>
                [Nom de l'hébergeur]<br />
                [Adresse de l'hébergeur]<br />
                [Téléphone de l'hébergeur]
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Propriété intellectuelle
              </h2>
              <p>
                L'ensemble du contenu de ce site (structure, textes, logos, images, photographies, 
                vidéos, sons, etc.) est la propriété exclusive de Chauffe-O-Express ou de ses partenaires. 
                Toute reproduction ou représentation, totale ou partielle, de ce site ou de 
                son contenu, par quelque procédé que ce soit, sans autorisation expresse, est interdite 
                et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du 
                Code de la propriété intellectuelle.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Loi applicable et juridiction compétente
              </h2>
              <p>
                Le présent site est soumis au droit français. Tout litige relatif à l'utilisation 
                de ce site sera soumis à la compétence exclusive des tribunaux français.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default MentionsLegales;
