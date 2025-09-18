'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface UseScrollAnimationProps {
  direction?: 'left' | 'right';
  delay?: number;
}

export const useScrollAnimation = ({ direction = 'left', delay = 0 }: UseScrollAnimationProps = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const initialX = direction === 'left' ? -100 : 100;

  const variants = {
    hidden: { 
      opacity: 0, 
      x: initialX,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom ease curve for smooth animation
        delay: delay,
      }
    }
  };

  return {
    ref,
    variants,
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
  };
};
