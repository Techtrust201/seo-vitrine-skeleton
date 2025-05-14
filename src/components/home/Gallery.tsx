
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
    beforeSrc: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    afterSrc: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Conversion d'une baignoire en une douche spacieuse et moderne. Installation complète avec carrelage assorti."
  },
  {
    id: 2,
    title: "Installation de chauffe-eau",
    category: "Chauffe-eau",
    beforeSrc: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    afterSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    description: "Remplacement d'un ancien chauffe-eau par un modèle éco-énergétique de dernière génération."
  },
  {
    id: 3,
    title: "Rénovation complète",
    category: "Plomberie",
    beforeSrc: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    afterSrc: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "Réfection complète de la plomberie sanitaire dans un appartement ancien."
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category.toLowerCase() === filter.toLowerCase());

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
            Découvrez quelques exemples de nos travaux récents. Chaque projet est réalisé avec 
            une attention méticuleuse aux détails et une qualité irréprochable.
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
                <h3 className="text-lg font-bold text-blue-dark">{item.title}</h3>
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
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Avant</h3>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                      <img 
                        src={selectedItem.beforeSrc} 
                        alt={`Avant - ${selectedItem.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Après</h3>
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
                  <h3 className="text-xl font-bold text-blue-dark">{selectedItem.title}</h3>
                  <p className="text-gray-600 mt-2">{selectedItem.description}</p>
                  <div className="mt-4">
                    <Button 
                      className="w-full bg-blue-dark hover:bg-blue-medium text-white"
                      onClick={() => {
                        setIsModalOpen(false);
                        const contactSection = document.getElementById("contact");
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
