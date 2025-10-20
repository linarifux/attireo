import React, { useState, useEffect } from 'react'; // <-- Import useEffect

const ProductImageGallery = ({ images = [], productName = 'Product' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- ADD THIS useEffect BACK ---
  // Resets the index when the images prop changes (new product selected)
  useEffect(() => {
    setCurrentIndex(0); 
  }, [images]); 
  // --- END OF ADDED useEffect ---

  // Fallback if images array is empty or undefined
  const safeImages = images && images.length > 0 ? images : ['https://via.placeholder.com/600x800?text=No+Image'];
  
  // --- ADD validIndex CHECK BACK ---
  // Ensure currentIndex is valid for the current safeImages array length
  const validIndex = Math.min(currentIndex, safeImages.length - 1);
  const currentImage = safeImages[validIndex]; 
  // --- END OF ADDED validIndex CHECK ---

  return (
    <div className="w-full lg:w-1/2">
      {/* Main Image */}
      {/* 1. UPDATED: Correct aspect ratio syntax */}
      <div className="relative aspect-3/4 overflow-hidden mb-4"> 
        <img 
          src={currentImage} 
          // Use validIndex for alt text consistency
          alt={`${productName} - Image ${validIndex + 1}`} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Thumbnails */}
      {safeImages.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto">
          {safeImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              // 2. UPDATED: Correct Tailwind v4 color syntax
              className={`shrink-0 w-20 h-24 border-2 ${ // Use flex-shrink-0 (was shrink-0)
                // Use validIndex for comparison
                index === validIndex 
                ? 'border-attireo-gold' // Correct v4 syntax
                : 'border-transparent hover:border-attireo-black/30 dark:hover:border-attireo-white/30' // Correct v4 syntax
              } transition-colors`}
            >
              <img 
                src={img} 
                alt={`${productName} - Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover" 
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;