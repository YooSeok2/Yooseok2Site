import React from 'react';
import { motion } from 'framer-motion';

type Props={
  children: React.ReactNode;
  className?: string;
}

function OpacityBox({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [0, 1],
        opacity: [0, 1],
        borderRadius: ['50%', '20%', '5%'],
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

export default OpacityBox;
