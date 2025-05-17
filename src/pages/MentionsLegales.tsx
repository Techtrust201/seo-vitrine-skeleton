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
                Raison sociale : CHAUFFE O EXPRESS
                <br />
                Statut juridique : Société à responsabilité limitée (SARL)
                <br />
                Capital social : 10 000 €<br />
                SIREN : 939 758 835
                <br />
                SIRET : 939 758 835 00010
                <br />
                Numéro de TVA intracommunautaire : En cours d'attribution
                <br />
                Adresse du siège social : 107 CHEMIN DU PLAN 1, 83550 VIDAUBAN
                <br />
                Email : contact@chauffe-o-express.fr
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Directeur de la publication
              </h2>
              <p>Le représentant légal de la société CHAUFFE O EXPRESS</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Hébergement
              </h2>
              <p>
                Le site est hébergé par :<br />
                OVH
                <br />
                2 rue Kellermann
                <br />
                59100 Roubaix
                <br />
                France
                <br />
                Téléphone : +33 9 72 10 10 07
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Propriété intellectuelle
              </h2>
              <p>
                L'ensemble du contenu de ce site (structure, textes, logos,
                images, photographies, vidéos, sons, etc.) est la propriété
                exclusive de CHAUFFE O EXPRESS ou de ses partenaires. Toute
                reproduction ou représentation, totale ou partielle, de ce site
                ou de son contenu, par quelque procédé que ce soit, sans
                autorisation expresse, est interdite et constituerait une
                contrefaçon sanctionnée par les articles L.335-2 et suivants du
                Code de la propriété intellectuelle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Activité professionnelle
              </h2>
              <p>
                La société CHAUFFE O EXPRESS a été créée le 29 octobre 2024.
                <br />
                Activité principale de l'établissement (NAF/APE) : Activités des
                sièges sociaux (70.10Z)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Loi applicable et juridiction compétente
              </h2>
              <p>
                Le présent site est soumis au droit français. Tout litige
                relatif à l'utilisation de ce site sera soumis à la compétence
                exclusive des tribunaux français.
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
