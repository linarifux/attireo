import React, { useState, useMemo } from 'react'; // Import useState and useMemo
import FilterSidebar from '../components/shop/FilterSidebar';
import ProductGrid from '../components/shop/ProductGrid';
import { allProducts } from '../data/mockData';
import Newsletter from '../components/home/Newsletter'; // Import Newsletter if needed
import FadeInView from '../components/ui/FadeInView'; // Import FadeInView

const ShopPage = () => {
  // --- State for Filters ---
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  // --- Memoized Filtering Logic ---
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      // Category Filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      // Size Filter (Check if product.sizes exists and includes any selected size)
      if (selectedSizes.length > 0) {
        if (!product.sizes || !product.sizes.some(size => selectedSizes.includes(size))) {
          return false;
        }
      }

      // Price Filter
      const minPrice = priceRange.min === '' ? 0 : priceRange.min;
      const maxPrice = priceRange.max === '' ? Infinity : priceRange.max;
      if (product.price < minPrice || product.price > maxPrice) {
        return false;
      }

      return true; // Product passes all filters
    });
  }, [selectedCategories, selectedSizes, priceRange]); // Re-filter only when these change

  return (
    <div className="pt-16">
      {/* Page Header */}
      <header className="py-12 md:py-20 bg-attireo-beige/40 dark:bg-attireo-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Added FadeInView for header consistency */}
            <FadeInView direction="up">
                <h1 className="text-4xl md:text-5xl font-bold">
                    All Products
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                    Discover the complete Attireo collection.
                </p>
            </FadeInView>
        </div>
      </header>

      {/* Main Content (Filters + Grid) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="flex flex-col lg:flex-row">
          {/* --- Pass State and Handlers to Sidebar --- */}
          <FilterSidebar
            selectedCategories={selectedCategories}
            onCategoryChange={setSelectedCategories} // Pass the state setter function directly
            selectedSizes={selectedSizes}
            onSizeChange={setSelectedSizes} // Pass the state setter function directly
            priceRange={priceRange}
            onPriceChange={setPriceRange} // Pass the state setter function directly
            // applyFilters={() => console.log("Applying filters...")} // Optional: Add function if using the button
          />
          {/* --- Pass Filtered Products to Grid --- */}
          <ProductGrid products={filteredProducts} />
        </div>
      </div>

      {/* Pagination (Should ideally update based on filteredProducts length/pages) */}
      <div className="flex justify-center items-center space-x-2 pb-16">
        {/* ... pagination buttons ... */}
        {/* Note: Pagination logic is not implemented here */}
      </div>
      
      <Newsletter /> {/* Added Newsletter back */}
    </div>
  );
};

export default ShopPage;