import React from 'react';
import '../styles/app.scss';
import Header from '../components/Header';
import useMoveScroll from '../hooks/menuHooks';
import TestImg from '../images/Home_perspective_matte.png';
import OpacityBox from '../components/framer/OpacityBox';
import ScrollBox from '../components/framer/ScrollBox';

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
        <div className="img-div">
          <img
            src={TestImg}
            width={80}
            height={80}
            alt="test"
          />
          <div className="text-box">
            <h4>안녕하세요!</h4>
            <p>밤 하늘의 빛나는 별을 부르는 가수</p>
          </div>
        </div>
        <div className="anim-box">
          <OpacityBox className="big-box">
            <span>박스1</span>
          </OpacityBox>
          <div className="anim-boxs">
            <OpacityBox>
              <span>박스2</span>
            </OpacityBox>
            <OpacityBox>
              <span>박스3</span>
            </OpacityBox>
          </div>
        </div>
      </div>
      <div className="about" ref={aboutRef}>
        <ScrollBox>
          <h4>hi</h4>
        </ScrollBox>
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
