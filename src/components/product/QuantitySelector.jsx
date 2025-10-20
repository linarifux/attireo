import React from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const QuantitySelector = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="flex items-center border border-attireo-black/20 dark:border-gray-700 w-fit">
      <button 
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-attireo-beige/60 dark:hover:bg-gray-800 transition-colors"
        aria-label="Decrease quantity"
      >
        <FiMinus />
      </button>
      <span className="px-4 py-2 w-12 text-center">{quantity}</span>
      <button 
        onClick={onIncrease}
        className="px-4 py-2 hover:bg-attireo-beige/60 dark:hover:bg-gray-800 transition-colors"
        aria-label="Increase quantity"
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default QuantitySelector;