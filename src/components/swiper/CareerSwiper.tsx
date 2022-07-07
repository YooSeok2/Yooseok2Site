import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import '../../styles/app.scss';

// import required modules
import { EffectCube, Pagination } from 'swiper';

function CareerSwiper() {
  return (
    <Swiper
      effect="cube"
      grabCursor
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="career-box shadow-box">
          <h4>box1</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="career-box shadow-box">
          <h4>box2</h4>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default CareerSwiper;
