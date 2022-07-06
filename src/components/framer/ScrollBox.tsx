import React, { useCallback } from 'react';
import { motion, Variants } from 'framer-motion';
import { MotionDiv } from '../StyleComponents';

type Props= {
  children: React.ReactNode;
  className?: string
}

const cardVariants: Variants = {
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
      duration: 1,
    },
  },
  hover: {
    scale: 1.02,
  },
};

function ScrollBox({ children, className }:Props) {
  const onClickBox = useCallback((event, info) => {
    console.log('Click box');
  }, []);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      whileHover="hover"
      onTap={onClickBox}
      viewport={{ once: true, amount: 0.8 }}
    >
      <MotionDiv
        className={className}
        variants={cardVariants}
      >
        {children}
      </MotionDiv>
    </motion.div>
  );
}

export default ScrollBox;
