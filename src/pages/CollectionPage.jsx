import React from 'react';
import { categories } from '../data/mockData'; // Import your categories
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from '@react-spring/web'; // Import animation hooks
import FadeInView from '../components/ui/FadeInView';
import Newsletter from '../components/home/Newsletter';

// Reusable Category Card component (similar to the one on the homepage)
const CollectionCard = ({ category }) => {
  const [styles, api] = useSpring(() => ({
    y: 0,
    config: config.stiff,
  }));

  return (
    <animated.div
      style={styles}
      onMouseEnter={() => api.start({ y: -8 })}
      onMouseLeave={() => api.start({ y: 0 })}
      className="relative overflow-hidden group aspect-4/3" // Use aspect ratio
    >
      <Link to={`/${category.name.toLowerCase()}`}>
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover 
                     transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
        <div className="absolute bottom-6 left-6">
          <h3 className="text-3xl font-serif font-bold text-attireo-white">{category.name}</h3>
          <p className="text-attireo-white text-sm font-medium uppercase tracking-wider 
                        opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            Shop Now &rarr;
          </p>
        </div>
      </Link>
    </animated.div>
  );
};


const CollectionsPage = () => {
  return (
    <div className="pt-16"> {/* Start content below fixed navbar */}
      
      {/* Page Header */}
      <header className="py-12 md:py-20 bg-attireo-beige/40 dark:bg-[--color-attireo-black]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView direction="up">
            <h1 className="text-4xl md:text-5xl font-bold">
              Collections
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              Explore our curated selections.
            </p>
          </FadeInView>
        </div>
      </header>

      {/* Main Content (Category Grid) */}
      <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => (
              // Use FadeInView to animate each card on scroll
              <FadeInView key={category.id} direction="up"> 
                  <CollectionCard category={category} />
              </FadeInView>
            ))}
          </div>
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
};

export default CollectionsPage;