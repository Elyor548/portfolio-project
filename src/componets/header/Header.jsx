import React from "react";
import s from "./Header.module.css";

function Header() {
  return (
    <div className={s.contener}>
      <div className={s.headerTwo}>
        <div className={s.ownTitle}>
          <h1 className={s.titleFirst}>РАЗРАБОТКА САЙТОВ</h1>
          <h2 className={s.titleSecond}>ДЛЯ ТВОЕГО БИЗНЕСА</h2>
          <div className={s.We}>
            <h3 className={s.WeStudy}>
              Мы - студия web-разработки, работаем уже более 3-х лет, готовы
              разработать для вас сайт в кротчайшие сроки.
            </h3>
            <h3 className={s.weStudySmall}>
            Мы web-студия которая работает уже больше 3-х лет
            </h3>
          </div>
          <div className={s.quationButton}>
            <div className={s.buttonMore}>
              <button className={s.buttonName}>Подробнее </button>
            </div>
            <input
        className={s.quation}
        type="text"
        placeholder="Остались вопросы?"
      />          </div>
        </div>
        <img
          className={s.men}
          src={`${process.env.PUBLIC_URL}/men.svg`}
          alt=""
        />
        <img
          className={s.men2}
          src={`${process.env.PUBLIC_URL}/menSmall.svg`}
          alt=""
        />
      </div>
      <div className={s.buttonFormobile}>
        <div className={s.firstButton}>
            <button className={s.firstButtonName}>Работаем в сфере web-разработки более 3-х лет</button>
        </div>
        <div className={s.secondButton}>
            <button className={s.firstButtonName}>В нашей команде находятся лучшие исполнители</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

