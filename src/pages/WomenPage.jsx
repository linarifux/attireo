import React from 'react';
import FilterSidebar from '../components/shop/FilterSidebar';
import ProductGrid from '../components/shop/ProductGrid';
import { allProducts } from '../data/mockData'; // 1. Import all products

const WomenPage = () => {
  // 2. Filter for only "Women" products
  const womensProducts = allProducts.filter(product => product.category === 'Women');

  return (
    <div className="pt-16"> {/* Start content below the fixed navbar */}
      
      {/* 3. Change the Page Header */}
      <header className="py-12 md:py-20 bg-attireo-beige/40 dark:bg-attireo-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Women's Collection
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            Timeless styles, designed for you.
          </p>
        </div>
      </header>

      {/* Main Content (Filters + Grid) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="flex flex-col lg:flex-row">
          <FilterSidebar />
          {/* 4. Pass the *filtered* list to the grid */}
          <ProductGrid products={womensProducts} /> 
        </div>
      </div>
      
      {/* Pagination (Optional: You could filter this too) */}
      <div className="flex justify-center items-center space-x-2 pb-16">
        <button className="px-4 py-2 border border-attireo-black/20 dark:border-gray-700 
                           hover:border-attireo-black dark:hover:border-attireo-white
                           transition-colors"
          aria-label="Go to previous page"
        >
          &larr; Previous
        </button>
        <button className="px-4 py-2 w-10 h-10 
                           bg-attireo-black dark:bg-attireo-beige
                           text-attireo-white dark:text-attireo-black
                           font-semibold"
          aria-label="Go to page 1"
          aria-current="page"
        >
          1
        </button>
      </div>
    </div>
  );
};

export default WomenPage;