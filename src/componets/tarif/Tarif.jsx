
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import s from "./Tarif.module.css";
function Tarif() {
  return (
    <div className={s.container}>
      <div>
        <h2 className={s.title}>Тарифы</h2>
      </div>
      <div className={s.sliderWrapper}>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={1} // теперь точно второй слайд
          loop={false} // отключаем бесконечность
          navigation
          spaceBetween={-300}
          coverflowEffect={{
            rotate: 0, // поворот слайдов
            stretch: 0, // расстояние между слайдами
            depth: 100, // глубина эффекта
            modifier: 2, // сила эффекта
            scale: 0.7, // масштаб соседних слайдов (70%)
            slideShadows: false,
          }}
        >
          <SwiperSlide>
            <div className={s.firstWripper}>
              <h2 className={s.titleFirst}>Сайт “Визитка”</h2>
              <p className={s.textWripper}>
                Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в
                интернете. Сайт-визитка содержит несколько страниц, в том числе
                – информацию о компании, её товарах и услугах, прейскурант цен,
                контакты и координаты для связи.
              </p>
              <div className={s.PriceOftime}>
                <div className={s.priceWripper}>
                  <p className={s.price}>От 30.000₽</p>
                  <p className={s.time}>От 5 дней</p>
                </div>
                <div className={s.buttonName}>
                  <a href="#bidform">

                  <button className={s.buttomText}>Подробнее</button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.firstWripper}>
              <h2 className={s.titleFirst}>Сайт “Каталог”</h2>
              <p className={s.textWripper}>
                Сайт-каталог – это полноценный веб-ресурс, в котором потребители
                могут ознакомиться с товарами или услугами компании. Являясь
                удобным инструментом продаж, сайт-каталог может повысить
                доходность бизнеса и упростить задачу по предоставлению
                ассортимента целевой аудитории.
              </p>
              <div className={s.PriceOftime}>
                <div className={s.priceWripper}>
                  <p className={s.price}>От 60.000₽</p>
                  <p className={s.time}>От 15 дней</p>
                </div>
                <div className={s.buttonName}>
                  <a href="#bidform">

                  <button className={s.buttomText}>Подробнее</button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.firstWripper}>
              <h2 className={s.titleFirst}>Сайт “Визитка”</h2>
              <p className={s.textWripper}>
                Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в
                интернете. Сайт-визитка содержит несколько страниц, в том числе
                – информацию о компании, её товарах и услугах, прейскурант цен,
                контакты и координаты для связи.
              </p>
              <div className={s.PriceOftime}>
                <div className={s.priceWripper}>
                  <p className={s.price}>От 30.000₽</p>
                  <p className={s.time}>От 5 дней</p>
                </div>
                <div className={s.buttonName}>
                  <a href="#bidform">

                  <button className={s.buttomText}>Подробнее</button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={s.sliderArrows}>
          <div className="prev"></div>
          <div className="next"></div>
        </div>
      </div>
    </div>
  );
}
export default Tarif;
