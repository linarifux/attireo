import React, { useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { FiChevronDown } from 'react-icons/fi';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Spring for the content (animating max-height and opacity)
  const contentStyles = useSpring({
    to: {
      opacity: isOpen ? 1 : 0,
      maxHeight: isOpen ? 200 : 0, // 200px should be enough, adjust if needed
    },
    from: { opacity: 0, maxHeight: 0 },
    config: config.default,
  });

  // Spring for rotating the icon
  const iconStyles = useSpring({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    config: config.stiff,
  });

  return (
    <div className="border-b border-attireo-black/20 dark:border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{title}</span>
        <animated.div style={iconStyles}>
          <FiChevronDown size={22} className="text-attireo-gold" />
        </animated.div>
      </button>
      <animated.div style={contentStyles} className="overflow-hidden">
        <div className="pb-6 text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </animated.div>
    </div>
  );
};

export default AccordionItem;