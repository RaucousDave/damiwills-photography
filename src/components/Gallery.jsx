import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const galleryImages = [
    { id: 1, src: "/images/single-shot.jpg" },
    { id: 2, src: "/images/couples-shot.jpg" },
    { id: 3, src: "/images/family-shot.jpg" },
    { id: 4, src: "/images/portrait-2.jpg" },
    { id: 5, src: "/images/single-shot(2).jpg" },
    { id: 6, src: "/images/portrait-shot.jpg" },
    { id: 7, src: "/images/couple.jpg" },
    { id: 8, src: "/images/female_portrait.jpg" },
    { id: 9, src: "/images/maternal_pic.jpg" },
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  return (
    <section className="min-h-full">
      <h1 className="text-5xl text-center text-charcoal font-heading font-semibold">
        Gallery
      </h1>
      <div className="py-8 mt-8 md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div key={image.id}>
              <img
                src={image.src}
                alt=""
                loading="lazy"
                onClick={() => handleImageClick(image.id - 1)}
                className="h-full object-cover rounded-lg transition duration-300 hover:shadow-2xl hover:scale-[1.05] hover:shadow-yellow-100 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentIndex}
          slides={galleryImages.map((img) => ({
            src: img.src,
            id: img.id,
          }))}
        />
      )}
    </section>
  );
};

export default Gallery;
