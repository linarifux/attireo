import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const FadeInView = ({ children, className, direction = 'up' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.3,    // Trigger when 30% of the element is visible
  });

  // Define "from" and "to" styles based on direction
  const fromStyles = {
    opacity: 0,
    x: direction === 'left' ? 50 : (direction === 'right' ? -50 : 0),
    y: direction === 'up' ? 30 : 0,
  };

  const toStyles = {
    opacity: inView ? 1 : 0,
    x: inView ? 0 : fromStyles.x,
    y: inView ? 0 : fromStyles.y,
  };

  const styles = useSpring({
    from: fromStyles,
    to: toStyles,
    config: { tension: 280, friction: 60 },
  });

  return (
    <animated.div ref={ref} style={styles} className={className}>
      {children}
    </animated.div>
  );
};

export default FadeInView;