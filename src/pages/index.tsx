import React from 'react';
import '../styles/app.scss';
import Header from '../components/Header';
import useMoveScroll from '../hooks/menuHooks';
import HomeImg from '../images/home.png';
import SkilImg from '../images/skill.png';
import CareerImg from '../images/employment.png';
import OpacityBox from '../components/framer/OpacityBox';
import ScrollBox from '../components/framer/ScrollBox';
import CareerSwiper from '../components/swiper/CareerSwiper';

export interface MoveMethods {
  onMoveHome: () => void,
  onMoveAbout: () => void,
  onMoveSkils: () => void,
  onMoveCareer: () => void
}

function IndexPage() {
  const [homeRef, onMoveHome] = useMoveScroll();
  const [skilsRef, onMoveSkils] = useMoveScroll();
  const [aboutRef, onMoveAbout] = useMoveScroll();
  const [careerRef, onMoveCareer] = useMoveScroll();

  return (
    <main className="main">
      <Header onMoveHome={onMoveHome} onMoveAbout={onMoveAbout} onMoveSkils={onMoveSkils} onMoveCareer={onMoveCareer} />
      <div className="main-body">
        <div className="home" ref={homeRef}>
          <div className="home-title">
            <img
              src={HomeImg}
              width={80}
              height={80}
              alt="홈"
            />
            <div className="home-title-txt">
              <h4>안녕하세요!</h4>
              <p>별이 빛나는 밤을 부른 가수입니다.</p>
            </div>
          </div>
          <div className="home-anim-box">
            <OpacityBox className="home-big-box">
              <span>박스1</span>
            </OpacityBox>
            <div className="home-anim-boxs">
              <OpacityBox>
                <span>박스2</span>
              </OpacityBox>
              <OpacityBox>
                <span>박스3</span>
              </OpacityBox>
            </div>
          </div>
        </div>
        <div className="skils" ref={skilsRef}>
          <div className="skils-title">
            <img
              src={SkilImg}
              width={45}
              height={45}
              alt="기술"
            />
            <h4>가나</h4>
          </div>
          <div className="skils-cont">
            <ScrollBox className="scroll-box skilbox1" duration={0.8}>
              <h4>hi</h4>
            </ScrollBox>
            <ScrollBox className="scroll-box skilbox2" duration={1.2}>
              <h4>hi</h4>
            </ScrollBox>
            <ScrollBox className="scroll-box skilbox3" duration={1.5}>
              <h4>hi</h4>
            </ScrollBox>
          </div>
        </div>
        <div className="career" ref={careerRef}>
          <div className="career-title">
            <img
              src={CareerImg}
              alt="경력"
              width={60}
              height={60}
            />
            <h4>다라</h4>
          </div>
          <div className="career-swiper">
            <CareerSwiper />
          </div>
        </div>
        <div className="about" ref={aboutRef}>
          Skils
        </div>
      </div>
    </main>
  );
}

export default IndexPage;
