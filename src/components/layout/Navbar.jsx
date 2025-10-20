import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
// 1. Import react-spring hooks
import { useTransition, animated, config } from '@react-spring/web';

const NavLink = ({ to, children }) => (
  // This component has no JS animations, so it remains the same
  <Link
    to={to}
    className="relative text-sm font-medium 
               text-attireo-black dark:text-attireo-beige
               hover:text-attireo-gold dark:hover:text-attireo-gold
               transition-colors duration-200
               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 
               after:bg-attireo-gold after:transition-all after:duration-300 hover:after:w-full"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Men', path: '/men' },
    { name: 'Women', path: '/women' },
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // 2. Set up the transition for the mobile menu
  const transitions = useTransition(isMobileMenuOpen, {
    from: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -20 },
    config: config.stiff, // Use a non-wobbly, quick spring
  });

  return (
    // We use font-serif (which works) but arbitrary colors
    <nav className="fixed top-0 left-0 right-0 z-50 
                   bg-attireo-white/80 dark:bg-attireo-black/80 
                   backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ... (Logo, Desktop Nav, Icons all remain the same) ... */}
          <div className="hrink-0">
            <Link to="/" className="text-2xl font-serif font-bold 
                                   text-attireo-black dark:text-attireo-white">
              Attireo
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path}>{item.name}</NavLink>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block p-1 
                               text-attireo-black dark:text-attireo-beige 
                               hover:text-attireo-gold dark:hover:text-attireo-gold transition-colors">
              <FiSearch size={20} />
            </button>
            <button className="p-1 
                               text-attireo-black dark:text-attireo-beige 
                               hover:text-attireo-gold dark:hover:text-attireo-gold transition-colors">
              <FiShoppingCart size={20} />
            </button>
            <button className="hidden md:block p-1 
                               text-attireo-black dark:text-attireo-beige 
                               hover:text-attireo-gold dark:hover:text-attireo-gold transition-colors">
              <FiUser size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="p-1 
                         text-attireo-black dark:text-attireo-beige 
                         hover:text-attireo-gold dark:hover:text-attireo-gold transition-colors"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 text-attireo-black dark:text-attireo-beige"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Use the transition to render the mobile menu */}
      {transitions((style, item) =>
        item ? (
          <animated.div
            style={style} // Apply the animated styles
            className="md:hidden px-4 pt-2 pb-4 space-y-2 border-t border-attireo-beige/30"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium 
                           text-attireo-black dark:text-attireo-beige 
                           hover:bg-attireo-beige dark:hover:bg-attireo-black/50"
              >
                {item.name}
              </Link>
            ))}
          </animated.div>
        ) : null
      )}
    </nav>
  );
};

export default Navbar;