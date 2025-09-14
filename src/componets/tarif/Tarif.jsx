// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import s from "./Tarif.module.css";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// function Tarif() {
//   return (
//     <div className={s.contener}>
//       <div>
//         <h2 className={s.title}>Тарифы</h2>
//       </div>

//       <div className={s.switerWripper}>
//         <Swiper
//           effect={"coverflow"} // задаёт стиль перелистывания. Coverflow = слайды немного наклоняются, как 3D-карусель
//           grabCursor={true} // курсор мышки становится «рукой» (как будто хватаешь слайд)
//           centeredSlides={true} // активный слайд всегда по центру
//           modules={[EffectCoverflow, Pagination, Navigation]} // подключаем модуль Navigation (кнопки "вперёд/назад")
//           spaceBetween={10} // расстояние между слайдами в пикселях
//           slidesPerView={3} // ширина слайда считается автоматически (по содержимому)
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }} // добавляет кнопки "влево/вправо"
//           loop={true} // зацикливает карусель (после последнего идёт снова первый)
//           watchOverflow={false} // если слайдов меньше, чем нужно, скрывает кнопки (иначе навигация без смысла)
//           coverflowEffect={{
//             // настройки самого эффекта "coverflow"
//             rotate: 0, // угол поворота карточек (0 = без поворота, 50 = будут заворачиваться)
//             stretch: 0, // насколько сильно слайды будут смещаться друг к другу (можно сделать их плотнее/дальше)
//             depth: 100, // глубина 3D эффекта (чем больше, тем сильнее "уходят вглубь")
//             modifier: 2.5, // сила эффекта (множитель, чем выше, тем эффект ярче)
//           }}
//           pagination={{
//             el: ".swiper-pagination",
//             clickable: true,
//           }}
//           // navigation={{
//           //   nextEl: '.swiper-button-next',
//           //   prevEl: '.swiper-button-prev'
//           // }}

//           className={s.swiper_container}
//         >

//           <SwiperSlide>
//             <div className={s.firstWripper}>
//               <h2 className={s.titleFirst}>Сайт “Каталог”</h2>
//               <p className={s.textWripper}>
//                 Сайт-каталог – это полноценный веб-ресурс, в котором потребители
//                 могут ознакомиться с товарами или услугами компании. Являясь
//                 удобным инструментом продаж, сайт-каталог может повысить
//                 доходность бизнеса и упростить задачу по предоставлению
//                 ассортимента целевой аудитории.
//               </p>
//               <div className={s.PriceOftime}>
//                 <div className={s.priceWripper}>
//                   <p className={s.price}>От 60.000₽</p>
//                   <p className={s.time}>От 15 дней</p>
//                 </div>
//                 <div className={s.buttonName}>
//                   <button className={s.buttomText}>Подробнее</button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className={s.firstWripper}>
//               <h2 className={s.titleFirst}>Сайт “Визитка”</h2>
//               <p className={s.textWripper}>
//                 Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в
//                 интернете. Сайт-визитка содержит несколько страниц, в том числе
//                 – информацию о компании, её товарах и услугах, прейскурант цен,
//                 контакты и координаты для связи.
//               </p>
//               <div className={s.PriceOftime}>
//                 <div className={s.priceWripper}>
//                   <p className={s.price}>От 30.000₽</p>
//                   <p className={s.time}>От 5 дней</p>
//                 </div>
//                 <div className={s.buttonName}>
//                   <button className={s.buttomText}>Подробнее</button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className={s.firstWripper}>
//               <h2 className={s.titleFirst}>Сайт “Визитка”</h2>
//               <p className={s.textWripper}>
//                 Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в
//                 интернете. Сайт-визитка содержит несколько страниц, в том числе
//                 – информацию о компании, её товарах и услугах, прейскурант цен,
//                 контакты и координаты для связи.
//               </p>
//               <div className={s.PriceOftime}>
//                 <div className={s.priceWripper}>
//                   <p className={s.price}>От 30.000₽</p>
//                   <p className={s.time}>От 5 дней</p>
//                 </div>
//                 <div className={s.buttonName}>
//                   <button className={s.buttomText}>Подробнее</button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>      <div className={s.slidercontroller}>
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//         </Swiper>
//       </div>
//     </div>
//   );
// }
// export default Tarif;

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
          spaceBetween={-450}
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
                  <button className={s.buttomText}>Подробнее</button>
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
                  <button className={s.buttomText}>Подробнее</button>
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
                  <button className={s.buttomText}>Подробнее</button>
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
