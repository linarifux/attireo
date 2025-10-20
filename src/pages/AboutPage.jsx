import React from 'react';
// 1. Import our custom FadeInView component
import FadeInView from '../components/ui/FadeInView'; 
import { FiFeather, FiUsers, FiAward } from 'react-icons/fi';
import Newsletter from '../components/home/Newsletter'; // We'll reuse this

// 2. A small reusable component for our "values" grid
// We replace motion.div with our own FadeInView
const ValueCard = ({ icon, title, children }) => (
  <FadeInView direction="up" className="text-center p-6">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">
      {children}
    </p>
  </FadeInView>
);

const AboutPage = () => {
  const philosophyImageUrl = './images/about/fashion.jpg';
  const aestheticImageUrl1 = 'https://cdn.media.amplience.net/i/canon/pro-fashion-photography-technique-tips-1-new_e6eef04e6fe9434e9d9427a0220ef27c.jpeg';
  const aestheticImageUrl2 = 'https://media.istockphoto.com/id/694450136/photo/take-a-moment-to-enjoy-the-streets-of-the-city.jpg?s=612x612&w=0&k=20&c=oKOF7fkNFleU3tPbKmEiUOB4q1jujsgoG_pMUwfgBUY=';

  return (
    <div className="pt-16"> {/* Start content below the fixed navbar */}
      
      {/* Page Header (No animations, no changes) */}
      {/* 3. UPDATED: Tailwind v4 color syntax */}
      <header className="py-12 md:py-20 bg-attireo-beige/40 dark:bg-attireo-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Attireo
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            Fashion That Fits Every You.
          </p>
        </div>
      </header>

      {/* Section 1: Our Philosophy (Split Layout) */}
      {/* 4. UPDATED: Tailwind v4 color syntax */}
      <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Image - Replaced motion.div with FadeInView */}
            <FadeInView
              direction="right" // Corresponds to initial: { x: -50 }
            >
              <img
              className="w-full h-96 md:h-[550px] bg-cover bg-center"
              src={philosophyImageUrl} alt="bg" />
            </FadeInView>
            
            {/* Text Content - Replaced motion.div with FadeInView */}
            <FadeInView direction="left"> {/* Corresponds to initial: { x: 50 } */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Style is Universal.
              </h2>
              <p className="text-base md:text-lg mb-4 text-gray-700 dark:text-gray-300">
                Attireo was founded on a simple belief: fashion should be inclusive, not exclusive. We create high-quality, modern apparel designed for every body, every style, and every story.
              </p>
              <p className="text-base md:text-lg mb-8 text-gray-700 dark:text-gray-300">
                We blur the lines between traditional definitions, offering timeless pieces that serve as a canvas for your personal expression. From essential basics to statement-making designs, our collections are crafted with a global perspective and a commitment to quality that lasts.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Section 2: Our Commitment (Values Grid) */}
      {/* 5. UPDATED: Tailwind v4 color syntax */}
      <section className="py-16 md:py-24 bg-attireo-beige/40 dark:bg-attireo-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Commitment
          </h2>
          {/* The ValueCard components now self-animate */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ValueCard 
              // 6. UPDATED: Tailwind v4 color syntax
              icon={<FiFeather size={40} className="text-attireo-gold" />}
              title="Quality Craftsmanship"
            >
              We source only the finest materials and partner with skilled artisans to create garments that are made to last.
            </ValueCard>
            <ValueCard 
              // 7. UPDATED: Tailwind v4 color syntax
              icon={<FiUsers size={40} className="text-attireo-gold" />}
              title="Radical Inclusivity"
            >
              Our designs are made for all. We are committed to representative sizing, unisex options, and accessible style.
            {/* 8. FIXED: Typo from </CVard> */}
            </ValueCard> 
            <ValueCard 
              // 9. UPDATED: Tailwind v4 color syntax
              icon={<FiAward size={40} className="text-attireo-gold" />}
              title="Conscious Design"
            >
              We are moving towards a more sustainable future by making thoughtful choices about our materials and production process.
            </ValueCard>
          </div>
        </div>
      </section>

      {/* Section 3: Simple Gallery */}
      {/* 10. UPDATED: Tailwind v4 color syntax */}
      <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Replaced motion.div with FadeInView */}
            <FadeInView
              direction="up" // Corresponds to initial: { y: 20 }
            >
              <img src={aestheticImageUrl1} className="w-full h-96 md:h-[500px] bg-cover bg-center" alt="Image" />
            </FadeInView>
            
            {/* Replaced motion.div with FadeInView */}
            <FadeInView
              direction="up" // Corresponds to initial: { y: 20 }
            >
              <img src={aestheticImageUrl2} className="w-full h-96 md:h-[500px] bg-cover bg-center" alt="Image" />
            </FadeInView>

          </div>
        </div>
      </section>

      {/* Section 4: Newsletter CTA (Already refactored) */}
      <Newsletter />

    </div>
  );
};

export default AboutPage;