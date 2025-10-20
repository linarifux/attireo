import React from 'react';
// 1. Import our custom react-spring components
import AnimatedButton from '../ui/AnimatedButton';
import FadeInView from '../ui/FadeInView';

const AboutSection = () => {
  return (
    // 2. Update Tailwind classes to v4 syntax
    <section className="py-16 md:py-24 bg-attireo-white dark:bg-attireo-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* 3. Replace motion.div with FadeInView */}
          <FadeInView
            direction="right" // Animate from the right (was x: -50)
          >
            <img src="./images/about/fashion.jpg" alt="" className="w-full h-96 md:h-[500px] bg-cover bg-center"/>
          </FadeInView>
          
          {/* 4. Replace motion.div with FadeInView */}
          <FadeInView direction="left"> {/* Animate from the left (was x: 50) */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fashion That Fits <span className="text-attireo-gold">Every You.</span>
            </h2>
            <p className="text-base md:text-lg mb-4 text-gray-700 dark:text-gray-300">
              At Attireo, we believe style is universal. It’s not just about what you wear, but how you wear it. Our mission is to provide high-quality, modern, and inclusive apparel that allows you to express every facet of your personality.
            </p>
            <p className="text-base md:text-lg mb-8 text-gray-700 dark:text-gray-300">
              From timeless basics to contemporary statement pieces, our collections are designed for a global audience, blurring the lines between men's and women's fashion to create a truly universal wardrobe.
            </p>
            
            {/* 5. Replace motion.button with AnimatedButton and update classes */}
            <AnimatedButton
              className="px-8 py-3 
                         bg-attireo-black dark:bg-attireo-beige 
                         text-attireo-white dark:text-attireo-black 
                         font-semibold tracking-wide uppercase 
                         hover:bg-gray-800 dark:hover:bg-attireo-white
                         transition-colors duration-300"
            >
              Learn More
            </AnimatedButton>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;