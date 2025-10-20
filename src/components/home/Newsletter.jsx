import React from 'react';
// 1. Import spring hooks and observer
import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
// 2. Import our custom AnimatedButton
import AnimatedButton from '../ui/AnimatedButton';

const Newsletter = () => {
  
  // 3. Define the items to be animated as components
  const items = [
    <h2 key="1" className="text-3xl md:text-4xl font-bold text-attireo-black dark:text-attireo-white mb-4">
      Stay in Style
    </h2>,
    <p key="2" className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto">
      Subscribe to our newsletter for exclusive updates, new arrivals, and special offers.
    </p>,
    <form key="3" className="flex flex-col sm:flex-row max-w-lg mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="grow px-5 py-3 mb-3 sm:mb-0 sm:mr-3 
                   border-2 border-transparent focus:border-attireo-black/70 dark:focus:border-attireo-white/70 
                   bg-attireo-white dark:bg-attireo-black
                   text-attireo-black dark:text-attireo-white
                   focus:outline-none transition-colors"
      />
      {/* 4. Use AnimatedButton and update v4 classes */}
      <AnimatedButton
        type="submit"
        className="px-8 py-3 bg-attireo-black dark:bg-attireo-gold/90
                   text-attireo-white dark:text-attireo-black
                   font-semibold tracking-wide uppercase
                   hover:bg-gray-800 dark:hover:bg-attireo-gold/90
                   transition-colors duration-300"
      >
        Subscribe
      </AnimatedButton>
    </form>
  ];

  // 5. Set up the in-view observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.5,    // Trigger when 50% is visible
  });

  // 6. Set up the staggered trail animation
  const trail = useTrail(items.length, {
    from: { opacity: 0, y: 20 },
    to: { 
      opacity: inView ? 1 : 0, 
      y: inView ? 0 : 20 
    },
    config: { mass: 1, tension: 280, friction: 30 },
  });

  return (
    // 7. Update v4 classes
    <section className="py-16 md:py-24 bg-attireo-beige dark:bg-gray-900">
      {/* 8. Apply the ref to the container */}
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 9. Map over the trail and render animated items */}
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            {items[index]}
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export default Newsletter;