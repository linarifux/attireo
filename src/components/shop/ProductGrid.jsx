import React, { useState, useMemo } from 'react'; // Import useState and useMemo
import ProductCard from './ProductCard';
import { FiChevronDown } from 'react-icons/fi';

const ProductGrid = ({ products }) => {
  // 1. Add state for the current sort option
  const [sortOption, setSortOption] = useState('newest'); // Default to 'newest'

  // 2. Memoize the sorted products
  const sortedProducts = useMemo(() => {
    // Create a mutable copy before sorting
    const sortableProducts = [...products];

    switch (sortOption) {
      case 'price-asc':
        return sortableProducts.sort((a, b) => a.price - b.price); // Low to High
      case 'price-desc':
        return sortableProducts.sort((a, b) => b.price - a.price); // High to Low
      case 'newest':
      default:
        // Assuming 'id' represents newest (higher id = newer)
        // If you have a 'dateAdded' field, sort by that instead
        return sortableProducts.sort((a, b) => b.id - a.id);
    }
  }, [products, sortOption]); // Re-sort only when products or sortOption change

  // 3. Handler for sort option change
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="w-full lg:w-3/4 xl:w-4/5 p-4">
      {/* Sorting Dropdown */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {sortedProducts.length} products
        </p>
        <div className="relative">
          {/* 4. Control the select value and add onChange handler */}
          <select
            value={sortOption} // Control the selected value
            onChange={handleSortChange} // Update state on change
            className="appearance-none bg-transparent border border-attireo-black/20 dark:border-gray-700 pl-4 pr-10 py-2 text-sm focus:border-attireo-gold focus:ring-0 cursor-pointer dark:text-attireo-white dark:bg-attireo-black"
          >
            <option value="newest">Sort by Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
        {/* 5. Map over the *sorted* products */}
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {/* Optional: Add a message if no products match filters/sort */}
        {sortedProducts.length === 0 && (
            <p className="col-span-full text-center text-gray-500">No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;