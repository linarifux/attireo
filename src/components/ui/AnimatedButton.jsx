import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';

const AnimatedButton = ({ children, ...props }) => {
  const [styles, api] = useSpring(() => ({
    scale: 1,
    config: config.stiff, // A slightly bouncy spring
  }));

  const handleMouseEnter = () => api.start({ scale: 1.05 });
  const handleMouseLeave = () => api.start({ scale: 1 });
  const handleMouseDown = () => api.start({ scale: 0.95 });
  const handleMouseUp = () => api.start({ scale: 1.05 });

  return (
    <animated.button
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props} // Pass down className, onClick, etc.
    >
      {children}
    </animated.button>
  );
};

export default AnimatedButton;