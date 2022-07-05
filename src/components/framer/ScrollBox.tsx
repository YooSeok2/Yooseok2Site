import React, { useCallback } from 'react';
import { motion, Variants } from 'framer-motion';

type Props= {
  children: React.ReactNode;
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
      duration: 1.5,
    },
  },
  hover: {
    scale: 1.02,
  },
};

function ScrollBox({ children }:Props) {
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
      <motion.div
        className="about-anim-box"
        variants={cardVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default ScrollBox;
