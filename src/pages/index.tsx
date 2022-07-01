import * as React from 'react';
import '../styles/app.scss';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import useMoveScroll from '../hooks/menuHooks';

/*

*/
// markup
export interface MoveMethods {
  onMoveHome: () => void,
  onMoveAbout: () => void,
  onMoveSkils: () => void,
  onMoveCareer: () => void
}

function IndexPage() {
  const [homeRef, onMoveHome] = useMoveScroll();
  const [aboutRef, onMoveAbout] = useMoveScroll();
  const [skilsRef, onMoveSkils] = useMoveScroll();
  const [careerRef, onMoveCareer] = useMoveScroll();

  return (
    <main className="main">
      <Header onMoveHome={onMoveHome} onMoveAbout={onMoveAbout} onMoveSkils={onMoveSkils} onMoveCareer={onMoveCareer} />
      <div className="home" ref={homeRef}>
        <div className="anim-box">
          <motion.div
            animate={{
              scale: [0, 2],
              opacity: [0, 1],
              borderRadius: ['50%', '20%', '5%'],
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
      <div className="about" ref={aboutRef}>
        About
      </div>
      <div className="skils" ref={skilsRef}>
        Skils
      </div>
      <div className="career" ref={careerRef}>
        Career
      </div>
    </main>
  );
}

export default IndexPage;
