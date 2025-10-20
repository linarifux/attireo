import React from 'react';
import AnimatedButton from '../ui/AnimatedButton';
import FadeInView from '../ui/FadeInView';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <FadeInView className="group relative text-left">
      <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden 
                    bg-attireo-beige dark:bg-gray-800">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images ? product.images[0] : 'placeholder.jpg'}
            alt={product.name}
            className="w-full h-full object-cover 
                       transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </Link>
        <AnimatedButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-4 right-4 z-10 p-3 
                     bg-attireo-white dark:bg-attireo-black
                     shadow-lg rounded-full 
                     text-attireo-black dark:text-attireo-white
                     opacity-0 group-hover:opacity-100 transition-all duration-300
                     translate-y-2 group-hover:translate-y-0"
          aria-label="Add to cart"
        >
          <FiPlus size={20} />
        </AnimatedButton>
      </div>
      <div className="mt-4">
        <h3 className="text-base font-medium 
                   text-attireo-black dark:text-attireo-white truncate">
          {product.name}
        </h3>
        <p className="mt-1 text-lg font-semibold 
                  text-attireo-black dark:text-attireo-white">
          {formatPrice(product.price)}
        </p>
      </div>
    </FadeInView>
  );
};

export default ProductCard;