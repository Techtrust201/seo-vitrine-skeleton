import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// ---- IMAGES -------------------------------------------------------------
import beforeBathroom from "../../../public/realisation/ChatGPT Image 16 mai 2025, 16_25_26.png";
import afterBathroom from "../../../public/realisation/ChatGPT Image 16 mai 2025, 16_28_12.png";
import beforeCompleteRenovation from "../../../public/realisation/ChatGPT Image 16 mai 2025, 16_45_32.png";
import afterCompleteRenovation from "../../../public/realisation/ChatGPT Image 16 mai 2025, 16_45_31.png";
import beforeOldWaterHeater from "../../../public/realisation/ChatGPT Image 16 mai 2025, 16_37_23.png";
import afterOldWaterHeater from "../../../public/realisation/ChatGPT Image 16 mai 2025, 16_37_26.png";
// ------------------------------------------------------------------------

type Category = "all" | "chauffe-eau" | "plomberie" | "conversion";

interface GalleryItem {
  id: number;
  title: string;
  category: Exclude<Category, "all">;
  beforeSrc: string;
  afterSrc: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Rénovation de salle de bain",
    category: "conversion",
    beforeSrc: beforeBathroom,
    afterSrc: afterBathroom,
    description:
      "Conversion d’une baignoire en une douche spacieuse, moderne et accessible. Remplacement d’une installation délabrée par une douche à l’italienne et d'un receveur extra‑plat, idéale pour optimiser l’espace et améliorer l’ergonomie de la salle de bain. Travaux réalisés avec soin : dépose de l’ancienne baignoire, étanchéité, installation de parois vitrées, robinetterie contemporaine, carrelage mural et au sol assorti pour un rendu harmonieux et haut de gamme. Une solution parfaite pour allier confort, sécurité et esthétique.",
  },
  {
    id: 2,
    title: "Installation de chauffe‑eau",
    category: "chauffe-eau",
    beforeSrc: beforeOldWaterHeater,
    afterSrc: afterOldWaterHeater,
    description:
      "Remplacement d’un ancien chauffe‑eau par un modèle éco‑énergétique de dernière génération. Cette intervention comprend la dépose de l’appareil vétuste et l’installation d’un chauffe‑eau moderne, optimisé pour réduire la consommation d’énergie. Le nouveau dispositif offre une montée en température plus rapide, une meilleure régulation et une durabilité renforcée, pour des économies à long terme et un confort quotidien accru.",
  },
  {
    id: 3,
    title: "Rénovation complète",
    category: "plomberie",
    beforeSrc: beforeCompleteRenovation,
    afterSrc: afterCompleteRenovation,
    description:
      "Rénovation intégrale de la plomberie sanitaire dans un appartement ancien. Les vieilles canalisations ont été remplacées par un réseau conforme aux normes actuelles, garantissant confort, sécurité et durabilité. Baignoire, lavabo, WC, robinetterie et chauffe‑eau ont été changés pour des équipements modernes et performants. Résultat : une salle de bain fonctionnelle, élégante et parfaitement étanche, conjuguant esthétique contemporaine et excellence technique.",
  },
];

const Gallery = () => {
  // --------------------------- STATE ------------------------------------
  const [filter, setFilter] = useState<Category>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // ----------------------------------------------------------------------

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <section id="galerie" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* ---------- HEADER ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-dark mb-4">Nos réalisations</h2>
          <p className="text-lg text-gray-600">
            Découvrez quelques exemples de nos travaux récents. Chaque projet
            est réalisé avec une attention méticuleuse aux détails et une
            qualité irréprochable.
          </p>
        </div>

        {/* ---------- FILTERS ---------- */}
        <div className="flex justify-center mb-10 flex-wrap gap-2">
          {/* Helper to render a filter button */}
          {(
            [
              { label: "Tout", value: "all" },
              { label: "Chauffe‑eau", value: "chauffe-eau" },
              { label: "Plomberie", value: "plomberie" },
              {
                label: "Conversion de baignoire en douche",
                value: "conversion",
              },
            ] as { label: string; value: Category }[]
          ).map(({ label, value }) => (
            <Button
              key={value}
              variant={filter === value ? "default" : "outline"}
              onClick={() => setFilter(value)}
              className={filter === value ? "bg-blue-dark" : ""}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* ---------- GALLERY GRID ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-gray-light rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => openModal(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.afterSrc}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-light text-white mb-2 capitalize">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-blue-dark">
                  {item.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ---------- CTA ---------- */}
        {/* <div className="mt-10 text-center">
          <Button className="bg-blue-dark hover:bg-blue-medium text-white">
            Afficher plus de réalisations
          </Button>
        </div> */}

        {/* ---------- MODAL ---------- */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl p-0 md:max-h-[90vh] w-[90vw] max-w-[90vw] overflow-hidden">
            {/* Conteneur scrollable pour empêcher le body‑lock de bloquer l’affichage sur mobile */}
            <div className="max-h-[90vh] overflow-y-auto">
              {selectedItem && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                    {/* BEFORE */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Avant
                      </h3>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                        <img
                          src={selectedItem.beforeSrc}
                          alt={`Avant - ${selectedItem.title}`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* AFTER */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">
                        Après
                      </h3>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                        <img
                          src={selectedItem.afterSrc}
                          alt={`Après - ${selectedItem.title}`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* DESCRIPTION & CTA */}
                  <div className="bg-white p-6 border-t space-y-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-light text-white mb-2 capitalize">
                        {selectedItem.category}
                      </span>
                      <h3 className="text-xl font-bold text-blue-dark">
                        {selectedItem.title}
                      </h3>
                      <p className="text-gray-600 mt-2 whitespace-pre-line">
                        {selectedItem.description}
                      </p>
                    </div>

                    <Button
                      className="w-full bg-blue-dark hover:bg-blue-medium text-white"
                      onClick={() => {
                        setIsModalOpen(false);
                        const contactSection =
                          document.getElementById("contact");
                        contactSection?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Demander un devis similaire
                    </Button>
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
