import type { MotionProps } from 'motion/react';

export const fadeInUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export const fadeInLeft = (delay = 0): MotionProps => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export const fadeInRight = (delay = 0): MotionProps => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export const rotateRight = (): MotionProps => ({
    whileHover: { rotate: 6, scale: 1 },
    transition: { duration: 0.45, ease: "easeInOut" }
});

export const rotateLeft = (): MotionProps => ({
    whileHover: { rotate: -6, scale: 1 },
    transition: { duration: 0.45, ease: "easeInOut" }
});