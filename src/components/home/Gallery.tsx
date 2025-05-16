import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import beforeBathroom from "../../../public/realisation/ChatGPT Image 16 mai 2025, 16_25_26.png";
import aftereBathroom from "../../../public/realisation/ChatGPT Image 16 mai 2025, 16_28_12.png";
import beforeCompletRenovation from "../../../public/realisation/ChatGPT Image 16 mai 2025, 16_45_32.png";
import aftereCompletRenovation from "../../../public/realisation/ChatGPT Image 16 mai 2025, 16_45_31.png";
import beforeOldChauffeEau from "../../../public/realisation/ChatGPT Image 16 mai 2025, 16_37_23.png";
import aftereOldChauffeEau from "../../../public/realisation/ChatGPT Image 16 mai 2025, 16_37_26.png";
interface GalleryItem {
  id: number;
  title: string;
  category: string;
  beforeSrc: string;
  afterSrc: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Rénovation de salle de bain",
    category: "Conversion",
    beforeSrc: beforeBathroom,
    afterSrc: aftereBathroom,
    description:
      "Conversion d’une baignoire en une douche spacieuse, moderne et accessible. Remplacement d’une installation délabré par une douche à l’italienneet d'un receveur extra-plat, idéale pour optimiser l’espace et améliorer l’ergonomie de la salle de bain. Travaux réalisés avec soin : dépose de l’ancienne baignoire, étanchéité, installation de parois vitrées, robinetterie contemporaine et carrelage mural et au sol assorti pour un rendu harmonieux et haut de gamme. Une solution parfaite pour allier confort, sécurité et esthétique.",
  },
  {
    id: 2,
    title: "Installation de chauffe-eau",
    category: "Chauffe-eau",
    beforeSrc: beforeOldChauffeEau,
    afterSrc: aftereOldChauffeEau,
    description:
      "Remplacement d’un ancien chauffe-eau par un modèle éco-énergétique de dernière génération. Cette intervention comprend la dépose de l’ancien appareil vétuste, souvent énergivore et peu fiable, et l’installation d’un chauffe-eau moderne, optimisé pour réduire la consommation d’énergie et améliorer les performances thermiques. Le nouveau dispositif offre une montée en température plus rapide, une meilleure régulation, et une durabilité renforcée. Idéal pour faire des économies sur le long terme tout en augmentant le confort au quotidien.",
  },
  {
    id: 3,
    title: "Rénovation complète",
    category: "Plomberie",
    beforeSrc: beforeCompletRenovation,
    afterSrc: aftereCompletRenovation,
    description:
      "Nous avons entièrement repensé et modernisé cette salle de bain délabré dans le cadre d'une réfection complète de la plomberie sanitaire au sein d’un appartement ancien.Les anciennes canalisations vétustes ont été remplacées par un réseau de plomberie neuf, conforme aux normes actuelles, garantissant confort, sécurité et durabilité. Toute l’installation a été revue : remplacement de la baignoire, du lavabo, des WC, pose de nouveaux raccords, robinetterie moderne et chauffe-eau optimisé. Le résultat : une salle de bain fonctionnelle, élégante et parfaitement étanche, alliant esthétique contemporaine et performance technique.",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category.toLowerCase() === filter.toLowerCase()
        );

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <section id="galerie" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-dark mb-4">Nos réalisations</h2>
          <p className="text-lg text-gray-600">
            Découvrez quelques exemples de nos travaux récents. Chaque projet
            est réalisé avec une attention méticuleuse aux détails et une
            qualité irréprochable.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center mb-10 flex-wrap gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-blue-dark" : ""}
          >
            Tout
          </Button>
          <Button
            variant={filter === "chauffe-eau" ? "default" : "outline"}
            onClick={() => setFilter("chauffe-eau")}
            className={filter === "chauffe-eau" ? "bg-blue-dark" : ""}
          >
            Chauffe-eau
          </Button>
          <Button
            variant={filter === "plomberie" ? "default" : "outline"}
            onClick={() => setFilter("plomberie")}
            className={filter === "plomberie" ? "bg-blue-dark" : ""}
          >
            Plomberie
          </Button>
          <Button
            variant={filter === "conversion" ? "default" : "outline"}
            onClick={() => setFilter("conversion")}
            className={filter === "conversion" ? "bg-blue-dark" : ""}
          >
            Conversion baignoire/douche
          </Button>
        </div>

        {/* Galerie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-light rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => openModal(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.afterSrc}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-light text-white mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-blue-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton pour afficher plus */}
        <div className="mt-10 text-center">
          <Button className="bg-blue-dark hover:bg-blue-medium text-white">
            Afficher plus de réalisations
          </Button>
        </div>

        {/* Modal pour avant/après */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedItem && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">
                      Avant
                    </h3>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <img
                        src={selectedItem.beforeSrc}
                        alt={`Avant - ${selectedItem.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">
                      Après
                    </h3>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <img
                        src={selectedItem.afterSrc}
                        alt={`Après - ${selectedItem.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-t">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-light text-white mb-2">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-xl font-bold text-blue-dark">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {selectedItem.description}
                  </p>
                  <div className="mt-4">
                    <Button
                      className="w-full bg-blue-dark hover:bg-blue-medium text-white"
                      onClick={() => {
                        setIsModalOpen(false);
                        const contactSection =
                          document.getElementById("contact");
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Demander un devis similaire
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
