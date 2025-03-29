
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: "https://www.menshairstylesnow.com/wp-content/uploads/2018/05/Modern-Crew-Cut.jpg"
    },
    {
      id: 2,
      url: "https://www.menshairstylesnow.com/wp-content/uploads/2018/05/Short-Crew-Cut.jpg",
  
    },
    {
      id: 3,
      url: "https://hairstylecamp.com/wp-content/uploads/buzz-cut-for-black-men-with-round-face-1.jpg.webp",

    },
    {
      id: 4,
      url: "https://hairstylecamp.com/wp-content/uploads/buzz-cut-for-black-men-with-square-face-840x960.jpg.webp"
    },
    {
      id: 5,
      url: "https://www.thefashionisto.com/wp-content/uploads/2024/09/Tapered-Buzz-Cut-Black-Men.jpg"
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const totalImages = galleryImages.length;
    
    if (direction === 'prev') {
      setSelectedImage((selectedImage - 1 + totalImages) % totalImages);
    } else {
      setSelectedImage((selectedImage + 1) % totalImages);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            Explore our portfolio of haircuts, styles, and grooming services that showcase our expertise and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="relative group overflow-hidden rounded-lg cursor-pointer hover-up"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-medium text-lg">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl bg-black/95 border-none p-0 overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              {selectedImage !== null && (
                <img
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].alt}
                  className="max-h-[80vh] max-w-full object-contain"
                />
              )}

              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
                aria-label="Previous image"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
                aria-label="Next image"
              >
                <ArrowRight className="h-6 w-6" />
              </button>

              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
                aria-label="Close gallery"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
