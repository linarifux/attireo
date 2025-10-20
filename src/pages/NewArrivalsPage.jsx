import React from 'react';
import FilterSidebar from '../components/shop/FilterSidebar';
import ProductGrid from '../components/shop/ProductGrid';
import Newsletter from '../components/home/Newsletter';
import { allProducts } from '../data/mockData'; // 1. Import all products

const NewArrivalsPage = () => {
  // 2. Create a "New Arrivals" collection (e.g., the first 9 products)
  const newProducts = allProducts.slice(0, 9);

  return (
    <div className="pt-16"> {/* Start content below the fixed navbar */}
      
      {/* 3. Page Header */}
      <header className="py-12 md:py-20 bg-attireo-beige/40 dark:bg-attireo-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            New Arrivals
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            Discover the latest styles, just landed.
          </p>
        </div>
      </header>

      {/* Main Content (Filters + Grid) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="flex flex-col lg:flex-row">
          <FilterSidebar />
          {/* 4. Pass the *filtered* list to the grid */}
          <ProductGrid products={newProducts} /> 
        </div>
      </div>
      
      {/* 5. Add Newsletter CTA at the bottom */}
      <Newsletter />
    </div>
  );
};

export default NewArrivalsPage;