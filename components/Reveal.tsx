'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

const variants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0 }
});

export default function Reveal({ children, delay = 0, y = 32, className, once = true }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={variants(y)}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
