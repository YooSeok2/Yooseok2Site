import React, { useCallback } from 'react';
import { motion, Variants } from 'framer-motion';

type Props= {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

const cardVariants = (duration:number): Variants => ({
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: -10,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0,
      duration,
    },
  },
  hover: {
    scale: 1.02,
  },
});

function ScrollBox({ children, className, duration }:Props) {
  const onClickBox = useCallback((event, info) => {
    console.log('Click box');
  }, []);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      whileHover="hover"
      onTap={onClickBox}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className={className}
        variants={cardVariants(duration)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default ScrollBox;
