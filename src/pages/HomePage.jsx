import React from 'react';
import Hero from '../components/home/Hero';
import CategoryShowcase from '../components/home/CategoryShowcase';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutSection from '../components/home/AboutSection';
import Newsletter from '../components/home/Newsletter';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <AboutSection />
      <Newsletter />
    </div>
  );
};

export default HomePage;