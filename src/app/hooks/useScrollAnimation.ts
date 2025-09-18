'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Variants, Transition } from 'framer-motion';

interface UseScrollAnimationProps {
  direction?: 'left' | 'right';
  delay?: number;
}

export const useScrollAnimation = ({ direction = 'left', delay = 0 }: UseScrollAnimationProps = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const initialX = direction === 'left' ? -100 : 100;

  const transition: Transition = {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1], // Improved easing curve
    delay: delay
  };

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      x: initialX,
      transition
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition
    }
  };

  return {
    ref,
    variants,
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
  };
};
