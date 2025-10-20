import React from 'react';
import { categories } from '../../data/mockData';
// 1. Import spring
import { useSpring, animated, config } from '@react-spring/web';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  // 2. Set up spring for hover
  const [styles, api] = useSpring(() => ({
    y: 0,
    config: config.stiff,
  }));

  return (
    // 3. Apply spring styles and events
    <animated.div
      style={styles}
      onMouseEnter={() => api.start({ y: -8 })}
      onMouseLeave={() => api.start({ y: 0 })}
      className="relative overflow-hidden group h-80"
    >
      <Link to={`/${category.name.toLowerCase()}`}>
        
        {/* --- ADD THIS CONTENT BACK --- */}
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
        {/* --- END OF ADDED CONTENT --- */}
        
      </Link>
    </animated.div>
  );
};

const CategoryShowcase = () => {
  return (
    // 4. Update background color to v4 syntax
    <section className="py-16 md:py-24 bg-attireo-beige/40 dark:bg-attireo-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;