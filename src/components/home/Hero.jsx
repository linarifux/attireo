import React from "react";
// 1. Import spring and our new button
import { useSpring, animated } from "@react-spring/web";
import AnimatedButton from "../ui/AnimatedButton";
import { Link } from "react-router-dom";

const Hero = () => {
  // 2. Simple 'on-load' spring for the content
  const styles = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 200,
    config: { tension: 280, friction: 60 },
  });

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('./images/hero.jpeg')" }}
      >
        {/* 3. Update Overlay classes to v4 syntax */}
        <div className="absolute inset-0 bg-attireo-black/30 dark:bg-attireo-black/50"></div>
      </div>

      {/* 4. Use animated.div and apply the spring style */}
      <animated.div style={styles} className="relative z-10 p-4">
        {/* 5. Update text colors to v4 syntax */}
        <h1 className="text-5xl md:text-7xl font-bold font-serif text-attireo-white mb-6">
          All Styles. One Name.
          <br />
          <span className="text-attireo-gold">Attireo.</span>
        </h1>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* 6. Use AnimatedButton and update v4 classes */}
          <Link to="/shop">
            <AnimatedButton
              className="px-8 py-3 bg-attireo-gold text-attireo-black
                       font-semibold tracking-wide uppercase
                       hover:bg-attireo-gold/90 transition-colors duration-300"
            >
              Shop Now
            </AnimatedButton>
          </Link>

          {/* 7. Use AnimatedButton and update v4 classes */}
          <Link to="/collections">
            <AnimatedButton
              className="px-8 py-3 bg-transparent border-2 border-attireo-white
                       text-attireo-white font-semibold 
                       tracking-wide uppercase 
                       hover:bg-attireo-white hover:text-attireo-black 
                       transition-colors duration-300"
            >
              Explore Collections
            </AnimatedButton>
          </Link>
        </div>
      </animated.div>
    </div>
  );
};

export default Hero;
