import React from "react";
import s from "./porfolio.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Portfolio() {
  return (
    <div className={s.contener}>
      <div className={s.portfolio}>
        <div className={s.portfoliotext}>
          <h2 className={s.portfoltext}>Наше портфолио</h2>
          <h2 className={s.portfoltextForSM}>Портфолио</h2>
          <p className={s.portfoltexttwo}>
            В данном портфолио вы сможете увидеть кейсы наших работ на 2022 -
            2023 год
          </p>
          <div className={s.buttonMore}>
            <button className={s.buttonName}>Компьютерные версии </button>
          </div>
        </div>

        <div className={s.clader}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1} // 1 целый + часть следующего
            centeredSlides={false} // чтобы слайд был прижат вправо (у тебя справа карусель)
            navigation
            loop={false}
            watchOverflow={false} // принудительно показываем кнопки
          >
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/firstportfolio.svg`}
                alt="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/secondportfolio.svg`}
                alt="2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/third.svg`} alt="3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/fourds.svg`} alt="4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/fifth.svg`} alt="5" />
            </SwiperSlide>
          </Swiper>
        </div>

{/* 

        <div className={s.claderForSmall}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1} // 1 целый + часть следующего
            centeredSlides={false} // чтобы слайд был прижат вправо (у тебя справа карусель)
            navigation
            loop={false}
            watchOverflow={false} // принудительно показываем кнопки
          >
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/firstportfolio.svg`}
                alt="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/secondportfolio.svg`}
                alt="2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/third.svg`} alt="3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/fourds.svg`} alt="4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${process.env.PUBLIC_URL}/fifth.svg`} alt="5" />
            </SwiperSlide>
          </Swiper>
        </div> */}




<div className={s.sliderWrapper}>
  <div className={s.claderForSmall}>
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation={{
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      }}
      loop={false}
    >
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/firstportfolio.svg`} alt="1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/secondportfolio.svg`} alt="2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/third.svg`} alt="3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/fourds.svg`} alt="4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/fifth.svg`} alt="5" />
      </SwiperSlide>
    </Swiper>
  </div>

  {/* стрелки под слайдером */}
  <div className={s.sliderButtons}>
  <div className={`prev-btn ${s.navButton}`}>‹</div>
  <div className={`next-btn ${s.navButton}`}>›</div>
  </div>
</div>

      </div>
    </div>
  );
}
