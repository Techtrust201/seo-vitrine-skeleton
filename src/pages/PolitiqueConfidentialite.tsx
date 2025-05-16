
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/legal/CookieConsent";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-heading font-bold text-blue-dark mb-8">
            Politique de Confidentialité
          </h1>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <p className="mb-4">
                Date de dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
              <p className="mb-4">
                Chauffe-O-Express s'engage à protéger la vie privée des utilisateurs de son site internet.
                Cette politique de confidentialité vous informe sur la manière dont nous recueillons,
                utilisons et protégeons vos données personnelles.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Collecte des données personnelles
              </h2>
              <p className="mb-4">
                Nous collectons les données personnelles suivantes :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale</li>
                <li>Informations relatives à votre demande de devis ou de service</li>
              </ul>
              <p>
                Ces données sont collectées lorsque vous remplissez notre formulaire de contact ou
                lorsque vous nous contactez directement par téléphone ou par email.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Utilisation des données
              </h2>
              <p className="mb-4">
                Les données collectées sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Répondre à vos demandes et vous fournir les services demandés</li>
                <li>Vous contacter concernant nos services</li>
                <li>Améliorer notre site internet et nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Cookies
              </h2>
              <p className="mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Les cookies sont de petits fichiers texte stockés sur votre ordinateur qui nous 
                permettent d'analyser l'utilisation du site.
              </p>
              <p className="mb-4">
                Nous utilisons les types de cookies suivants :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Cookies techniques nécessaires au fonctionnement du site</li>
                <li>Cookies analytiques pour comprendre comment les visiteurs utilisent notre site</li>
                <li>Cookies de préférences qui permettent de mémoriser vos choix</li>
              </ul>
              <p className="mb-4">
                Vous pouvez configurer votre navigateur pour refuser tous les cookies ou être averti
                lorsqu'un cookie est envoyé. Cependant, certaines fonctionnalités du site peuvent ne
                pas fonctionner correctement si vous désactivez les cookies.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Conservation des données
              </h2>
              <p>
                Nous conservons vos données personnelles aussi longtemps que nécessaire pour 
                atteindre les finalités pour lesquelles elles ont été collectées, sauf si une période
                de conservation plus longue est requise ou permise par la loi.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Vos droits
              </h2>
              <p className="mb-4">
                Conformément à la réglementation applicable en matière de protection des données personnelles,
                notamment le Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données personnelles</li>
                <li>Droit à l'effacement de vos données personnelles</li>
                <li>Droit à la limitation du traitement de vos données personnelles</li>
                <li>Droit à la portabilité de vos données personnelles</li>
                <li>Droit d'opposition au traitement de vos données personnelles</li>
              </ul>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter par email à 
                contact@chauffe-o-express.fr ou par courrier à l'adresse de notre siège social.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold text-blue-dark mb-4">
                Modification de la politique de confidentialité
              </h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                Toute modification sera publiée sur cette page avec une date de mise à jour.
                Nous vous encourageons à consulter régulièrement cette page pour rester informé des 
                éventuelles modifications.
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

export default PolitiqueConfidentialite;
