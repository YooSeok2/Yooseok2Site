import * as React from "react";
import '../styles/app.scss';
import {motion} from 'framer-motion';

// markup
const IndexPage = () => {
  return (
    <main className="main">
        <section className="home">
          <div className="anim-container">
             <div className="anim-box">
                <motion.div
                  animate={{
                    scale: [0, 2],
                    opacity: [0, 1],
                    borderRadius: ['50%','20%', '5%']
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut"
                  }}
                />
            </div>
          </div>
        </section>
        <section className="about"></section>
        <section className="skils"></section>
    </main>
  )
}

export default IndexPage
