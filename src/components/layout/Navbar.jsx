import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
// 1. Import useCart hook
import { useCart } from '../../contexts/CartContext';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTransition, animated, config } from '@react-spring/web';

const NavLink = ({ to, children }) => (
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  // 2. Get totalItemsInCart from CartContext
  const { totalItemsInCart } = useCart();

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

  const transitions = useTransition(isMobileMenuOpen, {
    from: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -20 },
    config: config.stiff,
  });

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false); // Close search input after submitting
      setSearchQuery(''); // Clear input
      setIsMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50
                   bg-attireo-white/80 dark:bg-attireo-black/80
                   backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0"> {/* Corrected typo: flex-shrink-0 */}
            <Link to="/" className="text-2xl font-serif font-bold
                                   text-attireo-black dark:text-attireo-white">
              Attireo
            </Link>
          </div>

          {/* Conditional rendering for Desktop Nav vs. Search Input */}
          <div className="hidden md:flex grow items-center justify-center px-4">
            {!isSearchOpen ? (
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <NavLink key={item.name} to={item.path}>{item.name}</NavLink>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSearchSubmit} className="w-full max-w-md">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-1.5 text-sm
                             bg-attireo-white dark:bg-gray-800
                             border border-attireo-black/20 dark:border-gray-700
                             focus:border-attireo-gold focus:ring-0
                             placeholder-gray-500 rounded-md dark:text-attireo-white"
                  autoFocus
                />
              </form>
            )}
          </div>


          {/* Icons & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search Icon Button */}
            <button
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                // If opening search, ensure mobile menu is closed
                if (!isSearchOpen) setIsMobileMenuOpen(false);
              }}
              className="p-1
                         text-attireo-black dark:text-attireo-beige
                         hover:text-attireo-gold dark:hover:text-attireo-gold transition-colors"
            >
              {isSearchOpen ? <FiX size={20} /> : <FiSearch size={20} />}
            </button>

            {/* Cart Icon Button - With count */}
            <Link to="/cart" className="relative p-1
                               text-attireo-black dark:text-attireo-beige
                               hover:text-attireo-gold dark:hover:text-attireo-gold transition-colors">
              <FiShoppingCart size={20} />
              {totalItemsInCart > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center
                                 rounded-full bg-attireo-gold
                                 text-attireo-black text-[10px] font-bold">
                  {totalItemsInCart}
                </span>
              )}
            </Link>

            {/* User Icon (Desktop Only) */}
            <button className="hidden md:block p-1
                               text-attireo-black dark:text-attireo-beige
                               hover:text-attireo-gold dark:hover:text-attireo-gold transition-colors">
              <FiUser size={20} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1
                         text-attireo-black dark:text-attireo-beige
                         hover:text-attireo-gold dark:hover:text-attireo-gold transition-colors"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                // If opening mobile menu, ensure search is closed
                if (!isMobileMenuOpen) setIsSearchOpen(false);
              }}
              className="md:hidden p-1 text-attireo-black dark:text-attireo-beige"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      {transitions((style, item) =>
        item ? (
          <animated.div
            style={style} // Apply the animated styles
            className="md:hidden px-4 pt-2 pb-4 space-y-2 border-t border-attireo-beige/30"
          >
            {/* Mobile Search Form (always visible when menu is open) */}
            <form onSubmit={handleSearchSubmit} className="pb-2">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 text-sm
                           bg-attireo-white dark:bg-gray-800
                           border border-attireo-black/20 dark:border-gray-700
                           focus:border-attireo-gold focus:ring-0
                           placeholder-gray-500 rounded-md"
              />
            </form>

            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
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