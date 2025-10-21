import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom'; // Import useSearchParams
import ProductGrid from '../components/shop/ProductGrid';
import Newsletter from '../components/home/Newsletter';
import FadeInView from '../components/ui/FadeInView';
import { allProducts } from '../data/mockData';

const SearchPage = () => {
  // 1. Get search parameters from URL
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || ''; // Get the 'q' parameter, default to empty string

  // 2. Filter products based on the query (case-insensitive)
  const searchResults = useMemo(() => {
    if (!query.trim()) {
      return []; // Return empty if query is empty or just whitespace
    }
    const lowerCaseQuery = query.toLowerCase();
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      (product.description && product.description.toLowerCase().includes(lowerCaseQuery)) ||
      product.category.toLowerCase().includes(lowerCaseQuery)
    );
  }, [query]); // Re-filter only when the query changes

  return (
    <div className="pt-16"> {/* Start below navbar */}

      {/* Page Header */}
      <header className="py-12 md:py-16 bg-attireo-beige/40 dark:bg-attireo-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView direction="up">
            <h1 className="text-3xl md:text-4xl font-bold">
              Search Results
            </h1>
            {query && ( // Only show the query if it exists
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                Showing results for: <span className="font-semibold">{query}</span>
              </p>
            )}
             {!query && ( // Show message if query is empty
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                Please enter a search term in the navigation bar.
              </p>
            )}
          </FadeInView>
        </div>
      </header>

      {/* Main Content (Results Grid) */}
      <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3. Pass searchResults to ProductGrid */}
          {/* ProductGrid already handles sorting and the "no products found" message */}
          <ProductGrid products={searchResults} />

          {/* Optional: Add a button to go back if no results */}
          {query && searchResults.length === 0 && (
             <div className="text-center mt-12">
                 <Link to="/shop" className="text-attireo-gold hover:underline font-semibold">
                     Browse All Products
                 </Link>
             </div>
          )}
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default SearchPage;