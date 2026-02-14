import React from 'react';
import CircularGallery from './CircularGallery';

const GallerySection: React.FC = () => {
  const items = [
    { image: '/dist/images/wallCladings.png', text: 'Wall Claddings' },
    { image: '/dist/images/stoneSteps.png', text: 'Stone Steps' },
    { image: '/dist/images/steppings.png', text: 'Steppings' },
    { image: '/dist/images/cobbles.png', text: 'Cobbles' },
    { image: '/dist/images/pavers.png', text: 'Pavers' },
    { image: '/dist/images/circular.png', text: 'Circular Stone' },
    { image: '/dist/images/file_0000000077707208b32be05b125afc27.png', text: 'Natural Stone' },
    { image: '/dist/images/IMG-20260121-WA0187.jpg.jpeg', text: 'Premium Stone' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Stone Gallery
        </h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery
            items={items}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            font="bold 30px Cormorant Garamond"
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
